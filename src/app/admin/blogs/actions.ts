'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(data: any) {
    const supabase = await createClient()

    // 1. Check Authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: "Unauthorized" }
    }

    // 2. Prepare Data
    // We assume data comes in matching the schema, but we should sanitize/validate if needed.
    // For now, we trust the Zod validation from the client, but passing it through as-is.
    const postData = {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        content: data.content,
        cover_image: data.cover_image,
        published: data.published,
        meta_title: data.meta_title,
        meta_description: data.meta_description,
        keywords: data.keywords ? data.keywords.split(',').map((k: string) => k.trim()) : [],
        author_id: user.id,
    }

    // 3. Insert into Supabase
    const { data: newPost, error } = await supabase
        .from('posts')
        .insert([postData])
        .select()
        .single()

    if (error) {
        console.error("Error creating post:", error)
        return { error: error.message }
    }

    // 4. Revalidate and Redirect
    revalidatePath('/admin/blogs')
    revalidatePath('/blogs')
    revalidatePath(`/blogs/${newPost.slug}`)
    return { success: true, id: newPost.id }
}

export async function updatePost(id: string, data: any) {
    const supabase = await createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: "Unauthorized" }
    }

    const postData = {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        content: data.content,
        cover_image: data.cover_image,
        published: data.published,
        meta_title: data.meta_title,
        meta_description: data.meta_description,
        keywords: data.keywords ? data.keywords.split(',').map((k: string) => k.trim()) : [],
        updated_at: new Date().toISOString(),
    }

    const { error } = await supabase
        .from('posts')
        .update(postData)
        .eq('id', id)

    if (error) {
        console.error("Error updating post:", error)
        return { error: error.message }
    }

    revalidatePath('/admin/blogs')
    revalidatePath(`/admin/blogs/${id}/edit`)
    revalidatePath('/blogs')
    revalidatePath(`/blogs/${data.slug}`)
    return { success: true }
}

export async function deletePost(id: string) {
    const supabase = await createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: "Unauthorized" }
    }

    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)

    if (error) {
        console.error("Error deleting post:", error)
        return { error: error.message }
    }

    revalidatePath('/admin/blogs')
    revalidatePath('/blogs')
    return { success: true }
}
