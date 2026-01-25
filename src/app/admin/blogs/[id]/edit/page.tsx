import { BlogEditor } from "@/components/admin/blog-editor"
import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation"

interface PageProps {
    params: {
        id: string
    }
}

export default async function EditBlogPage({ params }: PageProps) {
    // Await params as per Next.js 15+ requirements if applicable, or safe access
    const { id } = await params

    const supabase = await createClient()

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !post) {
        console.error("Error fetching post:", error)
        notFound()
    }

    // Transform database shape to form values shape if necessary
    const initialData = {
        title: post.title,
        slug: post.slug,
        summary: post.summary || "",
        content: post.content || "",
        published: post.published,
        cover_image: post.cover_image || "",
        meta_title: post.meta_title || "",
        meta_description: post.meta_description || "",
        keywords: post.keywords ? post.keywords.join(', ') : "",
    }

    return (
        <div className="flex flex-col h-full bg-muted/10">
            <BlogEditor initialData={initialData} postId={post.id} />
        </div>
    )
}
