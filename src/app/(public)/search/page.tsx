// "use client";

// import React, { useState, useCallback, useEffect } from 'react';
// import { useDebounce } from '@/hooks/useDebounce';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Skeleton } from '@/components/ui/skeleton';
// import {
//   Search,
//   Calendar,
//   Clock,
//   Eye,
//   ArrowLeft,
//   ArrowRight,
//   Filter,
//   X,
//   Bookmark
// } from 'lucide-react';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// // import { useGetAllBlogQuery } from '@/store/services/blogService';
// import { BlogCard } from '@/components/public/blog/BlogCard';

// interface SearchParams {
//   search?: string;
//   category?: string;
//   page?: number;
//   pageSize?: number;
// }

// function SearchPage() {
//   const [searchParams, setSearchParams] = useState<SearchParams>({
//     search: '',
//     category: '',
//     page: 1,
//     pageSize: 6
//   });

//   const [searchInput, setSearchInput] = useState('');
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const debouncedSearch = useDebounce(searchInput, 500);

//   // const { data, isLoading, isError } = useGetAllBlogQuery(searchParams);
const data: any = null;
const isLoading = false;
const isError = false;

//   // Update search params when debounced search changes
//   useEffect(() => {
//     setSearchParams(prev => ({
//       ...prev,
//       search: debouncedSearch,
//       page: 1
//     }));
//   }, [debouncedSearch]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   const handleCategoryChange = (category: string) => {
//     setSearchParams(prev => ({
//       ...prev,
//       category: category === prev.category ? '' : category,
//       page: 1
//     }));
//     setShowMobileFilters(false);
//   };

//   const handlePageChange = (newPage: number) => {
//     setSearchParams(prev => ({
//       ...prev,
//       page: newPage
//     }));
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const clearFilters = () => {
//     setSearchInput('');
//     setSearchParams({
//       search: '',
//       category: '',
//       page: 1,
//       pageSize: 6
//     });
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const categories = data?.data?.counts || [];
//   const hasActiveFilters = searchParams.search || searchParams.category;

//   return (
//     <div className="min-h-screen bg-background py-4 sm:py-8">
//       <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
//             Discover Blogs
//           </h1>
//           <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
//             Explore amazing content across various categories and topics
//           </p>
//         </div>

//         {/* Search Bar and Filters */}
//         <div className="space-y-4 mb-6 sm:mb-8">
//           {/* Search Bar */}
//           <div className="relative max-w-2xl mx-auto">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
//             <Input
//               type="text"
//               placeholder="Search blogs by title, description, or content..."
//               value={searchInput}
//               onChange={handleSearchChange}
//               className="pl-9 sm:pl-10 pr-20 py-5 sm:py-6 text-sm sm:text-lg border-2 border-border focus:border-primary transition-all duration-300 bg-card shadow-sm"
//             />
//             {searchInput && (
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setSearchInput('')}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
//               >
//                 <X className="h-3 w-3 sm:h-4 sm:w-4" />
//               </Button>
//             )}
//           </div>

//           {/* Mobile Filter Toggle */}
//           <div className="flex items-center justify-between sm:hidden">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setShowMobileFilters(!showMobileFilters)}
//               className="flex items-center space-x-2"
//             >
//               <Filter className="h-4 w-4" />
//               <span>Filters</span>
//               {hasActiveFilters && (
//                 <Badge variant="secondary" className="h-5 w-5 p-0 flex items-center justify-center">
//                   !
//                 </Badge>
//               )}
//             </Button>

//             {hasActiveFilters && (
//               <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
//                 Clear All
//               </Button>
//             )}
//           </div>

//           {/* Categories Filter */}
//           <div className={cn(
//             "space-y-3",
//             showMobileFilters ? "block" : "hidden sm:block"
//           )}>
//             <div className="flex items-center justify-between">
//               <h3 className="text-sm font-semibold text-foreground">Categories</h3>
//               <div className="flex items-center space-x-2">
//                 {searchParams.category && (
//                   <Badge variant="secondary" className="text-xs">
//                     {searchParams.category}
//                   </Badge>
//                 )}
//                 <Button
//                   variant={!searchParams.category ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => handleCategoryChange('')}
//                   className="hidden sm:inline-flex text-xs h-8"
//                 >
//                   All
//                 </Button>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <Button
//                 variant={!searchParams.category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => handleCategoryChange('')}
//                 className="sm:hidden text-xs h-8"
//               >
//                 All Categories
//               </Button>
//               {categories.map((cat: any) => (
//                 <Button
//                   key={cat.category}
//                   variant={searchParams.category === cat.category ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => handleCategoryChange(cat.category)}
//                   className="text-xs h-8 flex-1 sm:flex-none min-w-[80px]"
//                 >
//                   <span className="truncate">{cat.category}</span>
//                   <Badge
//                     variant={searchParams.category === cat.category ? "secondary" : "outline"}
//                     className="ml-2 h-4 text-[10px]"
//                   >
//                     {cat.count}
//                   </Badge>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Results Info and Active Filters */}
//         <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
//           <p className="text-sm sm:text-base text-muted-foreground">
//             {data?.data?.totalBlogs ? `Found ${data.data.totalBlogs} blog${data.data.totalBlogs !== 1 ? 's' : ''}` : 'Searching...'}
//             {searchParams.search && (
//               <span className="text-foreground font-medium"> for "{searchParams.search}"</span>
//             )}
//             {searchParams.category && (
//               <span className="text-foreground font-medium"> in {searchParams.category}</span>
//             )}
//           </p>

//           {hasActiveFilters && (
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={clearFilters}
//               className="hidden sm:inline-flex text-sm"
//             >
//               <X className="h-4 w-4 mr-1" />
//               Clear Filters
//             </Button>
//           )}
//         </div>

//         {/* Blog Grid */}
//         {isLoading ? (
//           <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <Card key={index} className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
//                 <CardHeader className="pb-3">
//                   <Skeleton className="h-5 w-3/4 mb-2" />
//                   <Skeleton className="h-4 w-full mb-1" />
//                   <Skeleton className="h-4 w-2/3" />
//                 </CardHeader>
//                 <CardContent className="pb-3">
//                   <Skeleton className="h-20 w-full rounded-lg mb-3" />
//                   <div className="flex space-x-2">
//                     <Skeleton className="h-5 w-16" />
//                     <Skeleton className="h-5 w-20" />
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Skeleton className="h-4 w-1/2" />
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         ) : isError ? (
//           <div className="text-center py-8 sm:py-12 bg-destructive/10 rounded-lg border border-destructive/20">
//             <div className="max-w-md mx-auto">
//               <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="h-8 w-8 text-destructive" />
//               </div>
//               <h3 className="text-lg font-semibold text-foreground mb-2">Error loading blogs</h3>
//               <p className="text-muted-foreground mb-4">
//                 Please check your connection and try again.
//               </p>
//               <Button onClick={() => window.location.reload()}>
//                 Retry
//               </Button>
//             </div>
//           </div>
//         ) : data?.data?.blogs?.length === 0 ? (
//           <div className="text-center py-8 sm:py-12 bg-muted/30 rounded-lg border border-border">
//             <Search className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
//             <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No blogs found</h3>
//             <p className="text-muted-foreground max-w-md mx-auto px-4">
//               {hasActiveFilters
//                 ? "Try adjusting your search terms or filters to find what you're looking for."
//                 : "No blogs available at the moment. Check back later!"
//               }
//             </p>
//             {hasActiveFilters && (
//               <Button onClick={clearFilters} className="mt-4">
//                 Clear Filters
//               </Button>
//             )}
//           </div>
//         ) : (
//           <>
//             {/* Blog Grid */}
//             <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
//               {data?.data?.blogs?.map((blog: any) => (
//                  <BlogCard key={blog.id} post={blog} />
//               ))}
//             </div>

//             {/* Pagination */}
//             {data?.data && data.data.totalBlogs > searchParams.pageSize! && (
//               <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 <Button
//                   variant="outline"
//                   onClick={() => handlePageChange(searchParams.page! - 1)}
//                   disabled={searchParams.page === 1}
//                   className="w-full sm:w-auto flex items-center space-x-2 order-2 sm:order-1"
//                 >
//                   <ArrowLeft className="h-4 w-4" />
//                   <span className="sm:inline">Previous</span>
//                 </Button>

//                 <div className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
//                   {Array.from({
//                     length: Math.ceil(data.data.totalBlogs / searchParams.pageSize!)
//                   }, (_, i) => i + 1)
//                     .filter(page =>
//                       page === 1 ||
//                       page === Math.ceil(data.data.totalBlogs / searchParams.pageSize!) ||
//                       Math.abs(page - searchParams.page!) <= 1
//                     )
//                     .map((page, index, array) => {
//                       const showEllipsis = index < array.length - 1 && array[index + 1] - page > 1;
//                       return (
//                         <React.Fragment key={page}>
//                           <Button
//                             variant={searchParams.page === page ? "default" : "outline"}
//                             onClick={() => handlePageChange(page)}
//                             className="h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm"
//                           >
//                             {page}
//                           </Button>
//                           {showEllipsis && (
//                             <span className="text-muted-foreground px-1">...</span>
//                           )}
//                         </React.Fragment>
//                       );
//                     })}
//                 </div>

//                 <Button
//                   variant="outline"
//                   onClick={() => handlePageChange(searchParams.page! + 1)}
//                   disabled={searchParams.page === Math.ceil(data.data.totalBlogs / searchParams.pageSize!)}
//                   className="w-full sm:w-auto flex items-center space-x-2 order-3"
//                 >
//                   <span className="sm:inline">Next</span>
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;


"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Search,
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  ArrowRight,
  Filter,
  X,
  Tag,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
// import { useGetAllBlogQuery } from '@/store/services/blogService';
// import { BlogCard } from '@/components/public/blog/BlogCard';
import { Highlighter } from '@/components/ui/highlighter';


interface SearchParams {
  search?: string;
  category?: string;
  tags?: string;
  page?: number;
  pageSize?: number;
}

function SearchPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    search: '',
    category: '',
    tags: '',
    page: 1,
    pageSize: 6
  });

  const [searchInput, setSearchInput] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const debouncedSearch = useDebounce(searchInput, 500);

  // const { data, isLoading, isError } = useGetAllBlogQuery(searchParams);
  const data: any = null;
  const isLoading = false;
  const isError = false;

  // Extract all unique tags from blogs
  const allTags = React.useMemo(() => {
    if (!data?.data?.blogs) return [];
    const tagsSet = new Set<string>();
    data.data.blogs.forEach((blog: any) => {
      blog.tags?.forEach((tag: string) => {
        if (tag && tag.trim()) {
          tagsSet.add(tag.trim());
        }
      });
    });
    return Array.from(tagsSet).sort();
  }, [data?.data?.blogs]);

  // Update search params when debounced search changes
  useEffect(() => {
    setSearchParams(prev => ({
      ...prev,
      search: debouncedSearch,
      page: 1
    }));
  }, [debouncedSearch]);

  // Update tags in search params when selectedTags changes
  useEffect(() => {
    setSearchParams(prev => ({
      ...prev,
      tags: selectedTags.join(','),
      page: 1
    }));
  }, [selectedTags]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSearchParams(prev => ({
      ...prev,
      category: category === prev.category ? '' : category,
      page: 1
    }));
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearTagFilters = () => {
    setSelectedTags([]);
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => ({
      ...prev,
      page: newPage
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchInput('');
    setSelectedTags([]);
    setSearchParams({
      search: '',
      category: '',
      tags: '',
      page: 1,
      pageSize: 6
    });
  };

  const categories = data?.data?.counts || [];
  const hasActiveFilters = searchParams.search || searchParams.category || selectedTags.length > 0;

  return (
    <section className="container-web">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4 py-2 md:py-10">
          <h3 className='flex justify-center items-center flex-col md:flex-row'>
            <span className="text-2xl md:text-5xl font-bold text-foreground mb-3">
              <Highlighter action="underline" color="#ffde59">
                Search
              </Highlighter>
            </span>
          </h3>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find what you're looking for
          </p>
        </div>

        {/* Search Bar and Filters */}
        <div className="space-y-4 mb-6 sm:mb-8">
          {/* Search Bar */}
          <div className="relative mx-auto mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
              className="pl-9 sm:pl-10 pr-20 py-5 sm:py-6 text-sm sm:text-lg border-2 border-border focus:border-primary transition-all duration-300 bg-card shadow-sm"
            />
            {searchInput && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchInput('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between sm:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <Badge variant="secondary" className="h-5 w-5 p-0 flex items-center justify-center">
                  !
                </Badge>
              )}
            </Button>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear All
              </Button>
            )}
          </div>

          {/* Filters Container */}
          <div className={cn(
            "space-y-4",
            showMobileFilters ? "block" : "hidden sm:block"
          )}>
            {/* Categories Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Categories</h3>
                {searchParams.category && (
                  <Badge variant="secondary" className="text-xs">
                    {searchParams.category}
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={!searchParams.category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange('')}
                  className="text-xs h-8"
                >
                  All Categories
                </Button>
                {categories.map((cat: any) => (
                  <Button
                    key={cat.category}
                    variant={searchParams.category === cat.category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(cat.category)}
                    className="text-xs h-8 flex-1 sm:flex-none min-w-[80px]"
                  >
                    <span className="truncate">{cat.category}</span>
                    <Badge
                      variant={searchParams.category === cat.category ? "secondary" : "outline"}
                      className="ml-2 h-4 text-[10px]"
                    >
                      {cat.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Tags</h3>
                <div className="flex items-center space-x-2">
                  {selectedTags.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedTags.length} selected
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTagsDropdown(!showTagsDropdown)}
                    className="h-8 px-2"
                  >
                    {showTagsDropdown ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-destructive/20 transition-colors"
                      onClick={() => handleTagChange(tag)}
                    >
                      {tag}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearTagFilters}
                    className="h-6 text-xs"
                  >
                    Clear All
                  </Button>
                </div>
              )}

              {/* Tags Checkbox Grid */}
              <div className={cn(
                "grid gap-2 p-3 border rounded-lg bg-muted/30",
                showTagsDropdown ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "hidden"
              )}>
                {allTags.length > 0 ? (
                  allTags.map(tag => (
                    <div key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tag-${tag}`}
                        checked={selectedTags.includes(tag)}
                        onCheckedChange={() => handleTagChange(tag)}
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor={`tag-${tag}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1 truncate"
                      >
                        {tag}
                      </label>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-muted-foreground text-sm py-4">
                    No tags available
                  </div>
                )}
              </div>

              {!showTagsDropdown && allTags.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTagsDropdown(true)}
                  className="w-full justify-center text-sm"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  Show Tags ({allTags.length})
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Results Info and Active Filters */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-sm sm:text-base text-muted-foreground">
            {data?.data?.totalBlogs ? `Found ${data.data.totalBlogs} blog${data.data.totalBlogs !== 1 ? 's' : ''}` : 'Searching...'}
            {searchParams.search && (
              <span className="text-foreground font-medium"> for "{searchParams.search}"</span>
            )}
            {searchParams.category && (
              <span className="text-foreground font-medium"> in {searchParams.category}</span>
            )}
            {selectedTags.length > 0 && (
              <span className="text-foreground font-medium"> with tags: {selectedTags.join(', ')}</span>
            )}
          </p>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="hidden sm:inline-flex text-sm"
            >
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent className="pb-3">
                  <Skeleton className="h-20 w-full rounded-lg mb-3" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-4 w-1/2" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-8 sm:py-12 bg-destructive/10 rounded-lg border border-destructive/20">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Error loading blogs</h3>
              <p className="text-muted-foreground mb-4">
                Please check your connection and try again.
              </p>
              <Button onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          </div>
        ) : data?.data?.blogs?.length === 0 ? (
          <div className="text-center py-8 sm:py-12 bg-muted/30 rounded-lg border border-border">
            <Search className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No blogs found</h3>
            <p className="text-muted-foreground max-w-md mx-auto px-4">
              {hasActiveFilters
                ? "Try adjusting your search terms or filters to find what you're looking for."
                : "No blogs available at the moment. Check back later!"
              }
            </p>
            {hasActiveFilters && (
              <Button onClick={clearFilters} className="mt-4">
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
              {/* Blog results would go here */}
            </div>

            {/* Pagination */}
            {data?.data && data.data.totalBlogs > searchParams.pageSize! && (
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(searchParams.page! - 1)}
                  disabled={searchParams.page === 1}
                  className="w-full sm:w-auto flex items-center space-x-2 order-2 sm:order-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sm:inline">Previous</span>
                </Button>

                <div className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
                  {Array.from({
                    length: Math.ceil(data.data.totalBlogs / searchParams.pageSize!)
                  }, (_, i) => i + 1)
                    .filter(page =>
                      page === 1 ||
                      page === Math.ceil(data.data.totalBlogs / searchParams.pageSize!) ||
                      Math.abs(page - searchParams.page!) <= 1
                    )
                    .map((page, index, array) => {
                      const showEllipsis = index < array.length - 1 && array[index + 1] - page > 1;
                      return (
                        <React.Fragment key={page}>
                          <Button
                            variant={searchParams.page === page ? "default" : "outline"}
                            onClick={() => handlePageChange(page)}
                            className="h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm"
                          >
                            {page}
                          </Button>
                          {showEllipsis && (
                            <span className="text-muted-foreground px-1">...</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                </div>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(searchParams.page! + 1)}
                  disabled={searchParams.page === Math.ceil(data.data.totalBlogs / searchParams.pageSize!)}
                  className="w-full sm:w-auto flex items-center space-x-2 order-3"
                >
                  <span className="sm:inline">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default SearchPage;