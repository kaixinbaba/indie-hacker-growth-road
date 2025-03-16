import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function CategoryCard({ title, description, icon, link }: CategoryCardProps) {
  return (
    <Card className="group hover:scale-105 transition-transform duration-200">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent className="p-6 bg-white/10 backdrop-blur-lg">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl" dangerouslySetInnerHTML={{ __html: icon }} />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-white/80">{description}</p>
        </CardContent>
      </a>
    </Card>
  );
}
