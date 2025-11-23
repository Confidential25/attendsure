import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";

// Define theme type
type Theme = "light" | "dark";

// Define context type
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// ThemeProvider wraps your app and provides theme state
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log("Error loading theme:", error);
      }
    };
    loadTheme();
  }, []);

  // Toggle theme and save to AsyncStorage
  const toggleTheme = async () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.log("Error saving theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
