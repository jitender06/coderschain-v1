import { createClient, createStaticClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const supabase = await createStaticClient()

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single()

    if (!post) return {}

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.summary,
        keywords: post.keywords?.join(', '),
        openGraph: {
            title: post.title,
            description: post.summary,
            images: post.cover_image ? [{ url: post.cover_image }] : [],
            type: 'article',
            publishedTime: post.created_at,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            images: post.cover_image ? [post.cover_image] : [],
        }
    }
}

export async function generateStaticParams() {
    const supabase = await createStaticClient()
    const { data: posts } = await supabase
        .from('posts')
        .select('slug')
        .eq('published', true)

    return (posts || []).map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const supabase = await createStaticClient()

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error || !post) {
        notFound()
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(post.created_at))

    // Structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        image: post.cover_image,
        datePublished: post.created_at,
        author: {
            '@type': 'Organization',
            name: 'Coderschain',
            url: 'https://www.coderschain.com'
        }
    }

    return (
        <div className="bg-white dark:bg-black pt-28 pb-20 overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container-web mx-auto px-4 md:px-6 pt-0">
                {/* Back Button */}
                <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-medium">Back to all insights</span>
                </Link>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex gap-2 mb-6">
                            {post.tags?.map((tag: string) => (
                                <span key={tag} className="px-4 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wider rounded-full border border-gray-100 dark:border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-white/10 pb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-[#fe78b8] to-[#ce3ef4] flex items-center justify-center text-white text-xs font-bold">
                                    CC
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Coderschain Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-2 ml-auto">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.cover_image && (
                        <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
                            <Image
                                src={post.cover_image}
                                alt={post.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#fe78b8] prose-img:rounded-3xl prose-pre:bg-neutral-900 prose-pre:rounded-2xl prose-blockquote:border-l-[#fe78b8] prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-neutral-950 prose-blockquote:py-2 prose-blockquote:px-8">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Footer / CTA */}
                    <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-white/10 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in building something together?</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                We help startups and enterprises build digital products that scale.
                            </p>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95">
                                    Let's talk about your project
                                </button>
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    )
}
