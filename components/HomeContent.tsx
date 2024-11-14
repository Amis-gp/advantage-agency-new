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
            <section className="px-6 relative" id="hero">
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
                            {t.hero.challenge}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                            {t.hero.challengeDescription}
                        </p>
                    </div>

                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-[740px] mx-auto">
                        <div className="aspect-video flex items-center justify-center relative">
                            <video key={currentLanguage} className="w-full h-full object-cover" controls={isPlaying} poster="/img/home/preview.webp" onPlay={() => setIsPlaying(true)}>
                                <source src={`/img/home/video-${currentLanguage}.mp4`} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={handlePlayClick}>
                                    <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50"></div>
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white z-10 transition-transform duration-300 group-hover:scale-110">
                                        <svg className="ml-1 transition-transform duration-300" width="19" height="20" viewBox="0 0 86 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M80.1258 40.5562L13.9878 2.50912C7.98783 -0.942487 0.5 3.38842 0.5 10.3104V87.4713C0.5 94.4415 8.08185 98.7661 14.0814 95.218L80.2193 56.1042C86.1521 52.5955 86.1003 43.9932 80.1258 40.5562Z" fill="#000"/>
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8 justify-center relative">
                        <div className="flex -space-x-2">
                            <Image src="/img/home/ava-1.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/ava-2.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/ava-3.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                            <Image src="/img/home/ava-4.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full border border-black" />
                        </div>
                        <div className="">
                            <div className="flex items-center">
                                {[1, 2, 3, 4].map((star) => (
                                    <Image key={star} src="/img/home/star-yellow.svg" alt="Star" width={12} height={12} className='mr-1' loading="lazy" priority={false} />
                                ))}
                                <Image src="/img/home/star-yellow-gray.svg" alt="Star" width={12} height={12} loading="lazy" priority={false} />
                                <span className="ml-2">4.6</span>
                            </div>
                            <span className="mt-3">{t.hero.reviews}</span>
                        </div>
                        <motion.div className="absolute top-28 left-1 sm:top-10 sm:left-40" style={{ rotate: rotate2 }}>
                            <Image src="/img/home/star.svg" alt="Star" width={24} height={24} loading="lazy" priority={false} />
                        </motion.div>
                    </div>
                    <div className="w-fit mx-auto mt-4">
                        <Link href="#form" className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 overflow-hidden">
                            <span className="relative z-10">{t.getStarted}</span>
                            <span className="relative z-10 animate-bounce-x">→</span>
                            <div className="absolute inset-0 animate-shine bg-gradient-to-r from-gray/0 via-gray/70 to-gray/0"></div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className=" pt-14">
                <div className="max-w-6xl mx-auto px-6">
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
                                                <div className="w-3 h-3 md:w-6 md:h-6 bg-red rotate-45" />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-6 pt-10 md:pt-20">
                <div className="md: max-w-[440px]">
                    <p className="text-red md:text-lg font-medium tracking-wide">
                        {t.howWeCanHelp.title}
                    </p>
                    
                    <h1 className="mt-1 text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t.howWeCanHelp.title1_1}
                        <br />
                        {t.howWeCanHelp.title1_2}
                    </h1>
                    
                    <p className="mt-7 text-[#d3d3d3] md:text-lg leading-relaxed">
                        {t.howWeCanHelp.description}
                    </p>
                    
                    <div className="pt-10 w-fit">
                        <Link href="#form" className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 overflow-hidden">
                            <span className="relative z-10">{t.getStarted}</span>
                            <span className="relative z-10 animate-bounce-x">→</span>
                            <div className="absolute inset-0 animate-shine bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
                        </Link>
                    </div>
                </div>

                <div className="relative md:w-1/2 md:ml-5 mt-12 md:mt-0">
                    <svg className='hidden md:block absolute top-3 left-8' width="125" height="636" viewBox="0 0 125 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1348 1C12.1351 44 22.1348 74 66.6351 105.5C124.38 146.375 28.5993 173.945 11.1349 206C-28.3653 278.5 56.5784 264.296 111.635 313C163.635 359 21.8264 394.682 9.63499 421C-21.8652 489 93.9024 480.853 112.635 531.5C139.635 604.5 51.635 642 9.63499 633.5" stroke="#D12923" stroke-width="2"/>
                    </svg>
                    <svg className='md:hidden absolute top-3 left-8' width="114" height="700" viewBox="0 0 114 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8143 1C14.7514 55.4212 37.5193 76.1333 64.5 116C99.5109 167.732 16.0887 187.431 5.5 228C-18.4492 319.757 68.6194 265.36 102 327C133.528 385.218 12.892 418.192 5.50027 451.5C-13.5985 537.561 99.6426 506.401 111 570.5C127.37 662.89 38.7004 707.258 13.2356 696.5" stroke="#D12923" stroke-width="2"/>
                    </svg>

                    <div className="space-y-10">
                        {Array.from({length: 7}, (_, i) => ({
                            icon: `/img/home/instruction-icon-${i+1}.svg`,
                            title: t.howWeCanHelp.steps[`step${i+1}` as keyof typeof t.howWeCanHelp.steps]
                        })).map((step, index) => (
                            <div key={index} className={`flex items-center gap-8 opacity-0 animate-fadeIn ${index % 2 === 1 && index !== 1 ? 'ml-24' : ''} ${index==1 ? 'ml-16' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                                <div>
                                    <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center z-10 relative">
                                        <Image src={step.icon} alt={step.title} width={32} height={32} loading="lazy" />
                                    </div>    
                                </div>
                                <h3 className="text-white text-lg md:text-2xl font-semibold">
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            
            </section>
        </div>
    );
} 