'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import { translations } from '@/locales/translations';

type Language = 'EN' | 'UA' | 'PL';

export default function Header(): JSX.Element {
    const { language, setLanguage } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleLanguage = (newLanguage: Language): void => {
        setLanguage(newLanguage.toLowerCase() as 'en' | 'ua' | 'pl');
        setIsDropdownOpen(false);
    };

    const currentLanguage = (language || 'en') as keyof typeof translations;
    const t = translations[currentLanguage];

    return (
        <header className="text-white pt-6 px-6 absolute top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-left">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="./img/home/logo.svg" alt="Advantage Agency" width={243} height={55} loading="lazy" priority={false} className="h-7 sm:h-auto w-fit"/>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                            type="button" 
                            aria-label="Change language" 
                            className={`flex items-center gap-2 px-3 py-2 sm:px-7 sm:py-4 border border-white bg-black backdrop-blur-sm
                                ${isDropdownOpen ? 'rounded-t-[20px] sm:rounded-t-[24px] rounded-b-none' : 'rounded-[20px] sm:rounded-[24px]'}`}
                        >
                            {language.toUpperCase()} <span className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute top-[calc(100%-1px)] left-0 right-0 bg-black border border-white rounded-b-[20px] sm:rounded-b-[24px] overflow-hidden border-t-0">
                                {language.toUpperCase() !== 'EN' && (
                                    <button 
                                        onClick={() => toggleLanguage('EN')} 
                                        className="w-full px-3 py-2 sm:px-7 sm:py-4 text-left hover:bg-gray-800 transition-colors"
                                    >
                                        EN
                                    </button>
                                )}
                                {language.toUpperCase() !== 'UA' && (
                                    <button 
                                        onClick={() => toggleLanguage('UA')} 
                                        className="w-full px-3 py-2 sm:px-7 sm:py-4 text-left hover:bg-gray-800 transition-colors"
                                    >
                                        UA
                                    </button>
                                )}
                                {language.toUpperCase() !== 'PL' && (
                                    <button 
                                        onClick={() => toggleLanguage('PL')} 
                                        className="w-full px-3 py-2 sm:px-7 sm:py-4 text-left hover:bg-gray-800 transition-colors"
                                    >
                                        PL
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    <Link href="/pricing" className="bg-white text-black px-4 py-2 border border-white sm:px-12 sm:py-4 rounded-[20px] sm:rounded-[24px] font-medium hover:bg-gray-200 transition-colors">
                        {t.pricing}
                    </Link>
                </div>
            </div>
        </header>
    );
} 