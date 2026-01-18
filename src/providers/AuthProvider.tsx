

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLogout } from '@/store/slices/authSlice';
import LocalStorage from '@/utils/LocalStorage';
import { StoreModel } from '@/store/store';

interface AuthContextType {
  user: any | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true, // Start with true to prevent flickering
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { user: reduxUser, token } = useSelector((state: StoreModel) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick synchronous check - no API calls
    const storedToken = LocalStorage.getFromLocalStorage("accessToken");
    const storedUser = LocalStorage.getFromLocalStorage("user");

    if (storedToken && storedUser) {
      // Only set if not already set (prevents unnecessary re-renders)
      if (!token || !reduxUser) {
        dispatch(setUser({
          accessToken: storedToken,
          user: storedUser
        }));
      }
    } else if ((token || reduxUser) && !storedToken) {
      // Logout if Redux has auth but localStorage doesn't (inconsistent state)
      dispatch(setLogout());
    }

    // Very important: Mark loading as false after sync check
    setIsLoading(false);
  }, []); // Empty deps - run only once on mount

  const value = {
    user: reduxUser,
    isLoading,
    isAuthenticated: !!token && !!reduxUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}