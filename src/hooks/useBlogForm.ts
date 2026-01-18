import { useFormik } from "formik";
import { blogSchema, BlogFormData } from "@/schemas/blogSchema";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import {
//   useAddBlogMutation,
//   useUpdateBlogMutation,
//   useGetBlogBySlugQuery,
// } from "@/store/services/blogService";
// import { useGetAllCategoryQuery } from "@/store/services/categoryService";
import Constants from "@/config/constants";

const uploadFileToServer = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("coverImage", file);

  try {
    // Get user token from localStorage or your auth context
    const userToken = localStorage.getItem("token") || "";

    const response = await fetch(`${Constants.HOST}${Constants.API_VERSION}imageUpload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload file");
  }
};

export const useBlogForm = (slug?: string) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API Queries (Commented out for now)
  // const { data: blogData } = useGetBlogBySlugQuery(slug || "", {
  //   skip: !slug,
  // });

  // const { data: categoriesData } = useGetAllCategoryQuery({});
  // const [addBlog] = useAddBlogMutation();
  // const [updateBlog] = useUpdateBlogMutation();

  const blogData: any = null;
  const categoriesData: any = null;
  const addBlog = (v: any) => ({ unwrap: () => Promise.resolve() });
  const updateBlog = (v: any) => ({ unwrap: () => Promise.resolve() });
  const [uploadingImage, setUploadingImage] = useState(false);
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
      coverImage: "",
    },
    validationSchema: blogSchema,
    onSubmit: async (values: any) => {
      setIsSubmitting(true);
      try {
        let coverImageUrl = values.coverImage;

        // Upload new cover image if provided
        if (values.coverImageFile) {
          setUploadingImage(true);
          coverImageUrl = await uploadFileToServer(values.coverImageFile);
          setUploadingImage(false);
        }

        // Prepare blog data with the uploaded image URL
        const blogData = {
          title: values.title,
          description: values.description,
          content: values.content,
          category: values.category,
          tags: values.tags
            .split(",")
            .map((tag: any) => tag.trim())
            .filter((tag: any) => tag),
          status: values.status,
          slug: values.slug,
          readTime: Number(values.readTime),
          coverImage: coverImageUrl,
        };

        if (slug) {
          await updateBlog({ id: slug, values: blogData }).unwrap();
        } else {
          await addBlog(blogData).unwrap();
        }

        router.push("/admin/blog");
        router.refresh();
      } catch (error) {
        console.error("Error saving blog:", error);
      } finally {
        setIsSubmitting(false);
        setUploadingImage(false);
      }
    },
  });

  // initial values when editing
  useEffect(() => {
    if (blogData?.data && slug) {
      formik.setValues({
        title: blogData.data.title,
        description: blogData.data.description,
        content: blogData.data.content,
        category: blogData.data.category,
        tags: blogData.data.tags?.join(", ") || "",
        status: blogData.data.status,
        slug: blogData.data.slug || "",
        readTime: blogData.data.readTime || 0,
        coverImage: blogData.data.coverImage || "",
      });
    }
  }, [blogData, slug]);

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return {
    formik,
    categories: categoriesData?.data || [],
    isSubmitting,
    editingBlog: blogData?.data,
    uploadingImage,
    handleSubmit,
  };
};
