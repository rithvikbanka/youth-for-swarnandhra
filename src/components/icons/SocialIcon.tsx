import { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface SocialIconProps {
  href?: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'facebook';
  ariaLabel?: string;
  className?: string;
}

export const SocialIcon = ({
  href,
  platform,
  ariaLabel,
  className = '',
}: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getHoverGradient = () => {
    switch (platform) {
      case 'linkedin':
        return 'bg-[#0077B5]';
      case 'instagram':
        return 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]';
      default:
        return 'bg-primary';
    }
  };

  const content = (
    <div
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        transition-all duration-300 cursor-pointer
        ${isHovered 
          ? `${getHoverGradient()} text-white shadow-lg scale-110` 
          : 'bg-muted text-muted-foreground hover:text-foreground'
        }
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getIcon()}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `Visit ${platform} profile`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default SocialIcon;

