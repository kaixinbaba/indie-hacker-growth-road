import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import en from '../locales/en';
import zh from '../locales/zh';

type Translations = {
  en: typeof en;
  zh: typeof zh;
};

const translations: Translations = {
  en,
  zh,
};

type Language = keyof typeof translations;

interface I18nContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof en;
}

const I18nContext = createContext<I18nContextType | null>(null);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const contextValue = useMemo(() => ({
    currentLanguage,
    setLanguage,
    translations: translations[currentLanguage],
  }), [currentLanguage]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useLanguage must be used within I18nProvider');
  return context;
}

export function useTranslations() {
  const { translations } = useLanguage();
  return translations;
}