import { useEffect, useRef } from 'react';
import { CategoryCard } from './CategoryCard';

interface ResourceProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconType: string;
  link: string;
}

interface CategoryProps {
  id: string;
  title: string;
  resources: ResourceProps[];
}

interface StageSectionProps {
  id: string;
  color: string;
  title: string;
  categories: CategoryProps[];
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
      { threshold: 0.5 }  // 当元素显示 50% 时触发
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, onInView]);

  // 生成分类的浅色版本
  const generateCategoryColor = (index: number, totalCategories: number) => {
    // 使用更浅的基础透明度，但保持渐变效果
    const baseOpacity = 0.08;
    const gradientStep = 0.05;
    const opacity = baseOpacity + (index / totalCategories) * gradientStep;
    return `${color}${Math.floor(opacity * 255).toString(16)}`;
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="min-h-screen snap-start flex flex-col relative overflow-hidden pt-24"
      style={{ 
        backgroundColor: `${color}CC`,  // 与导航栏按钮背景色保持一致
        backgroundImage: `
          radial-gradient(circle at 20% 20%, ${color}FF 0%, ${color}CC 50%),
          radial-gradient(circle at 80% 80%, ${color}FF 0%, ${color}CC 50%)
        `
      }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col h-full backdrop-blur-sm">
        <h2 
          className="text-4xl md:text-6xl font-bold mb-12 text-white" 
          style={{ 
            textShadow: `0 2px 4px ${color}40`
          }}
        >
          {title}
        </h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category, index) => (
            <div 
              key={category.id} 
              className="space-y-6 rounded-lg p-6 backdrop-blur-sm bg-white/20"
              style={{ 
                boxShadow: `0 4px 6px ${color}40`
              }}
            >
              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.resources?.map((resource) => (
                  <CategoryCard 
                    key={resource.id} 
                    {...resource} 
                    color={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}