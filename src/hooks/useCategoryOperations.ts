import { useFormik } from "formik";
import { categorySchema, CategoryFormData } from "@/schemas/categorySchema";
// import {
//   useGetAllCategoryQuery,
//   useAddCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
// } from "@/store/services/categoryService";
import { useState } from "react";

interface UseCategoryOperationsProps {
  page?: number;
  limit?: number;
}

export const useCategoryOperations = ({
  page = 1,
  limit = 10,
}: UseCategoryOperationsProps = {}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<any>(null);

  // API Queries (Commented out for now)
  // const {
  //   data: categoriesData,
  //   isLoading,
  //   error,
  // } = useGetAllCategoryQuery({
  //   // page,
  //   // limit,
  //   search: searchTerm,
  // });

  // const [addCategory, { isLoading: isAdding }] = useAddCategoryMutation();
  // const [updateCategory, { isLoading: isUpdating }] =
  //   useUpdateCategoryMutation();
  // const [deleteCategory, { isLoading: isDeleting }] =
  //   useDeleteCategoryMutation();

  const categoriesData: any = null;
  const isLoading = false;
  const error = null;
  const isAdding = false;
  const isUpdating = false;
  const isDeleting = false;

  const addCategory = (v: any) => ({ unwrap: () => Promise.resolve() });
  const updateCategory = (v: any) => ({ unwrap: () => Promise.resolve() });
  const deleteCategory = (v: any) => ({ unwrap: () => Promise.resolve() });

  // Formik setup
  const formik = useFormik<CategoryFormData>({
    initialValues: {
      title: "",
    },
    validationSchema: categorySchema,
    onSubmit: async (values) => {
      try {
        if (editingCategory) {
          await updateCategory({ id: editingCategory.id, values }).unwrap();
        } else {
          await addCategory(values).unwrap();
        }

        setIsDialogOpen(false);
        formik.resetForm();
      } catch (error) {
        console.error("Error saving category:", error);
      }
    },
  });

  // Operations
  const handleCreate = () => {
    setEditingCategory(null);
    formik.resetForm();
    setIsDialogOpen(true);
  };

  const handleEdit = (category: any) => {
    setEditingCategory(category);
    formik.setValues({
      title: category.title,
    });
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (category: any) => {
    setCategoryToDelete(category);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (categoryToDelete) {
      try {
        await deleteCategory(categoryToDelete.id).unwrap();
        setDeleteConfirmOpen(false);
        setCategoryToDelete(null);
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
    setCategoryToDelete(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    formik.resetForm();
    setEditingCategory(null);
  };

  return {
    // State
    isDialogOpen,
    deleteConfirmOpen,
    editingCategory,
    categoryToDelete,
    searchTerm,
    setSearchTerm,

    // Data
    categories: categoriesData?.data || [],
    stats: {
      total: categoriesData?.total || 0,
    },

    // Loading states
    isLoading,
    isAdding,
    isUpdating,
    isDeleting,
    error,

    // Form
    formik,

    // Operations
    handleCreate,
    handleEdit,
    handleDeleteClick,
    handleDeleteConfirm,
    handleDeleteCancel,
    handleDialogClose,
  };
};
