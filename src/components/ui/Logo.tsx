import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  showTagline = true
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  };

  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div className="relative">
        <span className={cn("font-bold font-heading", sizeClasses[size])}>
          <span className="text-primary">SOLAR</span>
          <span className="text-secondary">CLUB</span>
          <span className="text-muted-foreground text-sm md:text-base font-display">DISCOUNT</span>
        </span>
        {showTagline && (
          <span className="block text-xs md:text-sm text-muted-foreground font-sans">
            The Industry Magazine for Solar Panel Cleaning Professionals
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
