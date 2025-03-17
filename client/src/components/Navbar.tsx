import { useLanguage } from '@/lib/i18n';

interface NavTitle {
  en: string;
  zh: string;
  ja: string;
}

const navTitle: NavTitle = {
  en: "Indie Hacker Growth Road",
  zh: "独立开发者成长之路",
  ja: "個人開発者の成長への道"
};

interface NavbarProps {
  activeStage: string;
}

export function Navbar({ activeStage }: NavbarProps) {
  const { currentLanguage, translations, setLanguage } = useLanguage();
  const { stages } = translations;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="w-96 flex-shrink-0 truncate">
            <a href="#" className="text-2xl font-bold text-white font-serif whitespace-nowrap">
              {navTitle[currentLanguage]}
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center space-x-4 overflow-x-auto">
            {stages.map((stage) => {
              const isActive = stage.id === activeStage;
              return (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  className={`
                    text-white transition-all duration-300 px-3 py-2 rounded-md 
                    text-sm font-medium whitespace-nowrap hover:bg-white/10
                    ${isActive ? 'outline outline-2 outline-offset-2 outline-white/90' : ''}
                  `}
                  style={{ 
                    backgroundColor: `${stage.color}CC`,
                    boxShadow: `0 2px 4px ${stage.color}60`
                  }}
                >
                  {stage.title}
                </a>
              );
            })}
          </div>

          <select
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value as 'zh' | 'en' | 'ja')}
            className="ml-4 bg-white/10 text-white border-0 rounded-md px-2 py-1 outline-none hover:bg-white/20 transition-colors"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </nav>
  );
}