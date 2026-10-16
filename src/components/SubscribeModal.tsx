import React, { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeSuccess: (email: string) => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSubscribeSuccess
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'solo' | 'full' | 'print'>('solo');
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = email.trim() || 'subscriber@lemonde.fr';
    onSubscribeSuccess(finalEmail);
    onClose();
  };

  const isEur = currency === 'EUR';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 p-6 sm:p-7 space-y-6">
        <button
          onClick={onClose}
          className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] absolute right-4 top-4 cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 border-b border-[#e2e4e6] pb-4">
          <div
            className="text-3xl text-[#121212]"
            style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
          >
            Le Monde
          </div>
          <h2 className="text-xl font-bold headline-serif text-[#121212]">
            Subscribe to Le Monde in English
          </h2>
          <p className="text-xs text-[#666666]">
            Support 530 independent journalists and enjoy unmetered European coverage.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center space-x-2 pt-2 text-xs">
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                isEur ? 'bg-[#121212] text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              € EUR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                !isEur ? 'bg-[#121212] text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>

        {/* Plan options */}
        <div className="space-y-3">
          {/* Plan 1: Digital Solo */}
          <div
            onClick={() => setSelectedPlan('solo')}
            className={`p-4 border rounded cursor-pointer transition-colors ${
              selectedPlan === 'solo'
                ? 'border-[#ffc700] bg-[#fffdf0] shadow-xs ring-1 ring-[#ffc700]'
                : 'border-[#e2e4e6] hover:border-[#999999]'
            }`}
          >
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-sm text-[#121212]">Digital Solo</span>
              <span className="font-bold text-base text-[#121212]">
                {isEur ? '€2.49 / week' : '$2.99 / mo'}
              </span>
            </div>
            <p className="text-xs text-[#555555] mt-1">
              Unlimited articles in English and French on desktop and mobile apps. Cancel anytime.
            </p>
          </div>

          {/* Plan 2: Digital Full Access & Archives */}
          <div
            onClick={() => setSelectedPlan('full')}
            className={`p-4 border rounded cursor-pointer transition-colors relative ${
              selectedPlan === 'full'
                ? 'border-[#ffc700] bg-[#fffdf0] shadow-xs ring-1 ring-[#ffc700]'
                : 'border-[#e2e4e6] hover:border-[#999999]'
            }`}
          >
            <span className="absolute -top-2.5 right-4 bg-[#ffc700] text-black text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
              Recommended
            </span>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-sm text-[#121212]">Digital Family & Archives</span>
              <span className="font-bold text-base text-[#121212]">
                {isEur ? '€14.99 / mo' : '$15.99 / mo'}
              </span>
            </div>
            <p className="text-xs text-[#555555] mt-1">
              4 distinct user accounts, complete historic archives since 1944, and daily digital newspaper replica at 1:00 PM.
            </p>
          </div>

          {/* Plan 3: Digital + Weekend Print */}
          <div
            onClick={() => setSelectedPlan('print')}
            className={`p-4 border rounded cursor-pointer transition-colors ${
              selectedPlan === 'print'
                ? 'border-[#ffc700] bg-[#fffdf0] shadow-xs ring-1 ring-[#ffc700]'
                : 'border-[#e2e4e6] hover:border-[#999999]'
            }`}
          >
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-sm text-[#121212]">Digital & Weekend Print</span>
              <span className="font-bold text-base text-[#121212]">
                {isEur ? '€24.99 / mo' : '$27.99 / mo'}
              </span>
            </div>
            <p className="text-xs text-[#555555] mt-1">
              All digital benefits plus print Friday &amp; Saturday broadsheet editions delivered to your doorstep.
            </p>
          </div>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-[#121212] mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3 py-2 border border-[#d0d3d6] rounded text-sm focus:outline-none focus:border-[#121212]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ffc700] hover:bg-[#eab308] text-[#121212] font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            Confirm Subscription
          </button>
        </form>

        <p className="text-[10px] text-center text-[#888888]">
          By continuing, you agree to Le Monde’s Terms of Sale and Privacy Charter. Cancel at any time via your account settings.
        </p>
      </div>
    </div>
  );
};
