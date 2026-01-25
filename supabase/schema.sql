-- Create a private 'profiles' table that links to auth.users
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  role text check (role in ('admin', 'user')) default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profiles enable row level security;

-- Policies for Profiles
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );
  

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create 'posts' table
create table posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text unique not null,
  title text not null,
  summary text,
  content text, -- Markdown content
  cover_image text,
  author_id uuid references auth.users not null,
  published boolean default false,
  tags text[],
  
  -- SEO Fields
  meta_title text,
  meta_description text,
  keywords text[]
);

-- Enable RLS
alter table posts enable row level security;

-- Policies for Posts

-- Everyone can read published posts
create policy "Public posts are viewable by everyone."
  on posts for select
  using ( published = true );

-- Authors can read their own posts (including drafts)
create policy "Authors can see own posts"
  on posts for select
  to authenticated
  using ( auth.uid() = author_id );

-- Admins can do everything
-- Policy: Allow any authenticated user to create posts (assigning themselves as author)
create policy "Users can create posts"
  on posts for insert
  to authenticated
  with check ( auth.uid() = author_id );

-- Policy: Authors can update their own posts
create policy "Authors can update own posts"
  on posts for update
  using ( auth.uid() = author_id );

-- Policy: Authors can delete their own posts
create policy "Authors can delete own posts"
  on posts for delete
  using ( auth.uid() = author_id );

-- Policy: Admins can do everything (override)
create policy "Admins can do everything"
  on posts for all
  using ( 
    exists (
      select 1 from profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- Helper to handle new user signup automatically
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'user'); -- Default to user, manually upgrade to admin in Supabase Dashboard
  return new;
end;
$$;

-- Trigger the function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create 'inquiries' table
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  subject text not null,
  interest text not null,
  message text not null,
  status text default 'pending' check (status in ('pending', 'read', 'replied'))
);

-- Enable RLS
alter table inquiries enable row level security;

-- Policies for Inquiries

-- Public can insert inquiries
create policy "Anyone can insert inquiries"
  on inquiries for insert
  with check ( true );

-- Admins can do everything
create policy "Admins can manage inquiries"
  on inquiries for all
  using ( 
    exists (
      select 1 from profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );
