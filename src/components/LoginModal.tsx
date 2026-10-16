import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = email.trim() || 'reader@lemonde.fr';
    onLoginSuccess(finalEmail);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white border border-[#e2e4e6] shadow-2xl rounded-sm z-10 p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] absolute right-4 top-4 cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 border-b border-[#e2e4e6] pb-4">
          <div
            className="text-3xl text-[#121212]"
            style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
          >
            Le Monde
          </div>
          <h2 className="text-xl font-bold headline-serif text-[#121212]">
            Sign in to Your Account
          </h2>
          <p className="text-xs text-[#666666]">
            Access your subscriber features and reading list.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#121212] mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. reader@lemonde.fr"
              className="w-full px-3 py-2 border border-[#d0d3d6] rounded text-sm text-[#121212] focus:outline-none focus:border-[#121212]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-[#121212]">Password</label>
              <a href="#" className="text-[11px] text-[#184c78] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-[#d0d3d6] rounded text-sm text-[#121212] focus:outline-none focus:border-[#121212]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#121212] hover:bg-[#333333] text-white font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-xs text-[#666666] pt-2">
          <span>Don't have an account yet? </span>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-[#184c78] font-bold hover:underline cursor-pointer"
          >
            Subscribe to Le Monde
          </button>
        </div>
      </div>
    </div>
  );
};
