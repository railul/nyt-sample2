import React from 'react';
import { Category } from '../types';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: Category) => void;
}

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory
}) => {
  if (!isOpen) return null;

  const sectionsList: { name: Category; subitems: string[] }[] = [
    {
      name: 'International',
      subitems: ['Europe', 'Americas', 'Africa', 'Middle East', 'Asia-Pacific', 'Diplomacy']
    },
    {
      name: 'Europe',
      subitems: ['European Union', 'Franco-German Axis', 'War in Ukraine', 'Eastern Europe']
    },
    {
      name: 'France',
      subitems: ['Politics', 'National Assembly', 'Society', 'Justice', 'Education', 'Paris']
    },
    {
      name: 'Economy',
      subitems: ['European Economy', 'Companies & Startups', 'Energy', 'Tech & AI', 'Work']
    },
    {
      name: 'Environment',
      subitems: ['Climate Transition', 'Biodiversity', 'Water & Agriculture', 'Renewables']
    },
    {
      name: 'Culture',
      subitems: ['Cinema', 'Books & Literature', 'Visual Arts', 'Architecture', 'Music']
    },
    {
      name: 'Opinion',
      subitems: ['Le Monde Editorial', 'Tribunes', 'Debates & Analysis', 'Guest Columns']
    },
    {
      name: 'The Big Read',
      subitems: ['Investigations', 'Long-form Reporting', 'Photo Essays', 'Documentaries']
    },
    {
      name: 'Science',
      subitems: ['Physics & Fusion', 'Space Exploration', 'Health & Medicine', 'Neuroscience']
    },
    {
      name: 'Sport',
      subitems: ['Rugby Union', 'Football & Ligue 1', 'Cycling & Tour de France', 'Tennis']
    },
    {
      name: 'Style',
      subitems: ['L’Époque', 'Gastronomy & Wine', 'Design', 'Slow Travel']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-white shadow-2xl z-10 flex flex-col h-full border-r border-[#e2e4e6] animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#e2e4e6]">
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl text-[#121212]"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              Le Monde
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#666666]">
              Sections
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Section Matrix */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div className="space-y-4">
            {sectionsList.map((sec) => (
              <div key={sec.name} className="border-b border-[#f0f0f0] pb-3">
                <button
                  onClick={() => {
                    onSelectCategory(sec.name);
                    onClose();
                  }}
                  className="font-bold text-sm headline-serif text-[#121212] hover:text-[#184c78] cursor-pointer transition-colors block text-left"
                >
                  {sec.name}
                </button>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11px] text-[#666666]">
                  {sec.subitems.map((sub) => (
                    <span
                      key={sub}
                      onClick={() => {
                        onSelectCategory(sec.name);
                        onClose();
                      }}
                      className="hover:underline hover:text-[#121212] cursor-pointer"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Le Monde Services */}
          <div className="pt-2 space-y-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-[#999999] text-[10px] block">
              Le Monde Services
            </span>
            <ul className="space-y-1.5 text-[#444444]">
              <li className="hover:text-black cursor-pointer">🎧 Le Monde in English Podcasts</li>
              <li className="hover:text-black cursor-pointer">✉️ Morning &amp; Evening Newsletters</li>
              <li className="hover:text-black cursor-pointer">🏛️ The Archives (1944–Present)</li>
              <li className="hover:text-black cursor-pointer">🧩 Crosswords &amp; Games</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
