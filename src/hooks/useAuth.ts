// "use client";

// import { useAuth as useAuthContext } from "@/providers/AuthProvider";

// export const useAuth = () => {
//   const { user, isLoading, isAuthenticated } = useAuthContext();

//   return {
//     user,
//     isLoading,
//     isAuthenticated,
//     isAdmin: user?.role === "ADMIN",
//     isUser: user?.role === "USER",
//     hasRole: (role: string) => user?.role === role,
//     hasAnyRole: (roles: string[]) => roles.includes(user?.role),
//   };
// };

"use client";

import { useAuth as useAuthContext } from "@/providers/AuthProvider";

export const useAuth = () => {
  // const { user, isLoading, isAuthenticated } = useAuthContext();

  // Return consistent values even during loading to prevent UI flickering
  // if (isLoading) {
  //   return {
  //     user: null,
  //     isLoading: true,
  //     isAuthenticated: false,
  //     isAdmin: false,
  //     isUser: false,
  //     hasRole: () => false,
  //     hasAnyRole: () => false,
  //   };
  // }

  return {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    isAdmin: false,
    isUser: false,
    hasRole: (role: string) => false,
    hasAnyRole: (roles: string[]) => false,
  };
};
