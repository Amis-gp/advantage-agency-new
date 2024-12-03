'use client';
import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';

export default function IntroductionSection() {
    const t = useTranslations();
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isDesktopVisible = true;

    const updatePath = () => {
        const pathElement = document.querySelector('.path-line') as SVGPathElement;
        if (pathElement) {
            pathElement.setAttribute('d', 'M10 10 H 90 V 90 H 10 L 10 10');
        }
    };

    useEffect(() => {
        updatePath();
    }, []);

    return (
        <section className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto px-6 pt-10 md:pt-20 relative">
            <div className="lg:w-1/2 flex flex-col justify-between">
                <div className="md:max-w-[440px]">
                    <p className="text-red md:text-lg font-medium tracking-wide">
                        {t('introduction.headline')}
                    </p>
                    
                    <h1 className="mt-1 text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t('introduction.title')}
                    </h1>
                    
                    <p className="mt-7 text-[#d3d3d3] md:text-lg leading-relaxed">
                        {t('introduction.description')}
                    </p>

                    <div className="w-fit mt-4 hover:scale-105 transition-all duration-100">
                        <Link href="#form" 
                            className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                            onMouseEnter={() => playSound('hover_1')}
                        >
                        <span className="relative z-10">{t('introduction.button')}</span>
                        <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                        <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                        </Link>
                    </div>
                </div>
                {/* PC */}
                <div ref={desktopRef} className="hidden sm:block relative h-[300px] w-full">
                    {[
                        { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                        { text: "Perfomans", left: "20%", bottom: "0%"},
                        { text: "Content", left: "55%", bottom: "3%", rotate: 10 },
                        { text: "Best", left: "2%", top: "50%", rotate: -26 },
                        { text: "Prospective", left: "35%", top: "58%", rotate: -9 },
                        { text: "Quality", left: "80%", top: "65%", },
                        { text: "Achievements", left: "17%", top: "35%", rotate: 10 },
                        { text: "Success", left: "65%", top: "40%", rotate: -10 },
                        { text: "Agency", left: "5%", top: "10%" },
                        { icon: "/img/home/whatsapp.svg", left: "55%", top: "27%", rotate: -30, isIcon: true },
                        { icon: "/img/home/telegram.svg", left: "62%", top: "15%", rotate: -30, isIcon: true, istg: true },
                        { icon: "/img/home/instagram.svg", left: "90%", top: "15%", rotate: 10, isIcon: true }
                    ].map((item, index) => (
                        <div key={index}
                            className={`absolute bg-red hover:bg-red/80 transition-all duration-100 rounded-full text-black animate-fall ${isDesktopVisible ? 'visible' : ''} ${item.isIcon ? 'flex items-center justify-center w-10 h-10' : 'rounded-[30px] px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                            onMouseEnter={() => playSound('hover_2')}
                            style={{
                                left: item.left,
                                top: item.top,
                                bottom: item.bottom,
                                fontSize: '20px',
                                fontWeight: '500',
                                lineHeight: '1',
                                '--rotation': `${item.rotate || 0}deg`,
                                animationDelay: `${index * 0.1}s`
                            } as React.CSSProperties}
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
                            icon: '/img/home/introduction-icon-1.svg',
                            title: t('introduction.steps.step1')
                        },
                        {
                            icon: '/img/home/introduction-icon-2.svg',
                            title: t('introduction.steps.step2')
                        },
                        {
                            icon: '/img/home/introduction-icon-3.svg',
                            title: t('introduction.steps.step3')
                        },
                        {
                            icon: '/img/home/introduction-icon-4.svg',
                            title: t('introduction.steps.step4')
                        },
                        {
                            icon: '/img/home/introduction-icon-5.svg',
                            title: t('introduction.steps.step5')
                        },
                        {
                            icon: '/img/home/introduction-icon-6.svg',
                            title: t('introduction.steps.step6')
                        },
                        {
                            icon: '/img/home/introduction-icon-7.svg',
                            title: t('introduction.steps.step7')
                        }
                    ].map((step, index) => (
                        <div 
                            key={index} 
                            className={`z-10 flex items-center gap-8 opacity-0 animate-fadeIn ${index % 2 === 1 && index !== 1 ? 'ml-24' : ''} ${index==1 ? 'ml-16' : ''}`} 
                            style={{ animationDelay: `${index * 0.2}s` }}
                            ref={(el) => {
                                if (itemRefs.current) {
                                    itemRefs.current[index] = el;
                                }
                            }}
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

            {/* Mobile */}
            <div 
                ref={mobileRef} 
                className="block sm:hidden relative h-[300px] w-full"
            >
                {[
                    { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                    { text: "Perfomans", left: "20%", bottom: "0%"},
                    { text: "Content", right: "0%", bottom: "3%", rotate: 10 },
                    { text: "Quality", left: "17%", top: "65%", },
                    { icon: "/img/home/instagram.svg", right: "0%", bottom: "20%", rotate: 10, isIcon: true },
                    { text: "Prospective", right: "8%", top: "57%", rotate: -15 },
                    { text: "Best", left: "2%", top: "50%", rotate: -26 },
                    { icon: "/img/home/whatsapp.svg", left: "32%", top: "48%", rotate: -30, isIcon: true },
                    { icon: "/img/home/telegram.svg", left: "47%", top: "42%", rotate: -30, isIcon: true, istg: true },
                    { text: "Success", left: "65%", top: "35%", rotate: -10 },
                    { text: "Agency", left: "2%", top: "30%", rotate: -12 },
                ].map((item, index) => {
                    const rotation = item.rotate || 0;
                    const animationName = `fall-rotate-${rotation}`.replace(/[^a-zA-Z0-9]/g, '_');
                    
                    return (
                        <div 
                            key={index}
                            className={`absolute bg-red hover:bg-red/80 transition-all duration-100 rounded-full text-black opacity-0 ${item.isIcon ? 'w-10 h-10' : 'px-6 py-3'} ${item.istg ? 'pr-1' : ''} opacity-0 ${item.isIcon ? 'w-10 h-10' : 'px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                            onMouseEnter={() => playSound('hover_2')}
                            style={{
                                left: item.left || 'auto',
                                top: item.top || 'auto',
                                right: item.right || 'auto',
                                bottom: item.bottom || 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: `${animationName} 0.5s ease-out forwards ${index * 0.1}s`,
                            }}
                        >
                            {item.isIcon ? (
                                <Image 
                                    src={item.icon} 
                                    alt="Icon" 
                                    width={20} 
                                    height={20} 
                                    loading="lazy"
                                /> 
                            ) : ( 
                                <span className="whitespace-nowrap">{item.text}</span>
                            )}
                            <style jsx>{`
                                @keyframes ${animationName} {
                                    0% {
                                        opacity: 0;
                                        transform: translateY(-20px) rotate(${rotation}deg);
                                    }
                                    100% {
                                        opacity: 1;
                                        transform: translateY(0) rotate(${rotation}deg);
                                    }
                                }
                            `}</style>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}