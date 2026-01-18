// "use client";

// const getFromLocalStorage = (key:any) => {
//   try {
//     const value = localStorage.getItem(key);
//     return value ? JSON.parse(value) : null;
//   } catch (error) {
//     console.error("Error getting value from local storage:", error);
//     return null;
//   }
// };

// const setInLocalStorage = (key:any, value:any) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error("Error setting value in local storage:", error);
//   }
// };

// const removeFromLocalStorage = (key:any) => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error("Error removing value from local storage:", error);
//   }
// };

// const clearLocalStorage = () => {
//   try {
//     localStorage.clear();
//   } catch (error) {
//     console.error("Error removing value from local storage:", error);
//   }
// };

// export default {
//   getFromLocalStorage,
//   setInLocalStorage,
//   removeFromLocalStorage,
//   clearLocalStorage,
// };


interface LocalStorageUtils {
  getFromLocalStorage: <T>(key: string) => T | null;
  setInLocalStorage: <T>(key: string, value: T) => void;
  removeFromLocalStorage: (key: string) => void;
  clearLocalStorage: () => void;
}

const localStorageUtils: LocalStorageUtils = {
  getFromLocalStorage: <T>(key: string): T | null => {
    try {
      if (typeof window === "undefined") {
        console.warn("localStorage is not available in this environment");
        return null;
      }

      const value = localStorage.getItem(key);
      if (value === null || value === "undefined") return null;

      return JSON.parse(value) as T;
    } catch (error) {
      console.error(
        `Error getting value for key "${key}" from local storage:`,
        error
      );
      return null;
    }
  },

  setInLocalStorage: <T>(key: string, value: T): void => {
    try {
      if (typeof window === "undefined") {
        console.warn("localStorage is not available in this environment");
        return;
      }

      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(
        `Error setting value for key "${key}" in local storage:`,
        error
      );
    }
  },

  removeFromLocalStorage: (key: string): void => {
    try {
      if (typeof window === "undefined") {
        console.warn("localStorage is not available in this environment");
        return;
      }

      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing key "${key}" from local storage:`, error);
    }
  },

  clearLocalStorage: (): void => {
    try {
      if (typeof window === "undefined") {
        console.warn("localStorage is not available in this environment");
        return;
      }

      localStorage.clear();
    } catch (error) {
      console.error("Error clearing local storage:", error);
    }
  },
};

export default localStorageUtils;