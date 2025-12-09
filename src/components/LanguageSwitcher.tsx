import { useLanguage } from '@/i18n/LanguageContext';
import { localeNames } from '@/i18n/config';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  /** Whether the navbar is at top (transparent background) */
  isAtTop?: boolean;
  /** Additional class names */
  className?: string;
}

export const LanguageSwitcher = ({ isAtTop = false, className = '' }: LanguageSwitcherProps) => {
  const { locale, setLocale } = useLanguage();

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'te' : 'en';
    setLocale(newLocale);
  };

  // Dynamic text color based on navbar scroll state
  const textColorClass = isAtTop 
    ? 'text-white hover:text-white/80' 
    : 'text-gray-900 hover:text-gray-700';

  const bgHoverClass = isAtTop 
    ? 'hover:bg-white/10' 
    : 'hover:bg-gray-100';

  return (
    <button
      onClick={handleLanguageSwitch}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold 
        transition-colors duration-300
        ${textColorClass}
        ${bgHoverClass}
        ${className}
      `}
      title={locale === 'en' ? 'తెలుగులో చూడండి' : 'View in English'}
      aria-label={`Switch to ${locale === 'en' ? 'Telugu' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="hidden sm:inline">{localeNames[locale === 'en' ? 'te' : 'en']}</span>
      <span className="sm:hidden">{locale === 'en' ? 'TE' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
