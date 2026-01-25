import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

export const metadata = {
    title: "Our Blog | Coderschain",
    description: "Insights, tutorials, and news from the Coderschain team about software development, AI, and design.",
}

export default async function BlogsPage() {
    const supabase = await createClient()

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching posts:', error)
    }

    return (
        <div className="bg-white dark:bg-black pb-20">
            <div className="container-web mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                        Our <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">Digital Insights</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        Discover articles about the latest in tech, productivity, and our journey building world-class products.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center border rounded-3xl bg-neutral-50 dark:bg-neutral-900/50">
                            <p className="text-gray-500 dark:text-gray-400">No blog posts found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function BlogCard({ post }: { post: any }) {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(post.created_at))

    return (
        <Link href={`/blogs/${post.slug}`} className="group block">
            <article className="h-full flex flex-col bg-gray-50 dark:bg-neutral-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 transition-all duration-300 hover:border-[#fe78b8]/20 hover:shadow-2xl hover:shadow-[#fe78b8]/5">
                {/* Cover Image */}
                <div className="relative aspect-[16/17] overflow-hidden">
                    {post?.cover_image ? (
                        <Image
                            src={post?.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                            <span className="text-gray-400 dark:text-neutral-600">No Image</span>
                        </div>
                    )}
                    {/* Tags Layer */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {post.tags && post.tags.slice(0, 2).map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5 font-medium italic underline underline-offset-4 decoration-[#fe78b8]/30">
                            {formattedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 capitalize ">
                            {post.tags?.[0] || 'Article'}
                        </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-[#fe78b8] transition-colors">
                        {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.summary}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Read Article</span>
                            <ArrowRight className="w-4 h-4 text-[#fe78b8]" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}
