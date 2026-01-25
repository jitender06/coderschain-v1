import { BlogsTable, BlogPost } from "@/components/admin/blogs-table"
import { createClient } from "@/utils/supabase/server"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default async function BlogsPage() {
    const supabase = await createClient()

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error("Error fetching posts:", error)
        // Handle error responsibly - maybe show an error message or empty list
    }

    const formattedPosts: BlogPost[] = (posts || []).map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        status: post.published ? 'published' : 'draft',
        created_at: new Date(post.created_at).toLocaleDateString(),
        author: "Admin", // TODO: Fetch actual author name via join if needed
    }))

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
                <div className="flex items-center space-x-2">
                    {/* <Button>Download</Button> */}
                </div>
            </div>
            <BlogsTable data={formattedPosts} />
        </div>
    )
}
