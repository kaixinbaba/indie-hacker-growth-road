import { useLanguage } from '@/lib/i18n';

interface NavTitle {
  en: string;
  zh: string;
  ja: string;
}

const navTitle: NavTitle = {
  en: "Independent Developer Growth Road",
  zh: "独立开发者成长之路",
  ja: "インディペンデント開発者の成長への道"
};

export function Navbar() {
  const { currentLanguage, translations } = useLanguage();
  const { stages } = translations;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo/Title - 固定宽度 */}
          <div className="w-64 flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white font-serif">
              {navTitle[currentLanguage]}
            </a>
          </div>

          {/* Navigation Links - 居中对齐 */}
          <div className="flex-1 flex items-center justify-center space-x-4 overflow-x-auto">
            {stages.map((stage) => (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
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