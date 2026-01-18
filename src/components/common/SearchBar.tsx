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

export function SearchBar() {
    const [open, setOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [shouldFetch, setShouldFetch] = React.useState(false)
    const router = useRouter()
    const [debouncedSearch, setDebouncedSearch] = React.useState("")

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
                        <CommandGroup heading="Results">
                            <SearchSkeleton />
                        </CommandGroup>
                    )}

                    {error && (
                        <CommandEmpty>Error loading results</CommandEmpty>
                    )}

                    {!isLoading && !error && blogs.length === 0 && searchQuery && (
                        <CommandEmpty>No results found for "{searchQuery}".</CommandEmpty>
                    )}

                    {!isLoading && !error && blogs.length === 0 && !searchQuery && (
                        <CommandEmpty>No results available.</CommandEmpty>
                    )}

                    <CommandGroup heading="Results">
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
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {truncateText(blog.description, 60)}
                                        </p>
                                    </div>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>

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
                    <div className="h-3 bg-muted rounded w-full" />
                </div>
            </div>
        ))}
    </div>
);