export default function Loading() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-4 md:px-6 pt-28 pb-16">
                <div className="animate-pulse">
                    {/* Back Button Skeleton */}
                    <div className="h-10 w-32 bg-muted rounded mb-8" />

                    {/* Hero Section Skeleton */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-4">
                            <div className="h-6 w-24 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-6 bg-muted rounded" />
                            <div className="h-6 bg-muted rounded w-3/4" />
                        </div>
                        <div className="h-64 bg-muted rounded" />
                    </div>

                    {/* Content Skeleton */}
                    <div className="space-y-8">
                        <div className="h-8 bg-muted rounded w-1/3" />
                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-4 bg-muted rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}