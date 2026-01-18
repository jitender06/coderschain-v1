import { useFormik } from "formik";
import { blogSchema, BlogFormData } from "@/schemas/blogSchema";
import { useEffect, useState } from "react";
// import {
//   useGetAllBlogQuery,
//   useAddBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
// } from "@/store/services/blogService";
// import { useGetAllCategoryQuery } from "@/store/services/categoryService";

interface UseBlogOperationsProps {
  page?: number;
  limit?: number;
}

export const useBlogOperations = ({
  page = 1,
  limit = 10,
}: UseBlogOperationsProps = {}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "PUBLISH" | "DRAFT">(
    "PUBLISH"
  );
  const [currentPage, setCurrentPage] = useState(page);
  const [pageSize, setPageSize] = useState(limit);

  // API Queries (Commented out for now)
  // const {
  //   data: blogsData,
  //   isLoading,
  //   error,
  // } = useGetAllBlogQuery({
  //   page: currentPage,
  //   pageSize,
  //   search: searchTerm,
  //   status: statusFilter === "all" ? undefined : statusFilter,
  // });

  // const { data: categoriesData } = useGetAllCategoryQuery({});

  // const [addBlog, { isLoading: isAdding }] = useAddBlogMutation();
  // const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  // const [deleteBlog] = useDeleteBlogMutation();

  const blogsData: any = null;
  const categoriesData: any = null;
  const isLoading = false;
  const isAdding = false;
  const isUpdating = false;
  const error = null;

  const addBlog = (v: any) => ({ unwrap: () => Promise.resolve() });
  const updateBlog = (v: any) => ({ unwrap: () => Promise.resolve() });
  const deleteBlog = (v: any) => ({ unwrap: () => Promise.resolve() });
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };
  // Formik setup
  const formik = useFormik<BlogFormData>({
    initialValues: {
      title: "",
      description: "",
      content: "",
      category: "",
      tags: "",
      status: "DRAFT",
      slug: "",
      readTime: 0,
      coverImage: null,
    },
    validationSchema: blogSchema,
    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();

        // Append all fields to FormData
        Object.keys(values).forEach((key) => {
          if (key === "tags") {
            const tagsArray = values.tags
              .split(",")
              .map((tag: any) => tag.trim())
              .filter((tag: any) => tag);
            formData.append("tags", JSON.stringify(tagsArray));
          } else if (key === "coverImage" && values.coverImage) {
            formData.append("coverImage", values.coverImage);
          } else {
            formData.append(key, (values as any)[key]);
          }
        });
        if (editingBlog) {
          await updateBlog({ id: editingBlog.id, formData }).unwrap();
        } else {
          await addBlog(formData).unwrap();
        }
        // const blogData = {
        //   ...values,
        //   tags: values?.tags
        //     .split(",")
        //     .map((tag: any) => tag.trim())
        //     .filter((tag: any) => tag),
        //   slug: values.slug,
        //   readTime: Number(values.readTime),
        // };

        // if (editingBlog) {
        //   await updateBlog({ id: editingBlog.slug, values: blogData }).unwrap();
        // } else {
        //   await addBlog(blogData).unwrap();
        // }

        setIsDialogOpen(false);
        formik.resetForm();
      } catch (error) {
        console.error("Error saving blog:", error);
      }
    },
  });

  // Operations
  const handleCreate = () => {
    setEditingBlog(null);
    formik.resetForm();
    setIsDialogOpen(true);
  };

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    formik.setValues({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      category: blog.category,
      tags: blog.tags?.join(", ") || "",
      status: blog.status,
      slug: blog.slug || "",
      readTime: blog.readTime || 0,
      coverImage: null,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (slug: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(slug).unwrap();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    formik.resetForm();
    setEditingBlog(null);
  };
  console.log(blogsData, ":>jhuyhb")
  return {
    // State
    isDialogOpen,
    editingBlog,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,

    // Data
    blogs: blogsData?.data.blogs || [],
    categories: categoriesData?.data || [],
    stats: {
      total: blogsData?.data.totalCount || 0,
      published: blogsData?.publishedCount || 0,
      draft: blogsData?.draftCount || 0,
    },

    pagination: {
      currentPage,
      totalPages: Math.ceil((blogsData?.data.totalCount || 0) / pageSize),
      totalItems: blogsData?.data.totalCount || 0,
      pageSize,
    },
    handlePageSizeChange,
    // Loading states
    isLoading,
    isAdding,
    isUpdating,
    error,

    // Form
    formik,

    // Operations
    handleCreate,
    handleEdit,
    handleDelete,
    handleDialogClose,
  };
};
