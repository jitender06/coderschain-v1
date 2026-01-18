// "use client"

// import * as React from "react"
// import { Search, ExternalLink } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { useDispatch, useSelector } from "react-redux"

// import {
//     CommandDialog,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
//     CommandSeparator,
// } from "@/components/ui/command"
// import { Button } from "@/components/ui/button"
// const projects = [
//     {
//         _id: "1",
//         coverImage: "https://picsum.photos/200/200?random=1",
//         title: "Portfolio Website",
//         tags: [
//             { title: "React" },
//             { title: "Tailwind" },
//             { title: "Next.js" },
//         ],
//         description:
//             "A personal portfolio website showcasing projects, skills, and contact information. Built with modern frontend technologies.",
//     },
//     {
//         _id: "2",
//         coverImage: "https://picsum.photos/200/200?random=2",
//         title: "E-commerce Store",
//         tags: [
//             { title: "Node.js" },
//             { title: "Express" },
//             { title: "MongoDB" },
//         ],
//         description:
//             "An online store with shopping cart, payment integration, and user authentication. Built as a full-stack MERN project.",
//     },
//     {
//         _id: "3",
//         coverImage: "https://picsum.photos/200/200?random=3",
//         title: "Chat Application",
//         tags: [
//             { title: "Socket.io" },
//             { title: "React" },
//         ],
//         description:
//             "A real-time chat application supporting multiple rooms, private messages, and typing indicators.",
//     },
//     {
//         _id: "4",
//         coverImage: "",
//         title: "AI Blog Generator",
//         tags: [
//             { title: "Next.js" },
//             { title: "OpenAI API" },
//         ],
//         description:
//             "A blog generator that uses AI to create articles from prompts. Supports markdown editing and publishing features.",
//     },
// ];

// export function SearchBar() {
//     const [open, setOpen] = React.useState(false)
//     const [searchQuery, setSearchQuery] = React.useState("")
//     const router = useRouter()


//     React.useEffect(() => {
//         const down = (e: any) => {
//             if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//                 e.preventDefault()
//                 setOpen((open) => !open)
//             }
//         }

//         document.addEventListener("keydown", down)
//         return () => document.removeEventListener("keydown", down)
//     }, [])

//     const handleOpenDialog = () => {
//         setOpen(true)
//     }

//     const viewAllProjects = () => {
//         router.push("/search")
//         setOpen(false)
//     }

//     const openProject = (projectId: any) => {
//         router.push(`/projects/${projectId}`)
//         setOpen(false)
//     }

//     const truncateText = (text: any, maxLength: any) => {
//         if (!text) return ""
//         return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
//     }

//     return (
//         <>
//             <Button
//                 variant="outline"
//                 className="hidden lg:flex relative h-9 w-0 justify-start items-center rounded-md text-sm text-muted-foreground md:w-40 lg:w-64 bg-white"
//                 onClick={handleOpenDialog}
//             >
//                 {/* Icon (always shown) */}
//                 <Search className="mr-2 h-6 w-6" />

//                 {/* Text (conditionally hidden on mobile) */}
//                 <div className="flex justify-between items-center w-full">
//                     <span>Search Projects...</span>
//                     <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 flex">
//                         <span className="text-xs">⌘</span>K
//                     </kbd>
//                 </div>
//             </Button>
//             <Search className="h-6 w-6 flex lg:hidden text-white" onClick={handleOpenDialog} />
//             <CommandDialog open={open} onOpenChange={setOpen} className="max-w-2xl">
//                 <CommandInput
//                     placeholder="Search projects..."
//                     value={searchQuery}
//                     onValueChange={setSearchQuery}
//                 />
//                 <CommandList>
//                     <CommandEmpty>No projects found.</CommandEmpty>

//                     <CommandGroup heading="Projects">
//                         {
//                             projects?.map((project: any) => (
//                                 <CommandItem
//                                     key={project._id}
//                                     className="flex items-start py-3 px-2"
//                                     onSelect={() => openProject(project._id)}
//                                 >
//                                     <div className="flex w-full">
//                                         <div className="mr-3 flex-shrink-0">
//                                             <div
//                                                 className="h-12 w-12 rounded bg-muted bg-cover bg-center"
//                                                 style={{
//                                                     backgroundImage: project.coverImage ?
//                                                         `url(${project.coverImage})` :
//                                                         "none"
//                                                 }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 overflow-hidden">
//                                             <h4 className="text-sm font-medium">{project.title}</h4>
//                                             <div className="mt-1 flex flex-wrap gap-1">
//                                                 {project.tags?.slice(0, 2).map((tag: any, i: number) => (
//                                                     <span key={i} className="inline-flex text-xs bg-muted px-1.5 py-0.5 rounded">
//                                                         {tag.title}
//                                                     </span>
//                                                 ))}
//                                                 {project.tags?.length > 2 && (
//                                                     <span className="inline-flex text-xs text-muted-foreground">
//                                                         +{project.tags.length - 2} more
//                                                     </span>
//                                                 )}
//                                             </div>
//                                             <p className="mt-1 text-xs text-muted-foreground">
//                                                 {truncateText(project.description.replace(/<[^>]*>/g, ''), 60)}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </CommandItem>
//                             ))
//                         }
//                     </CommandGroup>

//                     <CommandSeparator />

//                     <CommandGroup>
//                         <CommandItem
//                             onSelect={viewAllProjects}
//                             className="justify-center text-center"
//                         >
//                             <ExternalLink className="mr-2 h-4 w-4" />
//                             <span>Advance search</span>
//                         </CommandItem>
//                     </CommandGroup>
//                 </CommandList>
//             </CommandDialog>
//         </>
//     )
// }

// V2 version
// "use client"

// import * as React from "react"
// import { Search, ExternalLink } from "lucide-react"
// import { useRouter } from "next/navigation"

// import {
//     CommandDialog,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
//     CommandSeparator,
// } from "@/components/ui/command"
// import { Button } from "@/components/ui/button"
// import { useGetAllBlogQuery } from "@/store/services/blogService"

// export function SearchBar() {
//     const [open, setOpen] = React.useState(false)
//     const [searchQuery, setSearchQuery] = React.useState("")
//     const router = useRouter()
//     const [debouncedSearch, setDebouncedSearch] = React.useState("")

//     React.useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebouncedSearch(searchQuery)
//         }, 300)

//         return () => clearTimeout(timer)
//     }, [searchQuery])


//     // Fetch blog data using the API
//     const { data: blogsData, isLoading, error } = useGetAllBlogQuery({
//         page: 1,
//         pageSize: 5,
//         search: debouncedSearch // Optional: send search query to API for server-side filtering
//     })

//     const blogs = blogsData?.data.blogs || []

//     React.useEffect(() => {
//         const down = (e: KeyboardEvent) => {
//             if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//                 e.preventDefault()
//                 setOpen((open) => !open)
//             }
//         }

//         document.addEventListener("keydown", down)
//         return () => document.removeEventListener("keydown", down)
//     }, [])

//     const handleOpenDialog = () => {
//         setOpen(true)
//     }

//     const viewAllBlogs = () => {
//         router.push("/search")
//         setOpen(false)
//     }

//     const openBlog = (blogId: string) => {
//         router.push(`/blogs/${blogId}`)
//         setOpen(false)
//     }

//     const truncateText = (text: string, maxLength: number) => {
//         if (!text) return ""
//         return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
//     }

//     // Filter blogs client-side if API doesn't support search
//     // const blogs = blogs?.filter((blog: any) =>
//     //     blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     //     blog.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     //     blog.tags?.some((tag: any) =>
//     //         tag.title?.toLowerCase().includes(searchQuery.toLowerCase())
//     //     )
//     // )

//     return (
//         <>
//             <Button
//                 variant="outline"
//                 className="hidden lg:flex relative h-9 w-0 justify-start items-center rounded-md text-sm text-muted-foreground md:w-40 lg:w-64 bg-white"
//                 onClick={handleOpenDialog}
//             >
//                 <Search className="mr-2 h-6 w-6" />
//                 <div className="flex justify-between items-center w-full">
//                     <span>Search Blogs...</span>
//                     <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 flex">
//                         <span className="text-xs">⌘</span>K
//                     </kbd>
//                 </div>
//             </Button>
//             <Search className="h-6 w-6 flex lg:hidden text-white" onClick={handleOpenDialog} />
//             <CommandDialog open={open} onOpenChange={setOpen} className="max-w-2xl">
//                 <CommandInput
//                     placeholder="Search blogs..."
//                     value={searchQuery}
//                     onValueChange={setSearchQuery}
//                 />
//                 <CommandList>
//                     {isLoading && (
//                         <CommandEmpty>Loading blogs...</CommandEmpty>
//                     )}

//                     {error && (
//                         <CommandEmpty>Error loading blogs</CommandEmpty>
//                     )}

//                     {!isLoading && !error && blogs?.length === 0 && (
//                         <CommandEmpty>No blogs found.</CommandEmpty>
//                     )}

//                     <CommandGroup heading="Blogs">
//                         {blogs?.map((blog: any) => (
//                             <CommandItem
//                                 key={blog.id}
//                                 className="flex items-start py-3 px-2"
//                                 onSelect={() => openBlog(blog._id)}
//                             >
//                                 <div className="flex w-full">
//                                     <div className="mr-3 flex-shrink-0">
//                                         <div
//                                             className="h-12 w-12 rounded bg-muted bg-cover bg-center"
//                                             style={{
//                                                 backgroundImage: blog.coverImage ?
//                                                     `url(${blog.coverImage})` :
//                                                     "none"
//                                             }}
//                                         />
//                                     </div>
//                                     <div className="flex-1 overflow-hidden">
//                                         <h4 className="text-sm font-medium">{blog.title}</h4>
//                                         <div className="mt-1 flex flex-wrap gap-1">
//                                             {blog.tags?.slice(0, 2).map((tag: any, i: number) => (
//                                                 <span key={i} className="inline-flex text-xs bg-muted px-1.5 py-0.5 rounded">
//                                                     {tag}
//                                                 </span>
//                                             ))}
//                                             {blog.tags?.length > 2 && (
//                                                 <span className="inline-flex text-xs text-muted-foreground">
//                                                     +{blog.tags.length - 2} more
//                                                 </span>
//                                             )}
//                                         </div>
//                                         <p className="mt-1 text-xs text-muted-foreground">
//                                             {truncateText(blog.description?.replace(/<[^>]*>/g, '') || '', 60)}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </CommandItem>
//                         ))}
//                     </CommandGroup>

//                     <CommandSeparator />

//                     <CommandGroup>
//                         <CommandItem
//                             onSelect={viewAllBlogs}
//                             className="justify-center text-center"
//                         >
//                             <ExternalLink className="mr-2 h-4 w-4" />
//                             <span>Advance search</span>
//                         </CommandItem>
//                     </CommandGroup>
//                 </CommandList>
//             </CommandDialog>
//         </>
//     )
// }


"use client"

import * as React from "react"
import { Search, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
// import { useGetAllBlogQuery } from "@/store/services/blogService"

export function SearchBar() {
    const [open, setOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [shouldFetch, setShouldFetch] = React.useState(false)
    const router = useRouter()
    const [debouncedSearch, setDebouncedSearch] = React.useState("")

    // const { data: blogsData, isLoading, error } = useGetAllBlogQuery(
    //     shouldFetch ? {
    //         page: 1,
    //         pageSize: 5,
    //         status: "PUBLISH",
    //         search: debouncedSearch,
    //     } : null,
    //     { skip: !shouldFetch }
    // )

    const blogsData: any = null;
    const isLoading = false;
    const error = null;

    let blogs = blogsData?.data.blogs || []


    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchQuery])
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const handleOpenDialog = () => {
        setShouldFetch(true)
        setOpen(true)
    }

    const viewAllItems = () => {
        router.push("/search")
        setOpen(false)
    }

    const openItem = (slug: string) => {
        router.push(`/search?search=${slug}`)
        setOpen(false)
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
    }

    return (
        <>
            <Button
                variant="outline"
                className="hidden lg:flex relative h-9 w-0 justify-start items-center rounded-md text-sm text-muted-foreground md:w-40 lg:w-64 bg-white"
                onClick={handleOpenDialog}
            >
                <Search className="mr-2 h-6 w-6" />
                <div className="flex justify-between items-center w-full">
                    <span>Search...</span>
                    <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>
            </Button>
            <Search className="h-5 w-5 mr-4 flex lg:hidden dark:text-white " onClick={handleOpenDialog} />
            <CommandDialog open={open} onOpenChange={setOpen} className="max-w-2xl">
                <CommandInput
                    placeholder="Search..."
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                />
                <CommandList>
                    {isLoading && (
                        <CommandGroup heading="Blogs">
                            <SearchSkeleton />
                        </CommandGroup>
                    )}

                    {error && (
                        <CommandEmpty>Error loading blogs</CommandEmpty>
                    )}

                    {!isLoading && !error && blogs.length === 0 && searchQuery && (
                        <CommandEmpty>No blogs found for "{searchQuery}".</CommandEmpty>
                    )}

                    {!isLoading && !error && blogs.length === 0 && !searchQuery && (
                        <CommandEmpty>No blogs available.</CommandEmpty>
                    )}

                    <CommandGroup heading="Blogs">
                        {blogs.map((blog: any) => (
                            <CommandItem
                                key={blog.id}
                                className="flex items-start py-3 px-2"
                                onSelect={() => openItem(blog.slug)}
                            >
                                <div className="flex w-full">
                                    <div className="mr-3 flex-shrink-0">
                                        <div
                                            className="h-12 w-12 rounded bg-muted bg-cover bg-center"
                                            style={{
                                                backgroundImage: blog.coverImage ?
                                                    `url(${blog.coverImage})` :
                                                    "none"
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <h4 className="text-sm font-medium">{blog.title}</h4>
                                        <div className="mt-1 flex flex-wrap gap-1">
                                            {blog.tags?.slice(0, 2).map((tag: string, i: number) => (
                                                <span key={i} className="inline-flex text-xs bg-muted px-1.5 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                            {blog.tags?.length > 2 && (
                                                <span className="inline-flex text-xs text-muted-foreground">
                                                    +{blog.tags.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {truncateText(blog.description, 60)}
                                        </p>
                                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{blog.category}</span>
                                            <span>•</span>
                                            <span>{blog.readTime} min read</span>
                                        </div>
                                    </div>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    {/* 
                    {blogs.length > 0 && (
                        <> */}
                    <CommandSeparator />
                    <CommandGroup>
                        <CommandItem
                            onSelect={viewAllItems}
                            className="justify-center text-center"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            <span>View all results</span>
                        </CommandItem>
                    </CommandGroup>
                    {/* </>
                    )} */}
                </CommandList>
            </CommandDialog>
        </>
    )
}

const SearchSkeleton = () => (
    <div className="space-y-3 p-2">
        {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-start py-3 px-2 animate-pulse">
                <div className="mr-3 flex-shrink-0">
                    <div className="h-12 w-12 rounded bg-muted" />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="flex gap-1">
                        <div className="h-3 bg-muted rounded w-10" />
                        <div className="h-3 bg-muted rounded w-12" />
                    </div>
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                    <div className="h-3 bg-muted rounded w-20" />
                </div>
            </div>
        ))}
    </div>
);