import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLanguage } from '@/lib/i18n';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  // 可以在这里添加更多语言
  // { code: 'ja', name: '日本語' },
  // { code: 'ko', name: '한국어' },
] as const;

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="fixed top-2 right-4 z-50 w-32">
      <Select
        value={currentLanguage}
        onValueChange={(value) => setLanguage(value as typeof currentLanguage)}
      >
        <SelectTrigger className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="cursor-pointer"
            >
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}