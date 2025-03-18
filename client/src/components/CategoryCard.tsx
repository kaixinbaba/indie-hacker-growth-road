import { Card, CardContent } from './ui/card';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconType: string;
  link: string;
}

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconType: string;
  link: string;
  color: string;
}

interface ResourceListProps {
  title: string;
  resources: Resource[];
}

// 原来的大卡片组件
export function CategoryCard({ title, description, icon, iconType, link, color }: CategoryCardProps) {
  return (
    <Card className="group hover:scale-105 transition-transform duration-200 transform-gpu">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent 
          className="p-3"
          style={{
            backgroundColor: 'white',
            borderLeft: `4px solid ${color}`,
            boxShadow: `0 2px 4px ${color}20`
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            {iconType === 'image' ? (
              <img 
                src={icon} 
                alt={title} 
                className="w-5 h-5 object-contain"
                loading="lazy" // 添加懒加载
              />
            ) : (
              <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
            )}
            <h3 className="text-base font-medium" style={{ color }}>{title}</h3>
          </div>
          <p className="text-xs text-gray-600">{description}</p>
        </CardContent>
      </a>
    </Card>
  );
}

// 新的资源列表组件
export function ResourceList({ title, resources }: ResourceListProps) {
  return (
    <div className="bg-white/5 rounded-lg p-3">
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-2 rounded hover:bg-white/10 transition-colors text-center"
          >
            {resource.iconType === 'image' ? (
              <img
                src={resource.icon}
                alt={resource.title}
                className="w-5 h-5 rounded mb-1"
              />
            ) : (
              <span className="text-lg mb-1" dangerouslySetInnerHTML={{ __html: resource.icon }} />
            )}
            <div className="w-full">
              <div className="font-medium text-xs truncate">
                {resource.title}
              </div>
              <div className="text-[10px] text-gray-400 truncate">
                {resource.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}