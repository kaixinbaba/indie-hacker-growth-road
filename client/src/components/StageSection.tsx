import { useEffect, useRef } from 'react';
import { CategoryCard } from './CategoryCard';

interface StageSectionProps {
  id: string;
  color: string;
  title: string;
  categories: {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
  }[];
  onInView?: (id: string) => void;
}

function generateVariantColors(baseColor: string, count: number): string[] {
  // 生成同色系但亮度不同的变体颜色
  const colors = [];
  for (let i = 0; i < count; i++) {
    const opacity = 0.7 + (i * 0.1); // 0.7, 0.8, 0.9
    colors.push(`${baseColor}${Math.floor(opacity * 255).toString(16)}`);
  }
  return colors;
}

export function StageSection({ id, color, title, categories, onInView }: StageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variantColors = generateVariantColors(color, categories.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onInView) {
            onInView(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, onInView]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="min-h-screen snap-start flex flex-col relative overflow-hidden pt-24"
      style={{ 
        backgroundColor: color,
        color: 'white'
      }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col h-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white">{title}</h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min overflow-y-auto">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              {...category} 
              color={variantColors[index]}
            />
          ))}
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}