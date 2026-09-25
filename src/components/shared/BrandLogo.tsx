import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'wordmark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  inverted = false
}) => {
  const monogramSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const wordmarkSizes = {
    sm: 'text-sm tracking-[0.16em]',
    md: 'text-base sm:text-lg tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.2em]'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Monogram Badge using the official REYA BEAUTY RB emblem */}
      {(variant === 'full' || variant === 'monogram') && (
        <div
          className={`relative ${monogramSizes[size]} rounded-full flex items-center justify-center transition-transform hover:scale-105 overflow-hidden shadow-xs`}
          aria-hidden="true"
        >
          {/* Exact Reya Beauty circular RB monogram vector icon */}
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Outer circle with blush border */}
            <circle
              cx="500"
              cy="500"
              r="465"
              fill={inverted ? '#F2E1E5' : '#211217'}
              stroke={inverted ? '#211217' : '#F5D2D8'}
              strokeWidth="20"
            />

            {/* Monogram RB */}
            <g fill={inverted ? '#211217' : '#F5D2D8'}>
              {/* Letter R with organic top counter, waist notch, and bottom leg wave */}
              <path
                fillRule="evenodd"
                d="
                  M 152 694
                  L 152 372
                  C 152 330, 182 306, 270 306
                  C 362 306, 474 326, 474 420
                  C 474 472, 426 506, 360 506
                  C 434 522, 480 572, 502 654
                  L 502 694
                  L 394 694
                  C 390 656, 364 612, 332 574
                  C 310 546, 290 538, 276 538
                  L 276 694
                  Z
                  M 276 504
                  C 276 438, 204 382, 204 366
                  C 204 344, 238 338, 276 338
                  C 334 338, 386 354, 386 400
                  C 386 442, 342 482, 276 504
                  Z
                "
              />

              {/* Letter B with matching top teardrop counter and large bottom lobe counter */}
              <path
                fillRule="evenodd"
                d="
                  M 502 694
                  L 502 372
                  C 502 330, 534 306, 620 306
                  C 712 306, 818 330, 818 420
                  C 818 472, 770 504, 694 506
                  C 780 514, 852 558, 852 624
                  C 852 678, 804 694, 716 694
                  L 502 694
                  Z
                  M 626 504
                  C 626 438, 554 382, 554 366
                  C 554 344, 588 338, 626 338
                  C 684 338, 736 354, 736 400
                  C 736 442, 692 482, 626 504
                  Z
                  M 626 654
                  C 576 654, 564 606, 564 576
                  C 564 534, 626 524, 626 524
                  C 696 524, 764 546, 764 590
                  C 764 634, 706 654, 626 654
                  Z
                "
              />
            </g>
          </svg>
        </div>
      )}

      {/* Wordmark */}
      {(variant === 'full' || variant === 'wordmark') && (
        <span
          className={`font-serif font-bold uppercase transition-colors ${wordmarkSizes[size]} ${
            inverted ? 'text-[#F9F5F1]' : 'text-[#211217]'
          }`}
        >
          REYA BEAUTY
        </span>
      )}
    </div>
  );
};
