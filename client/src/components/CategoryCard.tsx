import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconType: string;
  link: string;
  color: string;
}

export function CategoryCard({ title, description, icon, iconType, link, color }: CategoryCardProps) {
  const resourceName = new URL(link).hostname.replace('www.', '');

  const renderIcon = () => {
    if (iconType === 'image') {
      return (
        <img 
          src={icon} 
          alt={title} 
          className="w-8 h-8 object-contain"
        />
      );
    }
    return <span className="text-3xl" dangerouslySetInnerHTML={{ __html: icon }} />;
  };

  return (
    <Card className="group hover:scale-105 transition-transform duration-200">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent 
          className="p-6 backdrop-blur-lg"
          style={{
            backgroundColor: 'white',
            borderLeft: `4px solid ${color}`,
            boxShadow: `0 2px 4px ${color}20`
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            {renderIcon()}
            <h3 className="text-xl font-semibold" style={{ color }}>{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div 
            className="flex items-center gap-2 text-sm py-2 px-3 rounded-full w-fit"
            style={{ 
              backgroundColor: `${color}20`,
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