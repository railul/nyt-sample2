import React from 'react';
import { Category } from '../types';
import { NAVIGATION_CATEGORIES } from '../data/newsData';

interface NavigationProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <nav
      aria-label="Le Monde Sections"
      className="lemonde-border-b max-w-[1280px] mx-auto px-4 md:px-6 my-1"
    >
      <ul className="flex items-center justify-between text-[12px] font-sans text-[#222222] overflow-x-auto no-scrollbar whitespace-nowrap gap-4 md:gap-6 py-2">
        {NAVIGATION_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <li key={cat}>
              <button
                onClick={() => onSelectCategory(cat)}
                className={`font-semibold cursor-pointer transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#121212] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#121212]'
                    : 'text-[#444444] hover:text-[#121212]'
                }`}
              >
                {cat === 'The Big Read' ? (
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffc700]" />
                    <span>The Big Read</span>
                  </span>
                ) : (
                  cat
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
