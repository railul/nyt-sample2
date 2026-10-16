import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/newsData';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  onSelectArticle,
  onRemoveSaved
}) => {
  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 max-h-[85vh] overflow-y-auto p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e2e4e6] pb-3">
          <div>
            <h2 className="text-xl font-bold headline-serif text-[#121212]">
              My Selection ({savedArticles.length})
            </h2>
            <p className="text-xs text-[#666666]">
              Your personal reading list on Le Monde in English
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {savedArticles.length === 0 ? (
          <div className="py-12 text-center text-[#666666] space-y-2">
            <p className="font-serif text-base">Your reading selection is currently empty.</p>
            <p className="text-xs text-[#888888]">
              Click the bookmark icon on any article to save it for later reading.
            </p>
          </div>
        ) : (
          <div className="space-y-4 divide-y divide-[#f0f0f0]">
            {savedArticles.map((article) => (
              <div key={article.id} className="pt-4 first:pt-0 flex justify-between items-start gap-4">
                <div
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="cursor-pointer group flex-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] block mb-1">
                    {article.kicker || article.section}
                  </span>
                  <h3 className="text-base font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors">
                    {article.headline}
                  </h3>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    {article.summary}
                  </p>
                  <div className="mt-2 text-[11px] text-[#888888] flex items-center space-x-2">
                    <span>{article.byline}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveSaved(article.id)}
                  className="text-xs text-[#999999] hover:text-red-700 font-semibold p-1 cursor-pointer transition-colors"
                  title="Remove from selection"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
