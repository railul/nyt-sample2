import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const results = trimmed
    ? ARTICLES.filter(
        (a) =>
          a.headline.toLowerCase().includes(trimmed) ||
          a.summary.toLowerCase().includes(trimmed) ||
          a.kicker?.toLowerCase().includes(trimmed) ||
          a.byline.toLowerCase().includes(trimmed) ||
          a.section.toLowerCase().includes(trimmed) ||
          a.paragraphs.some((p) => p.toLowerCase().includes(trimmed))
      )
    : ARTICLES.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 max-h-[80vh] flex flex-col p-6">
        <div className="flex items-center justify-between border-b border-[#e2e4e6] pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl text-[#121212]"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              Le Monde
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#666666]">
              Search
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, European politics, France, investigations..."
            className="w-full pl-9 pr-8 py-2.5 border border-[#d0d3d6] rounded text-sm text-[#121212] focus:outline-none focus:border-[#121212]"
          />
          <svg
            className="w-4 h-4 fill-current text-[#777777] absolute left-3 top-3.5"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-3 text-xs text-[#888888] hover:text-black cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick topic pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] text-[#555555]">
          <span className="font-semibold text-[#888888]">Popular:</span>
          {['Macron', 'Europe', 'Climate', 'Piketty', 'Cinema', 'Economy'].map((topic) => (
            <button
              key={topic}
              onClick={() => setQuery(topic)}
              className="px-2 py-0.5 bg-[#f4f5f7] hover:bg-[#e2e4e6] text-[#222222] rounded cursor-pointer transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto space-y-4 divide-y divide-[#f0f0f0] pr-1">
          {results.length === 0 ? (
            <div className="py-8 text-center text-[#666666]">
              No articles found matching "{query}". Try different terms.
            </div>
          ) : (
            results.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="pt-3.5 first:pt-0 cursor-pointer group"
              >
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  <span className="text-[#184c78]">{article.kicker || article.section}</span>
                  {article.isSubscriberOnly && (
                    <span className="bg-[#ffc700] text-black px-1.5 py-0.2 rounded text-[9px] font-bold">
                      Subscriber only
                    </span>
                  )}
                </div>
                <h4 className="text-[15px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors">
                  {article.headline}
                </h4>
                <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                  {article.summary}
                </p>
                <div className="mt-1.5 text-[10px] text-[#888888] flex items-center space-x-2">
                  <span>{article.byline}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
