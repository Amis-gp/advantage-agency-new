'use client';
import { useScroll, motion, useTransform, transform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/locales/translations';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type SoundConfig = {
    audio: HTMLAudioElement | null;
    volume: number;
};

export default function HomeContent(): JSX.Element {

    const { scrollY } = useScroll();
    const rotate1 = useTransform(scrollY, [0, 10000], [0, 360]);
    const rotate2 = useTransform(scrollY, [0, 10000], [0, -360]);

    const content = "EFFICIENCY GROWTH QUALITY SOLUTIONS INNOVATION CONNECT LEAD";

    const { language } = useLanguage();
    const currentLanguage = (language || 'en') as keyof typeof translations;
    const t = translations[currentLanguage];
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        playSound('click');
        setIsPlaying(true);
    };

    const [sounds] = useState<Record<string, SoundConfig>>({
        hover_1: {
            audio: typeof Audio !== 'undefined' ? new Audio('/sound/hover-1.wav') : null,
            volume: 0.7
        },
        hover_2: {
            audio: typeof Audio !== 'undefined' ? new Audio('/sound/hover-2.wav') : null,
            volume: 0.3
        },
        flipCard: {
            audio: typeof Audio !== 'undefined' ? new Audio('/sound/flip-card.mp3') : null,
            volume: 0.5
        },
        swoosh: {
            audio: typeof Audio !== 'undefined' ? new Audio('/sound/swoosh.mp3') : null,
            volume: 0.2
        },
        click: {
            audio: typeof Audio !== 'undefined' ? new Audio('/sound/click.wav') : null,
            volume: 1
        },
    });
    
    const playSound = (soundName: keyof typeof sounds) => {
        const soundConfig = sounds[soundName];
        if (soundConfig.audio) {
            soundConfig.audio.currentTime = 0;
            soundConfig.audio.volume = soundConfig.volume;
            soundConfig.audio.play();
        }
    };
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

//line
    useEffect(() => {
        const updatePath = () => {
            const elements = itemRefs.current.filter(el => el !== null);
            if (elements.length < 2) return;

            let path = '';
            elements.forEach((el, index) => {
                if (!el) return;
                
                const rect = el.getBoundingClientRect();
                const containerRect = el.closest('.flex-col')?.getBoundingClientRect() || { left: 0, top: 0 };
                
                const x = rect.left - containerRect.left + 32;
                const y = rect.top - containerRect.top + 32;

                if (index === 0) {
                    path += `M ${x} ${y}`;
                } else {
                    const prevRect = elements[index - 1]?.getBoundingClientRect();
                    if (!prevRect) return;
                    
                    const prevX = prevRect.left - containerRect.left + 32;
                    const prevY = prevRect.top - containerRect.top + 32;
                    
                    const midY = (prevY + y) / 2;
                    const controlPoint1X = prevX;
                    const controlPoint1Y = midY;
                    const controlPoint2X = x;
                    const controlPoint2Y = midY;
                    
                    path += ` C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x} ${y}`;
                }
            });

            const svgPath = document.querySelector('.path-line');
            if (svgPath) {
                svgPath.setAttribute('d', path);
            }
        };
        updatePath();
        window.addEventListener('resize', updatePath);
        
        const timeoutId = setTimeout(updatePath, 100);
        
        return () => {
            window.removeEventListener('resize', updatePath);
            clearTimeout(timeoutId);
        };
    }, []);

//portfolio
    const portfolioSlides = [
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/car-detaling.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/constructions.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
        {
            title: 'INTERIOR DESIGNER',
            date: '01.05.2024 - 31.05.2024',
            image: '/img/portfolio/accountant-services.webp',
            companyBudget: '784',
            averageLeadPrice: '120',
            numberOfLeads: '100',
            numberOfSales: '10',
            costPerSale: '12',
            slug: '/v1',
        },
    ];
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});


    return (
        <div className='bg-black text-white overflow-hidden       pb-[1000px]'>
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

                
                <motion.div className="absolute top-20 right-4 xl:right-16  w-4 h-4 sm:w-8 sm:h-8 xl:w-auto xl:h-auto" style={{ rotate: rotate2 }}>
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                </motion.div>
            
                <div className="absolute -bottom-10 -right-56 sm:right-10 opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </div>

                <div className="max-w-6xl mx-auto pt-28 relative">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                            {t.hero.description}
                        </p>
                    </div>

                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-[740px] mx-auto">
                        <div className="aspect-video flex items-center justify-center relative">
                            <video key={currentLanguage} className="w-full h-full object-cover" controls={isPlaying} poster="/img/home/preview.webp" onPlay={() => setIsPlaying(true)}>
                                <source src={`/img/home/video-${currentLanguage}.mp4`} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            
                            {!isPlaying && (
                                <div onMouseEnter={() => playSound('hover_1')} className=" absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={handlePlayClick}>
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
                        <div className="flex -space-x-4">
                            <Image src="/img/home/ava-1.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full" />
                            <Image src="/img/home/ava-2.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full" />
                            <Image src="/img/home/ava-3.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full" />
                            <Image src="/img/home/ava-4.jpg" alt="Avatar" width={40} height={40} loading="lazy" priority={false} className="rounded-full" />
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
                    <div className="w-fit mx-auto mt-4 hover:scale-105 transition-all duration-100">
                        <Link href="#form" className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 overflow-hidden" 
                        onMouseEnter={() => playSound('hover_1')}>
                            <span className="relative z-10">{t.hero.button}</span>
                            <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                            <div className="absolute inset-0 animate-shine bg-gradient-to-r from-gray/10 via-gray/70 to-gray/0"></div>
                        </Link>
                    </div>
                    
                </div>
            </section>

            <section className=" pt-14">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}>
                            <h3 className="text-6xl font-bold mb-4">200%</h3>
                            <p className="text-gray-400">{t.stats.specialists}</p>
                        </div>
                        
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}>
                            <h3 className="text-6xl font-bold mb-4">$5M</h3>
                            <p className="text-gray-400">{t.stats.budget}</p>
                        </div>
                        
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}>
                            <h3 className="text-6xl font-bold mb-4">1,000+</h3>
                            <p className="text-gray-400">{t.stats.cases}</p>
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
            
            <section className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto px-6 pt-10 md:pt-20 relative">
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <div className="md:max-w-[440px]">
                        <p className="text-red md:text-lg font-medium tracking-wide">
                            {t.introduction.headline}
                        </p>
                        
                        <h1 className="mt-1 text-3xl md:text-5xl font-bold text-white leading-tight">
                            {t.introduction.title}
                        </h1>
                        
                        <p className="mt-7 text-[#d3d3d3] md:text-lg leading-relaxed">
                            {t.introduction.description}
                        </p>
                        
                        <div className="pt-10 w-fit hover:scale-105 transition-all duration-100">
                            <Link href="#form" className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 overflow-hidden"
                            onMouseEnter={() => playSound('hover_1')}>
                                <span className="relative z-10">{t.introduction.button}</span>
                                <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                                <div className="absolute inset-0 animate-shine bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:block relative h-[300px] w-full">
                        {[
                            { text: "Agency", left: "5%", top: "10%" },
                            { text: "Achievements", left: "17%", top: "35%", rotate: 10 },
                            { text: "Best", left: "2%", top: "50%", rotate: -26 },
                            { text: "Prospective", left: "35%", top: "58%", rotate: -9 },
                            { text: "Success", left: "65%", top: "40%", rotate: -10 },
                            { text: "Quality", left: "80%", top: "65%", },
                            { text: "Perfomans", left: "20%", bottom: "0%"},
                            { text: "Content", left: "55%", bottom: "3%", rotate: 10 },
                            // Іконки
                            { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                            { icon: "/img/home/whatsapp.svg", left: "55%", top: "27%", rotate: -30, isIcon: true },
                            { icon: "/img/home/telegram.svg", left: "62%", top: "15%", rotate: -30, isIcon: true, istg: true },
                            { icon: "/img/home/instagram.svg", left: "90%", top: "15%", rotate: 10, isIcon: true }
                        ].map((item, index) => (
                            <div key={index}
                                className={`absolute bg-red hover:bg-red/80 transition-all duration-100 rounded-full  text-black  ${item.isIcon ? 'flex items-center justify-center w-10 h-10' : 'rounded-[30px] px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                                onMouseEnter={() => playSound('hover_2')}
                                style={{
                                    left: item.left,
                                    top: item.top,
                                    bottom: item.bottom,
                                    fontSize: '20px',
                                    fontWeight: '500',
                                    lineHeight: '1',
                                    transform: `rotate(${item.rotate}deg)`
                                }}
                            >
                                {item.isIcon ? (
                                    <Image src={item.icon} alt="Icon" width={20} height={20} loading="lazy" /> ) : ( item.text
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative lg:w-1/2 md:ml-5 mt-12 md:mt-0">
                    <div className="flex flex-col justify-between space-y-10 relative">
                        <svg 
                            className="absolute inset-0 w-full h-full pointer-events-none" 
                            style={{ 
                                stroke: '#D12923',
                                strokeWidth: 2,
                                fill: 'none',
                                zIndex: 1
                            }}
                        >
                            <path className="path-line" d="" />
                        </svg>

                        {[
                            {
                                icon: '/img/home/instruction-icon-1.svg',
                                title: t.introduction.steps.step1
                            },
                            {
                                icon: '/img/home/instruction-icon-2.svg',
                                title: t.introduction.steps.step2
                            },
                            {
                                icon: '/img/home/instruction-icon-3.svg',
                                title: t.introduction.steps.step3
                            },
                            {
                                icon: '/img/home/instruction-icon-4.svg',
                                title: t.introduction.steps.step4
                            },
                            {
                                icon: '/img/home/instruction-icon-5.svg',
                                title: t.introduction.steps.step5
                            },
                            {
                                icon: '/img/home/instruction-icon-6.svg',
                                title: t.introduction.steps.step6
                            },
                            {
                                icon: '/img/home/instruction-icon-7.svg',
                                title: t.introduction.steps.step7
                            }
                        ].map((step, index) => (
                            <div 
                                key={index} 
                                className={`z-10 flex items-center gap-8 opacity-0 animate-fadeIn ${index % 2 === 1 && index !== 1 ? 'ml-24' : ''} ${index==1 ? 'ml-16' : ''}`} 
                                style={{ animationDelay: `${index * 0.2}s` }}
                                ref={(el) => itemRefs.current[index] = el}
                            >
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
                    <div className="lg:hidden absolute -top-10 -left-80 opacity-80 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                    </div>
                    <div className="absolute bottom-5 -right-80 opacity-80 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                    </div>
                    <div className="hidden lg:block absolute -bottom-10 -right-[650px] w-[726px] h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>
                </div>

                <div className="sm:hidden relative h-[300px] w-full">
                    {[
                        { text: "Agency", left: "2%", top: "30%", rotate: -12 },
                        { text: "Best", left: "2%", top: "50%", rotate: -26 },
                        { text: "Prospective", right: "8%", top: "57%", rotate: -15 },
                        { text: "Success", left: "65%", top: "35%", rotate: -10 },
                        { text: "Quality", left: "17%", top: "65%", },
                        { text: "Perfomans", left: "20%", bottom: "0%"},
                        { text: "Content", right: "0%", bottom: "3%", rotate: 10 },
                        // icons
                        { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                        { icon: "/img/home/whatsapp.svg", left: "32%", top: "48%", rotate: -30, isIcon: true },
                        { icon: "/img/home/telegram.svg", left: "47%", top: "42%", rotate: -30, isIcon: true, istg: true },
                        { icon: "/img/home/instagram.svg", right: "0%", bottom: "20%", rotate: 10, isIcon: true }
                    ].map((item, index) => (
                        <div key={index}
                            className={`absolute bg-red hover:bg-red/80 transition-all duration-100 rounded-full  text-black  ${item.isIcon ? 'flex items-center justify-center w-10 h-10' : 'rounded-[30px] px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                            onMouseEnter={() => playSound('hover_2')}
                            style={{
                                left: item.left,
                                right: item.right,
                                top: item.top,
                                bottom: item.bottom,
                                fontSize: '18px',
                                fontWeight: '500',
                                lineHeight: '1',
                                transform: `rotate(${item.rotate}deg)`
                            }}
                        >
                            {item.isIcon ? (
                                <Image src={item.icon} alt="Icon" width={20} height={20} loading="lazy" /> ) : ( item.text
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-black relative py-10 md:py-20 px-6 relative overflow-hidden">
                
                <motion.div className="absolute top-32 right-14 w-4 h-4 sm:w-8 sm:h-8" style={{ rotate: rotate2 }}>
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                </motion.div>
                <div className="absolute bottom-40 sm:bottom-0 -left-56 opacity-20 md:opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </div>
                <div className="md:hidden absolute bottom-5 -right-24 opacity-20 md:opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={226} height={226} loading="lazy" priority={false} />
                </div>
                <div className="max-w-6xl mx-auto relative">
                    
                    <motion.div className="hidden xl:block absolute -top-16 -left-20 w-auto h-auto" style={{ rotate: rotate2 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                    </motion.div>

                    <span className="text-red uppercase tracking-wider">{t.portfolio.headline}</span>
                    <h2 className="text-white text-5xl md:text-7xl font-bold mt-2">{t.portfolio.title}</h2>
        
                    <div className="relative">
                        <button className="hidden xl:block swiper-button-prev absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-100 active:scale-90"
                            onClick={() => playSound('click')} >
                            ←
                        </button>
                        <button className="hidden xl:block swiper-button-next absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-100 active:scale-90"
                        onClick={() => playSound('click')}>
                            →
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            centeredSlides={true}
                            loop={true}
                            spaceBetween={20}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            pagination={{
                                enabled: true,
                                clickable: true,
                                type: 'bullets',
                                dynamicBullets: true,
                            }}
                            className="!pb-10 sm:!pb-16 !pt-10 sm:!pt-14"
                            onSlideChange={() => {
                                if (window.innerWidth < 1280) {
                                    playSound('swoosh');
                                }
                            }}
                            
                            breakpoints={{
                                0: { 
                                    slidesPerView: 1,
                                    pagination: {
                                        enabled: true,
                                    }
                                },
                                400: {
                                    slidesPerView: 2,
                                    pagination: {
                                        enabled: true,
                                    }
                                },
                                1024: { 
                                    slidesPerView: 3,
                                    pagination: {
                                        enabled: false,
                                    }
                                }
                            }}
                            style={{
                                '--swiper-slide-transform': 'scale(0.8)',
                                '--swiper-pagination-color': '#D12923',
                                '--swiper-pagination-bullet-inactive-color': '#ffffff',
                                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                            } as any}
                        >
                            {portfolioSlides.map((slide, index) => (
                                <SwiperSlide key={index} className="!opacity-50 !scale-75 transition-all duration-300 [&.swiper-slide-active]:!opacity-100 [&.swiper-slide-active]:!scale-100">
                                    <div 
                                        className="group relative w-full h-full [perspective:1000px] sm:hover:scale-105 transition-all duration-300 hover:cursor-pointer" 
                                        onMouseEnter={() => playSound('hover_1')}
                                        onClick={() => {
                                            playSound('flipCard');
                                            setFlippedCards(prev => ({
                                                ...prev,
                                                [index]: !prev[index]
                                            }));
                                        }}
                                    >
                                    
                                        <div className={`relative aspect-[4/6] transition-all duration-500 [transform-style:preserve-3d] ${
                                            flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                                        }`}>
                                            <div className="absolute inset-0 [backface-visibility:hidden]">
                                                <div className="">
                                                    <Image 
                                                        src={slide.image} 
                                                        alt={slide.title} 
                                                        fill
                                                        className="object-cover brightness-75 rounded-[30px]"
                                                        loading="lazy" 
                                                    />
                                                </div>
                                                <div className="absolute inset-0 p-10 flex flex-col">
                                                    <div className="flex flex-col items-center justify-center h-full">
                                                        <h3 className="text-white text-4xl md:text-5xl font-bold whitespace-pre-line text-center uppercase">{slide.title}</h3>
                                                        <p className="text-white mt-4 text-lg font-medium">{slide.date}</p>
                                                    </div>
                                                    <div className="absolute bottom-10 right-10 w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors text-black">
                                                        <span className="inline-block animate-[bounceX-small_1s_ease-in-out_infinite]">→</span>
                                                    </div>
                                                </div>
                                            </div>
                                
                                            <div className="absolute inset-0 rounded-[30px] bg-zinc-900 p-10 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
                                                <div className="mt-5">
                                                    <h4 className="text-white text-4xl md:text-5xl font-bold mb-6 uppercase">{slide.title}</h4>
                                                    <div className="space-y-4 text-white/80 text-lg md:text-xl">
                                                        <div className="flex justify-between items-center">
                                                            <span>{t.portfolio.companyBudget}:</span>
                                                            <span>{slide.companyBudget}$</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>{t.portfolio.averageLeadPrice}:</span>
                                                            <span>{slide.averageLeadPrice}$</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>{t.portfolio.numberOfLeads}:</span>
                                                            <span>{slide.numberOfLeads}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>{t.portfolio.numberOfSales}:</span>
                                                            <span>{slide.numberOfSales}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>{t.portfolio.costPerSale}:</span>
                                                            <span>{slide.costPerSale}$</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-auto">
                                                    <Link 
                                                        href={`${slide.slug}`}
                                                        className="inline-flex items-center gap-2 text-red hover:text-red/80 transition-colors"
                                                    >
                                                        {t.portfolio.more}
                                                        <span className="inline-block animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            
            {/* achievements */}
            <section className="max-w-6xl px-6 mx-auto py-10 md:py-20">
                <div className="p-6 md:px-14 md:py-10 bg-white text-black  relative overflow-hidden rounded-[40px]">
                    <motion.div className="absolute top-10 right-10" style={{ rotate: rotate2 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} className="filter invert-[45%] sepia-[100%] hue-rotate-[0deg] brightness-[100%]"/>
                    </motion.div>
                    
                    <div className="absolute -left-20 top-40">
                        <Image src="/img/home/lines-yellow.svg" alt="Decorative circles" width={600} height={600} loading="lazy" />
                    </div>
                    <p className="text-red uppercase tracking-wider">{t.achievements.headline}</p>
                    <div className="">
                        <div className="flex items-end justify-between">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold mt-2">{t.achievements.title}</h2>
                                <p className="text-xl text-gray-600 mt-4">{t.achievements.description}</p>
                            </div>
                            <Link 
                                href="#form" 
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90 transition-all duration-300"
                                onMouseEnter={() => playSound('hover_1')}
                            >
                                {t.achievements.button}
                                <span className="inline-block animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                            </Link>
                        </div>

                        <div className=" relative">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                loop={true}
                                className="w-full"
                                navigation={{
                                    prevEl: '.achievement-prev',
                                    nextEl: '.achievement-next',
                                }}
                                onSlideChange={() => playSound('swoosh')}
                            >
                                {[1, 2, 3].map((index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative">
                                            <Image 
                                                src="/img/home/macbook.svg" 
                                                alt="Achievement statistics" 
                                                width={800} 
                                                height={500} 
                                                className="rounded-3xl"
                                                loading="lazy"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="flex gap-4 justify-center mt-8">
                                <button 
                                    className="achievement-prev w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 active:scale-90"
                                    onClick={() => playSound('click')}
                                >
                                    ←
                                </button>
                                <button 
                                    className="achievement-next w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 active:scale-90"
                                    onClick={() => playSound('click')}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* logo */}
            <section className="bg-black pt-10 md:pt-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="sm:text-center mb-16">
                        <span className="text-red uppercase tracking-wider">{t.partners.headline}</span>
                        <h2 className="text-white text-5xl md:text-7xl font-bold mt-2">{t.partners.title}</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                        {[1, 2, 3, 4].map((index) => (
                            <div 
                                key={index} 
                                className="aspect-[3/2] flex items-center justify-center border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300 group cursor-pointer"
                                onMouseEnter={() => playSound('hover_2')}
                            >
                                <span className="text-white text-3xl md:text-4xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    LOGO
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
        </div>
    );
} 