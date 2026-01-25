import { BlogEditor } from "@/components/admin/blog-editor"
import { IconArrowLeft } from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CreateBlogPage() {
    return (
        <div className="flex flex-col min-h-full bg-muted/10">
            {/* Integrated Back Button directly within the page layout wrapper if needed, 
          but the editor manages its own layout for the most part. 
          We'll keep a minimal wrapper here. */}

            <div className="mb-4 px-6 pt-4 hidden">
                {/* Hidden for now as Editor has a sticky header with actions, 
            but keeping structure if we want breadcrumbs above. */}
                <Link href="/admin/blogs">
                    <Button variant="ghost" size="sm" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                        <IconArrowLeft className="w-4 h-4" />
                        Back to Blogs
                    </Button>
                </Link>
            </div>

            <BlogEditor />
        </div>
    )
}
