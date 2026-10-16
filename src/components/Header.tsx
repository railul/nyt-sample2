import React from 'react';
import { Edition } from '../types';

interface HeaderProps {
  currentEdition: Edition;
  onSelectEdition: (edition: Edition) => void;
  onOpenSections: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onOpenMarkets: () => void;
  onOpenTodaysPaper: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  userEmail: string | null;
  onLogout: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentEdition,
  onSelectEdition,
  onOpenSections,
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  onOpenMarkets,
  onOpenTodaysPaper,
  onOpenSaved,
  savedCount,
  userEmail,
  onLogout,
  onGoHome
}) => {
  return (
    <header className="w-full max-w-[1280px] mx-auto px-4 md:px-6" data-purpose="site-header">
      {/* Top Utility / Navigation Bar */}
      <div className="flex items-center justify-between text-[11px] font-sans py-2.5 border-b border-[#e2e4e6] text-[#333333]">
        {/* Left: Sections Drawer & Search */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={onOpenSections}
            aria-label="Open Sections Menu"
            className="flex items-center space-x-1.5 hover:text-[#121212] font-semibold uppercase tracking-wider text-[11px] cursor-pointer transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <span className="hidden sm:inline">Sections</span>
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="flex items-center space-x-1 hover:text-[#121212] uppercase tracking-wider text-[11px] pl-3 border-l border-[#e2e4e6] cursor-pointer transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Edition switcher: In English vs En français */}
          <div className="hidden lg:flex items-center space-x-1 pl-3 text-[11px] border-l border-[#e2e4e6]">
            <button
              onClick={() => onSelectEdition('IN ENGLISH')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                currentEdition === 'IN ENGLISH'
                  ? 'bg-[#121212] text-white font-bold'
                  : 'text-[#666666] hover:text-[#121212]'
              }`}
            >
              In English
            </button>
            <button
              onClick={() => onSelectEdition('EN FRANÇAIS')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                currentEdition === 'EN FRANÇAIS'
                  ? 'bg-[#121212] text-white font-bold'
                  : 'text-[#666666] hover:text-[#121212]'
              }`}
            >
              En français
            </button>
          </div>
        </div>

        {/* Right side: Today's paper, My selection, Sign in / Account & Le Monde Yellow Subscribe Button */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <button
            onClick={onOpenTodaysPaper}
            className="hidden sm:flex items-center space-x-1 text-[11px] font-medium text-[#444444] hover:text-[#121212] cursor-pointer transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#666666]" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>Today's paper</span>
          </button>

          <button
            onClick={onOpenSaved}
            className="flex items-center space-x-1 text-[11px] font-medium text-[#444444] hover:text-[#121212] cursor-pointer transition-colors pl-2 border-l border-[#e2e4e6]"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#121212]" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="hidden md:inline">My selection</span>
            {savedCount > 0 && (
              <span className="ml-1 bg-[#ffc700] text-black font-bold text-[10px] px-1.5 py-0.2 rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          {userEmail ? (
            <div className="flex items-center space-x-2 text-[11px] pl-2 border-l border-[#e2e4e6]">
              <span className="bg-[#ffc700] text-black text-[10px] font-bold px-2 py-0.5 rounded">
                SUBSCRIBER
              </span>
              <span className="hidden md:inline text-[#666666] truncate max-w-[120px]">{userEmail}</span>
              <button
                onClick={onLogout}
                className="text-[10px] text-[#888888] hover:text-[#121212] underline cursor-pointer"
              >
                Sign out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={onOpenLogin}
                className="text-[#121212] hover:text-black text-[11px] font-semibold px-2.5 py-1.5 rounded transition-colors cursor-pointer border border-[#e2e4e6] hover:border-[#121212]"
              >
                Sign in
              </button>
              <button
                onClick={onOpenSubscribe}
                className="bg-[#ffc700] hover:bg-[#eab308] text-[#121212] text-[11px] font-bold py-1.5 px-3.5 rounded tracking-wide transition-all duration-150 shadow-xs cursor-pointer flex items-center space-x-1"
              >
                <span>Subscribe from €2.49/wk</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Le Monde Masthead Area */}
      <div className="grid grid-cols-12 items-center py-5 lemonde-border-b">
        {/* Left: Date, Paris Time & Weather */}
        <div className="col-span-12 md:col-span-3 mb-2 md:mb-0 text-[11px] text-[#555555]">
          <p className="font-semibold text-[12px] text-[#121212]">Monday, October 12, 2026</p>
          <div className="flex items-center space-x-2 mt-0.5">
            <button
              onClick={onOpenMarkets}
              className="hover:text-[#121212] hover:underline cursor-pointer transition-colors flex items-center space-x-1"
            >
              <span>Paris 17°C</span>
              <span className="text-amber-500">⛅</span>
            </button>
            <span>·</span>
            <button
              onClick={onOpenMarkets}
              className="hover:text-[#121212] hover:underline cursor-pointer transition-colors"
            >
              CAC 40 <span className="text-emerald-700 font-semibold">+0.48%</span>
            </button>
          </div>
        </div>

        {/* Center: Iconic Le Monde Blackletter Logo + 'in English' */}
        <div className="col-span-12 md:col-span-6 text-center my-1 md:my-0">
          <button
            onClick={onGoHome}
            aria-label="Le Monde in English Logo"
            className="inline-flex flex-col items-center cursor-pointer group focus:outline-none"
          >
            <h1
              className="text-[48px] sm:text-[56px] md:text-[64px] tracking-tight leading-none font-normal text-[#121212] select-none scale-y-105 transform group-hover:opacity-90 transition-opacity"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              Le Monde
            </h1>
            <div className="flex items-center space-x-1.5 -mt-1.5 sm:-mt-2">
              <span className="w-4 h-[1px] bg-[#121212]/30" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.25em] uppercase text-[#444444]">
                in English
              </span>
              <span className="w-4 h-[1px] bg-[#121212]/30" />
            </div>
          </button>
        </div>

        {/* Right: Editorial notice & Kiosk link */}
        <div className="col-span-12 md:col-span-3 text-left md:text-right text-[11px] text-[#666666]">
          <p className="font-medium text-[#121212]">Independent French Newsroom</p>
          <p className="text-[10px] text-[#777777] mt-0.5">530 journalists · Founded 1944</p>
          <button
            onClick={onOpenTodaysPaper}
            className="text-[10px] text-[#184c78] hover:underline font-semibold mt-1 inline-block cursor-pointer"
          >
            Read today's digital edition →
          </button>
        </div>
      </div>
    </header>
  );
};
