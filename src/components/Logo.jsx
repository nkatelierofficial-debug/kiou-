import React from 'react';

export default function Logo({ variant = 'dark', height = '55px' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#0f4c81';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 140" style={{ height: height, width: 'auto' }}>
      <defs>
        <linearGradient id="kiouGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="50%" stopColor="#0077b6" />
          <stop offset="100%" stopColor="#03045e" />
        </linearGradient>
      </defs>
      <path 
        d="M90,45 C130,20 175,45 185,90 C165,65 130,55 105,65 C130,60 155,70 165,95 C125,75 95,65 90,45 Z" 
        fill="url(#kiouGradient)" 
      />
      <path 
        d="M105,25 C150,-5 195,20 205,70 C185,45 150,35 120,45 C150,40 175,50 185,75 C145,50 115,45 105,25 Z" 
        fill="url(#kiouGradient)"
        opacity="0.85"
      />
      <text 
        x="135" 
        y="125" 
        fontFamily="'Times New Roman', Times, serif" 
        fontSize="44" 
        fontWeight="bold" 
        fill={textColor} 
        textAnchor="middle"
        letterSpacing="1"
      >
        KIOU
      </text>
    </svg>
  );
}