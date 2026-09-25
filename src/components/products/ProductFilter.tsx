import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
}

interface ProductFilterProps {
  options: FilterOption[];
  activeFilter: string;
  onSelectFilter: (id: string) => void;
  className?: string;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  options,
  activeFilter,
  onSelectFilter,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto ${className}`}>
      {options.map((option) => {
        const isActive = activeFilter === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onSelectFilter(option.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
              isActive
                ? 'bg-[#401525] text-white shadow-xs'
                : 'bg-[#EAE1E4] text-[#401525] hover:bg-[#E0D2D6]'
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
