import { useState, useEffect } from "react";
// import { useGetAllBlogQuery } from "@/store/services/blogService";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  status: string;
  views: number;
  tags: string[];
  readTime: number;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
}

interface UseBlogPostsProps {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
  filter?: string;
}

export const useBlogPosts = ({
  page = 1,
  pageSize = 10,
  category = "all",
  search = "",
}: UseBlogPostsProps = {}) => {
  const [selectedCategory, setSelectedCategory] = useState(category);

  // Get all published blogs (Commented out for now)
  // const {
  //   data: blogsData,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useGetAllBlogQuery({
  //   page,
  //   pageSize,
  //   status: "PUBLISH",
  //   search: search,
  //   ...(selectedCategory !== "all" && { category: selectedCategory }),
  // });

  const blogsData: any = null;
  const isLoading = false;
  const error = null;
  const refetch = () => { };

  console.log(blogsData, ":.knj")

  // Extract categories from counts data
  const categories =
    blogsData?.data.counts?.map((item: any) => ({
      id: item.category.toLowerCase().replace(".", "").replace(" ", ""),
      name: item.category,
      count: item.count,
    })) || [];

  // Add "All" category with total count
  const allCategories = [
    {
      id: "all",
      name: "All",
      count: blogsData?.data.totalBlogs || 0,
    },
    ...categories,
  ];

  // Filter posts by category
  const filteredPosts =
    blogsData?.data.blogs?.filter(
      (post: any) =>
        selectedCategory === "all" ||
        post.category.toLowerCase().replace(".", "").replace(" ", "") ===
        selectedCategory
    ) || [];

  // Transform API data to match your component structure
  const transformedPosts: Array<{
    id: string;
    slug: string;
    title: string;
    description: string;
    coverImage: string;
    category: string;
    readTime: number;
    views: string;
    publishedAt: string;
    tags: string[];
  }> = filteredPosts.map((post: any) => ({
    id: post.id.toString(),
    slug: post.slug,
    title: post.title,
    description: post.description,
    coverImage: post.coverImage || "/default-blog-image.jpg", // Fallback image
    category: post.category,
    readTime: post.readTime,
    views:
      post.views >= 1000
        ? `${(post.views / 1000).toFixed(1)}k`
        : post.views.toString(),
    publishedAt: new Date(post.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    tags: post.tags,
  }));

  return {
    posts: transformedPosts,
    categories: allCategories,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error,
    refetch,
    pagination: {
      currentPage: blogsData?.data.pageNo || 1,
      totalPages: Math.ceil((blogsData?.data.totalCount || 0) / pageSize),
      totalItems: blogsData?.data.totalCount || 0,
    },
  };
};
