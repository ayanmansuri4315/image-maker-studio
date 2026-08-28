import React from 'react';

interface WashiTapeProps {
  type?: 'top' | 'corner' | 'left-corner' | 'none';
  className?: string;
  color?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  type = 'top',
  className = '',
}) => {
  if (type === 'none') return null;

  if (type === 'corner') {
    return (
      <div
        className={`absolute -top-3 -right-3 w-16 h-6 bg-[#E8DEC8]/85 backdrop-blur-[1px] shadow-sm z-20 pointer-events-none rotate-[26deg] border-x border-dashed border-[#BBAA94]/40 ${className}`}
        style={{
          boxShadow: '0 1px 3px rgba(40,30,20,0.14)',
        }}
      />
    );
  }

  if (type === 'left-corner') {
    return (
      <div
        className={`absolute -top-3 -left-3 w-16 h-6 bg-[#E8DEC8]/85 backdrop-blur-[1px] shadow-sm z-20 pointer-events-none -rotate-[26deg] border-x border-dashed border-[#BBAA94]/40 ${className}`}
        style={{
          boxShadow: '0 1px 3px rgba(40,30,20,0.14)',
        }}
      />
    );
  }

  return (
    <div
      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-[#EADFCB]/90 backdrop-blur-[1px] z-20 pointer-events-none -rotate-[1deg] border-x-2 border-dashed border-[#BBAA94]/40 ${className}`}
      style={{
        boxShadow: '0 1px 3px rgba(40,30,20,0.12)',
      }}
    />
  );
};
