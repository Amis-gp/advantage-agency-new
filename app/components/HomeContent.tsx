'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/locales/translations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeContent(): JSX.Element {

    const { scrollY } = useScroll();
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 360]);
    const rotate2 = useTransform(scrollY, [0, 1000], [0, -360]);

    const content = "EFFICIENCY GROWTH QUALITY SOLUTIONS INNOVATION CONNECT LEAD";

    const { language } = useLanguage();
    const currentLanguage = (language || 'en') as keyof typeof translations;
    const t = translations[currentLanguage];
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
        const video = document.querySelector('video');
        if (video) {
            video.play();
        }
    };

    return (
        <div className='bg-black text-white overflow-hidden       pb-20'>
            <section className="px-6 relative">
                <div className="absolute top-28 -left-40 xl:left-10 w-64 h-64">
                    <motion.div className="hidden xl:block absolute" style={{ rotate: rotate1 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                    </motion.div>
                    <Image src="/img/home/gradient-ball-1.svg" className="animate-float" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                </div>

                <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                    <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                </div>

                
                <motion.div className="absolute top-20 right-4 xl:right-16 rotate-45 w-4 h-4 sm:w-8 sm:h-8 xl:w-auto xl:h-auto" style={{ rotate: rotate2 }}>
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                </motion.div>
            
                <div className="absolute -bottom-10 -right-56 sm:right-10 opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </div>

                <div className="max-w-6xl mx-auto pt-28 relative">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            {t.hero.challenge}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                            {t.hero.challengeDescription}
                        </p>
                    </div>

                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-[740px] mx-auto">
                        <div className="aspect-video flex items-center justify-center relative">
                            <video 
                                key={currentLanguage} 
                                className="w-full h-full object-cover" 
                                controls={isPlaying}
                                poster="/img/home/preview.webp"
                                onPlay={() => setIsPlaying(true)}
                            >
                                <source src={`/img/home/video-${currentLanguage}.mp4`} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            
                            {!isPlaying && (
                                <div 
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                                            <svg 
                                                className="w-8 h-8 mr-1 text-black translate-x-0.5" 
                                                fill="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8 justify-center relative">
                        <div className="flex -space-x-2">
                            <Image src="/img/home/avatar.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/avatar.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/avatar.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/avatar.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                        </div>
                        <div className="">
                            <div className="flex items-center">
                                {[1, 2, 3, 4].map((star) => (
                                    <Image key={star} src="/img/home/star-yellow.svg" alt="Star" width={12} height={12} className='mr-1' loading="lazy" priority={false} />
                                ))}
                                <Image src="/img/home/star-yellow-gray.svg" alt="Star" width={12} height={12} loading="lazy" priority={false} />
                                <span className="ml-2">4.6</span>
                            </div>
                            <span className="mt-3">From 100+ Reviews</span>
                        </div>
                        <motion.div className="absolute top-28 left-1 sm:top-10 sm:left-40" style={{ rotate: rotate2 }}>
                            <Image src="/img/home/star.svg" alt="Star" width={24} height={24} loading="lazy" priority={false} />
                        </motion.div>
                    </div>
                    <Link href="#form" className="w-fit mx-auto mt-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Get Started
                        <Image src="/img/home/arrow-1.svg" alt="Arrow" width={24} height={20} loading="lazy" priority={false} />
                    </Link>
                    
                </div>
            </section>

            <section className=" pt-14">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                            <h3 className="text-6xl font-bold mb-4">200%</h3>
                            <p className="text-gray-400">{t.stats.growth}</p>
                        </div>
                        
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                            <h3 className="text-6xl font-bold mb-4">$5M</h3>
                            <p className="text-gray-400">{t.stats.revenue}</p>
                        </div>
                        
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                            <h3 className="text-6xl font-bold mb-4">1,000+</h3>
                            <p className="text-gray-400">{t.stats.campaigns}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full overflow-hidden whitespace-nowrap">

                <div className="relative max-w-[1400px] mx-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                    <div className="overflow-hidden">
                        <div className="inline-flex animate-marquee mt-10 md:mt-16">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center">
                                    {content.split(' ').map((word, wordIndex) => (
                                        <div key={wordIndex} className="flex items-center">
                                            <span className="text-white text-2xl md:text-4xl font-bold px-4 md:px-8">{word}</span>
                                            <div className="w-3 h-3 md:w-6 md:h-6 bg-red-600 rotate-45" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
} 