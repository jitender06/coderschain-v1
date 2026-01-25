"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { IconDeviceFloppy, IconEye, IconCloudUpload } from "@tabler/icons-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { CldUploadButton } from "next-cloudinary"
import { createPost, updatePost } from "@/app/admin/blogs/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

// Schema definition
const blogSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    slug: z.string()
        .min(2, "Slug must be at least 2 characters.")
        .regex(/^[a-z0-9-]+$/, "Slug must only contain lowercase letters, numbers, and hyphens."),
    summary: z.string().optional(),
    content: z.string().min(10, "Content must be at least 10 characters."),
    published: z.boolean(),
    cover_image: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    keywords: z.string().optional(), // We'll handle comma-separated string -> array conversion
})

type BlogFormValues = z.infer<typeof blogSchema>

interface BlogEditorProps {
    initialData?: BlogFormValues
    postId?: string
}

export function BlogEditor({ initialData, postId }: BlogEditorProps) {
    const [activeTab, setActiveTab] = useState("write")

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: initialData || {
            title: "",
            slug: "",
            summary: "",
            content: "",
            published: false,
            cover_image: "",
            meta_title: "",
            meta_description: "",
            keywords: "",
        },
    })

    // Auto-generate slug from title if slug is empty
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value
        form.setValue("title", title)

        if (!form.getValues("slug")) {
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric chars with hyphens
                .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
            form.setValue("slug", slug)
        }
    }

    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function onSubmit(data: BlogFormValues) {
        setIsSubmitting(true)
        try {
            let result;
            if (postId) {
                result = await updatePost(postId, data)
            } else {
                result = await createPost(data)
            }

            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success(postId ? "Post updated successfully!" : "Post created successfully!")
                router.push("/admin/blogs")
            }
        } catch (error) {
            console.error(error)
            toast.error("An unexpected error occurred.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-20">

                {/* Top Actions Bar (Sticky) */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/95 backdrop-blur-md px-6 py-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold">
                            {initialData ? "Edit Post" : "Create New Post"}
                        </h1>
                        <FormField
                            control={form.control}
                            name="published"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md border p-2">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="text-xs font-normal">
                                        {field.value ? "Published" : "Draft"}
                                    </FormLabel>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => setActiveTab(activeTab === 'write' ? 'preview' : 'write')}>
                            <IconEye className="w-4 h-4 mr-2" />
                            {activeTab === 'write' ? 'Preview' : 'Edit'}
                        </Button>
                        <Button type="submit" size="sm" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>Saving...</>
                            ) : (
                                <>
                                    <IconDeviceFloppy className="w-4 h-4 mr-2" />
                                    Save
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 max-w-7xl mx-auto">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter post title"
                                                    {...field}
                                                    onChange={handleTitleChange}
                                                    className="text-lg font-medium"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Slug</FormLabel>
                                            <FormControl>
                                                <Input placeholder="post-url-slug" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                The URL-friendly version of the name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-2">
                                    <FormLabel>Content (Markdown)</FormLabel>
                                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="write">Write</TabsTrigger>
                                            <TabsTrigger value="preview">Preview</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="write" className="mt-2">
                                            <FormField
                                                control={form.control}
                                                name="content"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Write your post content here using Markdown..."
                                                                className="min-h-[500px] font-mono"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </TabsContent>
                                        <TabsContent value="preview" className="mt-2">
                                            <div className="min-h-[500px] rounded-md border p-6 prose dark:prose-invert max-w-none">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {form.watch("content") || "*No content yet*"}
                                                </ReactMarkdown>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Meta & Settings */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Cover Image */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <FormLabel>Cover Image</FormLabel>
                                <FormField
                                    control={form.control}
                                    name="cover_image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="space-y-4">
                                                    {field.value ? (
                                                        <div className="relative aspect-video rounded-md overflow-hidden border">
                                                            <img src={field.value} alt="Cover" className="object-cover w-full h-full" />
                                                            <Button
                                                                type="button"
                                                                variant="destructive"
                                                                size="sm"
                                                                className="absolute top-2 right-2"
                                                                onClick={() => field.onChange("")}
                                                            >
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <CldUploadButton
                                                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} // Configured via environment variable
                                                            onSuccess={(result: any) => {
                                                                if (result?.info?.secure_url) {
                                                                    field.onChange(result.info.secure_url)
                                                                }
                                                            }}
                                                            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-md hover:bg-muted/50 transition-colors cursor-pointer"
                                                        >
                                                            <IconCloudUpload className="w-8 h-8 text-muted-foreground mb-2" />
                                                            <span className="text-sm text-muted-foreground">Click to upload cover image</span>
                                                        </CldUploadButton>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* SEO Settings */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">SEO Settings</h3>

                                <FormField
                                    control={form.control}
                                    name="meta_title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Meta Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="SEO Title (defaults to post title)" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="meta_description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Meta Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Brief summary for search results..." className="h-24 resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="keywords"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Keywords</FormLabel>
                                            <FormControl>
                                                <Input placeholder="react, nextjs, web dev (comma separated)" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </form>
        </Form>
    )
}
