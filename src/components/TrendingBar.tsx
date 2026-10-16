import React from 'react';
import { LIVE_NEWS_FEED } from '../data/newsData';

interface TrendingBarProps {
  onSelectTopic: (topic: string) => void;
}

export const TrendingBar: React.FC<TrendingBarProps> = ({ onSelectTopic }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 mb-5">
      <div className="flex items-center space-x-3 text-[11px] py-1.5 px-3 bg-[#f8f9fa] border border-[#e2e4e6] rounded-sm text-[#333333] overflow-x-auto no-scrollbar whitespace-nowrap">
        {/* Live Red Indicator */}
        <span className="font-bold uppercase tracking-wider text-[10px] text-[#c7171c] flex items-center gap-1.5 shrink-0 select-none">
          <span className="w-2 h-2 rounded-full bg-[#c7171c] animate-pulse inline-block" />
          CONTINUOUS NEWS
        </span>
        <span className="text-[#d0d3d6] select-none">|</span>

        {/* Live Feed Items */}
        {LIVE_NEWS_FEED.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="select-none text-[#cccccc]">·</span>}
            <button
              onClick={() => onSelectTopic(item.title)}
              className="hover:underline hover:text-[#121212] transition-colors cursor-pointer text-[#444444] font-medium shrink-0 flex items-center space-x-1"
            >
              <span className="font-bold text-[#121212]">{item.time}</span>
              <span className="text-[#888888] font-semibold">[{item.topic}]</span>
              <span>{item.title}</span>
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
