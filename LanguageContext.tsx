import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, experienceTranslations, projectTranslations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['de'];
  experience: typeof experienceTranslations['de'];
  projects: typeof projectTranslations['de'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if there's a saved language preference, default to German
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    experience: experienceTranslations[language],
    projects: projectTranslations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
