import { useTranslations } from '@/lib/i18n';

export function Navbar() {
  const { stages } = useTranslations();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <a href="#" className="text-2xl font-bold text-white font-serif">
            独立开发者成长之路
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {stages.map((stage) => (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                style={{ 
                  backgroundColor: `${stage.color}20`,
                  ['--hover-color' as string]: stage.color 
                }}
              >
                {stage.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
