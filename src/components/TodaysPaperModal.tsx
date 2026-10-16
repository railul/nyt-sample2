import React, { useState } from 'react';

interface TodaysPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticleById?: (id: string) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({
  isOpen,
  onClose,
  onSelectArticleById
}) => {
  const [selectedSupplement, setSelectedSupplement] = useState<string>('principal');

  if (!isOpen) return null;

  const supplements = [
    { id: 'principal', title: 'Cahier Principal', pages: '36 pages', desc: 'International, Politics, Society, Economy' },
    { id: 'epoque', title: 'L’Époque', pages: '24 pages', desc: 'Culture, Lifestyle, Ideas & Long-form' },
    { id: 'economie', title: 'Le Monde Économie', pages: '16 pages', desc: 'Markets, Industry, Tech & European Business' },
    { id: 'livres', title: 'Le Monde des Livres', pages: '12 pages', desc: 'Literary Reviews, Philosophy & New Releases' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 max-h-[90vh] overflow-y-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2e4e6] pb-3">
          <div className="flex items-center space-x-3">
            <span
              className="text-3xl text-[#121212]"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              Le Monde
            </span>
            <div className="border-l border-[#e2e4e6] pl-3 text-left">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#121212]">
                Today’s Digital Newspaper
              </h2>
              <p className="text-[11px] text-[#666666]">
                Édition du jour · N° 24789 · Monday, October 12, 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Supplement Selector Tabs */}
        <div className="flex items-center space-x-2 border-b border-[#e2e4e6] pb-2 overflow-x-auto">
          {supplements.map((sup) => (
            <button
              key={sup.id}
              onClick={() => setSelectedSupplement(sup.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                selectedSupplement === sup.id
                  ? 'bg-[#121212] text-white'
                  : 'bg-[#f4f5f7] hover:bg-[#e2e4e6] text-[#333333]'
              }`}
            >
              {sup.title} <span className="opacity-70 text-[10px]">({sup.pages})</span>
            </button>
          ))}
        </div>

        {/* Newspaper Page Replica Mockup */}
        <div className="p-6 bg-[#fafafa] border border-[#d8d8d8] rounded-xs shadow-inner space-y-4">
          <div className="text-center border-b-2 border-[#121212] pb-3">
            <div className="text-xs tracking-widest uppercase font-semibold text-[#666666] mb-1">
              Fondateur : Hubert Beuve-Méry · Directeur : Jérôme Fenoglio
            </div>
            <h1
              className="text-5xl font-normal text-[#121212]"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              Le Monde
            </h1>
            <div className="flex justify-between items-center text-[10px] uppercase font-bold text-[#444444] mt-2 pt-1 border-t border-[#121212]">
              <span>83e année · N° 24789</span>
              <span>Lundi 12 Octobre 2026</span>
              <span>France : 3,60 € · International Edition</span>
            </div>
          </div>

          {/* Front page replica grid */}
          <div className="grid grid-cols-12 gap-4 pt-2">
            <div className="col-span-8 space-y-2 border-r border-[#e2e4e6] pr-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#184c78]">
                DIPLOMATIE EUROPÉENNE
              </span>
              <h3 className="text-2xl font-bold headline-serif leading-tight text-[#121212]">
                Face aux tensions géopolitiques, Paris et Berlin relancent l’autonomie stratégique
              </h3>
              <p className="text-xs text-[#444444] leading-relaxed">
                Emmanuel Macron et Olaf Scholz proposent un plan conjoint d’emprunt commun de 250 milliards d’euros pour financer la défense, la transition énergétique et l’indépendance technologique du continent.
              </p>
              <div className="text-[10px] text-[#777777]">
                Par Philippe Ricard et Claire Gatinois · Page 2-4
              </div>
            </div>

            <div className="col-span-4 space-y-3">
              <div className="pb-3 border-b border-[#e2e4e6]">
                <span className="text-[9px] font-bold uppercase text-[#c7171c]">POLITIQUE</span>
                <h4 className="text-sm font-bold headline-serif leading-snug text-[#121212]">
                  Budget : Le gouvernement sous pression à l'Assemblée
                </h4>
                <p className="text-[11px] text-[#666666] mt-0.5">Par Alexandre Lemarié · Page 6</p>
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase text-[#184c78]">IDÉES &amp; TRIBUNE</span>
                <h4 className="text-sm font-bold headline-serif leading-snug text-[#121212]">
                  Thomas Piketty : La justice fiscale au cœur du climat
                </h4>
                <p className="text-[11px] text-[#666666] mt-0.5">Page 18</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] pt-2 gap-3">
          <p>The daily digital edition is available to subscribers each afternoon at 1:00 PM Paris time.</p>
          <button
            onClick={onClose}
            className="bg-[#121212] hover:bg-[#333333] text-white px-4 py-2 rounded text-xs uppercase font-bold cursor-pointer transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
