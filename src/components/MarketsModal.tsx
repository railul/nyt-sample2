import React from 'react';

interface MarketsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketsModal: React.FC<MarketsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const europeanMarkets = [
    { name: 'CAC 40 (Paris)', value: '7,982.40', change: '+0.48%', positive: true },
    { name: 'Euro Stoxx 50', value: '4,960.20', change: '+0.62%', positive: true },
    { name: 'DAX 40 (Frankfurt)', value: '18,740.15', change: '+0.35%', positive: true },
    { name: 'FTSE 100 (London)', value: '8,245.80', change: '-0.12%', positive: false },
    { name: 'S&P 500 (New York)', value: '5,815.30', change: '+0.32%', positive: true }
  ];

  const currenciesAndCommodities = [
    { name: 'EUR / USD', value: '1.0845', change: '+0.18%', positive: true },
    { name: 'EUR / GBP', value: '0.8520', change: '-0.05%', positive: false },
    { name: 'Brent Crude Oil', value: '$82.40 / bbl', change: '+0.75%', positive: true },
    { name: 'Gold (Ounce)', value: '€2,340.50', change: '+0.40%', positive: true },
    { name: 'EU Carbon EUA', value: '€68.50 / t', change: '-1.20%', positive: false }
  ];

  const europeanWeather = [
    { city: 'Paris', temp: '17°C', cond: 'Partly Sunny ⛅' },
    { city: 'Brussels', temp: '15°C', cond: 'Overcast ☁️' },
    { city: 'Berlin', temp: '14°C', cond: 'Sunny ☀️' },
    { city: 'Marseille', temp: '22°C', cond: 'Breezy & Warm 🌤️' },
    { city: 'Geneva', temp: '16°C', cond: 'Clear 🌤️' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e2e4e6] pb-3">
          <div>
            <h2 className="text-xl font-bold headline-serif text-[#121212]">
              European &amp; Global Financial Markets
            </h2>
            <p className="text-xs text-[#666666]">
              Real-time snapshot curated by Le Monde Économie
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Indices */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">
            Major Stock Indices
          </h3>
          <div className="divide-y divide-[#f0f0f0] border border-[#e2e4e6] rounded-xs bg-[#fafafa]">
            {europeanMarkets.map((m) => (
              <div key={m.name} className="flex justify-between items-center p-2.5 text-xs">
                <span className="font-semibold text-[#333333]">{m.name}</span>
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[#121212]">{m.value}</span>
                  <span
                    className={`font-semibold font-mono w-16 text-right ${
                      m.positive ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currencies & Commodities */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">
            Currencies, Energy &amp; Carbon
          </h3>
          <div className="divide-y divide-[#f0f0f0] border border-[#e2e4e6] rounded-xs bg-[#fafafa]">
            {currenciesAndCommodities.map((c) => (
              <div key={c.name} className="flex justify-between items-center p-2.5 text-xs">
                <span className="font-semibold text-[#333333]">{c.name}</span>
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[#121212]">{c.value}</span>
                  <span
                    className={`font-semibold font-mono w-16 text-right ${
                      c.positive ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {c.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather in European Capitals */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">
            European Weather Bulletin
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {europeanWeather.map((w) => (
              <div
                key={w.city}
                className="p-2 border border-[#e2e4e6] rounded-xs bg-white text-center text-xs"
              >
                <div className="font-bold text-[#121212]">{w.city}</div>
                <div className="text-amber-600 font-semibold">{w.temp}</div>
                <div className="text-[10px] text-[#777777]">{w.cond}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
