import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

export function CategoryCard({ title, description, icon, link, color }: CategoryCardProps) {
  // 从链接中提取域名作为资源名称
  const resourceName = new URL(link).hostname.replace('www.', '');

  return (
    <Card className="group hover:scale-105 transition-transform duration-200">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent 
          className="p-6"
          style={{
            background: `linear-gradient(135deg, ${color}10, ${color}20)`,
            borderLeft: `4px solid ${color}`,
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl" dangerouslySetInnerHTML={{ __html: icon }} />
            <h3 className="text-xl font-semibold" style={{ color }}>{title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div 
            className="flex items-center gap-2 text-sm py-2 px-3 rounded-full w-fit"
            style={{ 
              backgroundColor: `${color}15`,
              color: color
            }}
          >
            <span>访问 {resourceName}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}