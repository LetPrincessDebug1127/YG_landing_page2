"use client"
import React, { createContext, useContext, useState } from "react";

interface LanguageContextType {
  language: "en" | "vi";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "vi" ? "en" : "vi"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook để sử dụng LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage phải được sử dụng bên trong LanguageProvider");
  }
  return context;
};
