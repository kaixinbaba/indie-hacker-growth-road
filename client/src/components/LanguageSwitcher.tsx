import { useCallback } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = useCallback(() => {
    setLanguage(currentLanguage === 'en' ? 'zh' : 'en');
  }, [currentLanguage, setLanguage]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white z-50"
    >
      {currentLanguage === 'en' ? '中文' : 'English'}
    </Button>
  );
}
