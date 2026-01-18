'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Bookmark, Calendar, Clock, Eye, ArrowRight, BookmarkCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import { useGetAllBookmarkedBlogsQuery } from '@/store/services/blogService';
// // import { BlogCard } from '@/components/public/blog/BlogCard';
import { Highlighter } from '@/components/ui/highlighter';

export default function BookmarksPage() {
    // const { data, isLoading, error, refetch } = useGetAllBookmarkedBlogsQuery(undefined);
    const data: any = null;
    const isLoading = false;
    const error = null;
    const refetch = () => { };

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    Failed to load bookmarks. Please try again.
                    {/* </AlertDescription> */}
                    {/* </Alert> */}
                    <Button onClick={refetch} variant="outline">
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container-web">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-4 py-2 md:py-10">
                    <h3 className='flex justify-center items-center flex-col md:flex-row'>
                        <span className="text-2xl md:text-5xl font-bold text-foreground mb-3">
                            <Highlighter action="underline" color="#ffde59">
                                My Bookmarks
                            </Highlighter>
                        </span>
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Manage your bookmarks
                    </p>
                </div>

                {/* Bookmarks Grid */}
                {isLoading ? (
                    <BookmarksSkeleton />
                ) : data?.data?.blogs && data.data.blogs.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data.data.blogs.map((blog: any) => (
                            // <BlogCard key={blog.id} post={blog} />
                            null
                        ))}
                    </div>
                ) : (
                    <EmptyBookmarks />
                )}
            </div>
        </div>
    );
}


// Empty State Component
function EmptyBookmarks() {
    return (
        <div className="text-center py-16">
            <Bookmark className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookmarks yet</h3>
            <p className="text-gray-600 mb-6">Start saving your favorite items to see them here.</p>
            <Link href="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    );
}

// Loading Skeleton Component
function BookmarksSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-full">
                    <CardContent className="p-0">
                        <Skeleton className="h-48 w-full rounded-t-lg" />
                        <div className="p-4 space-y-3">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <div className="flex justify-between pt-2">
                                <Skeleton className="h-3 w-20" />
                                <Skeleton className="h-3 w-16" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}