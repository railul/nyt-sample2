import React from 'react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (category: Category) => void;
  onGoHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onGoHome }) => {
  const quickLinks: Category[] = [
    'International',
    'Europe',
    'France',
    'Economy',
    'Environment',
    'Culture',
    'Opinion',
    'Science',
    'The Big Read'
  ];

  const groupPublications = [
    'Courrier International',
    'Télérama',
    'L’Obs',
    'La Vie',
    'Le Monde Diplomatique',
    'HuffPost France'
  ];

  return (
    <footer
      className="w-full border-t-2 border-[#121212] max-w-[1280px] mx-auto px-4 md:px-6 pt-8 pb-14 text-[#333333] text-[11px] font-sans"
      data-purpose="site-footer"
    >
      {/* Footer Masthead and Navigation Matrix */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#e2e4e6] gap-4">
        <button
          onClick={onGoHome}
          className="flex flex-col items-start cursor-pointer group focus:outline-none"
        >
          <span
            className="text-3xl text-[#121212] select-none"
            style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
          >
            Le Monde
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] -mt-1">
            in English
          </span>
        </button>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-semibold text-[#121212]">
          <button onClick={onGoHome} className="hover:underline cursor-pointer">
            Front Page
          </button>
          {quickLinks.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className="hover:underline cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Le Monde Group Sister Publications */}
      <div className="py-5 border-b border-[#e2e4e6]">
        <div className="text-[10px] uppercase font-bold tracking-wider text-[#888888] mb-2">
          Le Monde Group Publications
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[#555555]">
          {groupPublications.map((pub) => (
            <span key={pub} className="hover:text-[#121212] cursor-default">
              {pub}
            </span>
          ))}
        </div>
      </div>

      {/* Legal, Independence of the Press & Copyright */}
      <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#777777] gap-4">
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-4 gap-y-1.5">
          <span>© 2026 Le Monde.fr</span>
          <a className="hover:underline" href="#">Editorial Charter</a>
          <a className="hover:underline" href="#">Press Independence &amp; Ethics</a>
          <a className="hover:underline" href="#">Archives (1944–Present)</a>
          <a className="hover:underline" href="#">Subscribe to Newsletters</a>
          <a className="hover:underline" href="#">Contact the Newsroom</a>
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms &amp; Conditions</a>
          <a className="hover:underline" href="#">Cookie Settings</a>
        </nav>
        <div className="text-left sm:text-right text-[10px] text-[#888888]">
          <p>Société Éditrice du Monde · 67-69 avenue Pierre-Mendès-France, 75013 Paris</p>
          <p className="mt-0.5">Jérôme Fenoglio, Editorial Director</p>
        </div>
      </div>
    </footer>
  );
};
