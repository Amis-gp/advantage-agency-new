import { useEffect, useRef } from 'react';
import Image from 'next/image';

type TranslationType = {
    introduction: {
        headline: string;
        title: string;
    };
    instructions: {
        steps: {
            [key: string]: {
                title: string;
                duration: string;
            };
        };
    };
};

interface InstructionsProps {
    translations: TranslationType;
}

export const Instructions = ({ translations }: InstructionsProps) => {
    const circleRefs = useRef<(HTMLDivElement | null)[]>(new Array(6).fill(null));

    useEffect(() => {
        const updatePath = () => {
            const circles = circleRefs.current.filter(el => el !== null);
            if (circles.length < 2) return;

            let path = '';
            circles.forEach((circle, index) => {
                if (!circle) return;
                
                const rect = circle.getBoundingClientRect();
                const svgContainer = document.querySelector('.steps-connection-svg');
                if (!svgContainer) return;
                
                const containerRect = svgContainer.getBoundingClientRect();
                
                const x = rect.left - containerRect.left + (rect.width / 2);
                const y = rect.top - containerRect.top + (rect.height / 2);
                
                if (index === 0) {
                    path += `M ${x} ${y}`;
                    const nextRect = circleRefs.current[1]?.getBoundingClientRect();
                    if (nextRect) {
                        const nextX = nextRect.left - containerRect.left + (nextRect.width / 2);
                        const nextY = nextRect.top - containerRect.top + (nextRect.height / 2);
                        
                        const cp1x = x + 100;
                        const cp1y = y;
                        const cp2x = nextX - 50;
                        const cp2y = nextY - 100;
                        
                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                    }
                } else if (index < circles.length - 1) {
                    const nextRect = circleRefs.current[index + 1]?.getBoundingClientRect();
                    if (!nextRect) return;
                    
                    const nextX = nextRect.left - containerRect.left + (nextRect.width / 2);
                    const nextY = nextRect.top - containerRect.top + (nextRect.height / 2);
                    
                    const direction = index % 2 === 0 ? 1 : -1;
                    
                    const cp1x = x;
                    const cp1y = y + 100;
                    const cp2x = nextX + (200 * direction);
                    const cp2y = nextY - 100;
                    
                    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                }
            });

            const svgPath = document.querySelector('.steps-path-line');
            if (svgPath) {
                svgPath.setAttribute('d', path);
            }
        };

        const timeouts = [100, 500, 1000, 2000].map(delay => 
            setTimeout(updatePath, delay)
        );

        window.addEventListener('resize', updatePath);
        
        return () => {
            window.removeEventListener('resize', updatePath);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <section className="bg-black pt-10 md:pt-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <span className="text-red uppercase tracking-wider">
                    {translations.instructions.headline}
                </span>
                <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">
                    {translations.instructions.title}
                </h2>

                <div className="grid grid-cols-2 gap-4 relative mt-16 md:mt-32">
                    <svg 
                        className="steps-connection-svg absolute inset-0 w-full h-full" 
                        style={{ 
                            stroke: '#D12923',
                            strokeWidth: 4,
                            fill: 'none',
                            minHeight: '1000px',
                            pointerEvents: 'none',
                        }}
                        preserveAspectRatio="none"
                    >
                        <path 
                            className="steps-path-line" 
                            d="" 
                            style={{
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                            }}
                        />
                    </svg>

                    {[...Array(6)].map((_, index) => (
                        <div 
                            key={index} 
                            className={`z-10 flex justify-center ${index % 2 === 1 ? 'mt-80' : '-mt-14'}`} 
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="relative rounded-2xl border border-white/90 bg-black p-3 md:p-12 space-y-4 md:space-y-10 animate-fadeIn max-w-[200px] md:max-w-[350px] h-fit w-full">
                                <p className="text-white text-xs sm:text-base md:text-xl font-semibold">
                                    {translations.instructions.steps[`step${index + 1}` as keyof typeof translations.instructions.steps].title}
                                </p>
                                <div 
                                    ref={el => circleRefs.current[index] = el}
                                    className={`absolute ${index % 2 === 0 ? '-top-28 left-16' : '-top-28 right-16'} ${index === 0 ? '!top-28 !left-auto !-right-12' : ''} flex justify-center items-center w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24 z-30 bg-red rounded-full`}
                                >
                                    <span className="text-sm md:text-xl xl:text-4xl font-semibold">{`${index + 1}`}</span>
                                </div>
                                <Image 
                                    src={`/img/home/instruction-icon-${index + 1}.webp`} 
                                    alt={translations.instructions.steps[`step${index + 1}` as keyof typeof translations.instructions.steps].title} 
                                    width={200} 
                                    height={150} 
                                    loading="lazy" 
                                />
                                <div className="text-center gap-2 text-white border border-white rounded-3xl py-2 md:py-4 px-4 md:px-3">
                                    <span className="text-xs sm:text-base md:text-xl">
                                        {translations.instructions.steps[`step${index + 1}` as keyof typeof translations.instructions.steps].duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructions;