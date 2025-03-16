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

export function StageSection({ id, color, title, categories, onInView }: StageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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
      style={{ backgroundColor: color }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col h-full">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">{title}</h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min overflow-y-auto">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
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