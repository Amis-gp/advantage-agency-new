'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Спочатку перевіряємо localStorage
        const savedLanguage = localStorage.getItem('language');
        
        if (savedLanguage) {
            setLanguage(savedLanguage);
            return;
        }

        // Якщо в localStorage нічого немає, використовуємо мову браузера
        const browserLang = navigator.language.split('-')[0];
        const supportedLanguages = ['en', 'ua', 'pl'];
        const defaultLanguage = supportedLanguages.includes(browserLang) ? browserLang : 'en';
        
        setLanguage(defaultLanguage);
        localStorage.setItem('language', defaultLanguage);
    }, []);

    const handleSetLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);