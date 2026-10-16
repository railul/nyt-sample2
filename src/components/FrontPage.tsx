import React from 'react';
import { Article, Category } from '../types';
import { ARTICLES } from '../data/newsData';

interface FrontPageProps {
  onSelectArticle: (article: Article) => void;
  selectedCategory: Category;
  onClearCategory: () => void;
  onSelectCategory: (cat: Category) => void;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  onSelectArticle,
  selectedCategory,
  onClearCategory,
  onSelectCategory
}) => {
  const getArticle = (id: string) => ARTICLES.find((a) => a.id === id);

  const leadStory = getArticle('lead-story-macron-europe') || ARTICLES[0];
  const liveStory = getArticle('live-ukraine-frontline') || ARTICLES[1];
  const budgetStory = getArticle('france-matignon-budget') || ARTICLES[2];
  const bigReadStory = getArticle('big-read-green-industry') || ARTICLES[3];
  const pikettyStory = getArticle('opinion-piketty-wealth') || ARTICLES[4];
  const editorialStory = getArticle('opinion-lemonde-editorial') || ARTICLES[5];
  const ecbStory = getArticle('economy-ecb-rates') || ARTICLES[6];
  const envStory = getArticle('environment-mediterranean-water') || ARTICLES[7];
  const cinemaStory = getArticle('culture-cannes-cinema') || ARTICLES[8];
  const scienceStory = getArticle('science-fusion-iter') || ARTICLES[9];
  const styleStory = getArticle('style-french-gastronomy') || ARTICLES[10];
  const rugbyStory = getArticle('sport-rugby-six-nations') || ARTICLES[11];
  const popular1 = getArticle('popular-1-paris-olympics-legacy') || ARTICLES[12];
  const popular2 = getArticle('popular-2-coffee-culture') || ARTICLES[13];
  const popular3 = getArticle('popular-3-literature-goncourt') || ARTICLES[14];

  // Most Read ranked list
  const mostRead = [popular1, leadStory, liveStory, popular2, pikettyStory];

  // If a category other than 'All' is selected, filter articles for that section
  const isFiltered = selectedCategory !== 'All';
  const filteredArticles = isFiltered
    ? ARTICLES.filter(
        (a) =>
          a.section === selectedCategory ||
          a.subsection?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          a.kicker?.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : [];

  return (
    <main className="w-full max-w-[1280px] mx-auto px-4 md:px-6 mb-16" data-purpose="editorial-layout">
      {/* Category filter active banner */}
      {isFiltered && (
        <div className="mb-6 pb-3 border-b-2 border-[#121212] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#666666]">
              Section
            </span>
            <h2 className="text-[28px] font-bold headline-serif text-[#121212]">
              {selectedCategory}
            </h2>
          </div>
          <button
            onClick={onClearCategory}
            className="text-[11px] font-bold uppercase tracking-wider text-[#184c78] hover:text-[#121212] underline cursor-pointer"
          >
            ← Return to Front Page
          </button>
        </div>
      )}

      {/* Filtered view when browsing a specific category */}
      {isFiltered ? (
        <div className="space-y-8">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-[#666666]">
              <p className="headline-serif text-lg">
                No additional stories filed under {selectedCategory} at this moment.
              </p>
              <button
                onClick={onClearCategory}
                className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#184c78] underline cursor-pointer"
              >
                Back to Front Page
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-8">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className={`cursor-pointer group ${
                    idx === 0
                      ? 'col-span-12 md:col-span-8 pb-6 border-b border-[#e2e4e6]'
                      : 'col-span-12 md:col-span-4 pb-6 border-b border-[#e2e4e6]'
                  }`}
                >
                  {article.imageUrl && (
                    <div className="mb-3 overflow-hidden bg-neutral-100 border border-neutral-200">
                      <img
                        src={article.imageUrl}
                        alt={article.headline}
                        referrerPolicy="no-referrer"
                        className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-[10px] font-bold tracking-wider uppercase mb-1">
                    <span className="text-[#184c78]">{article.kicker || article.section}</span>
                    {article.isSubscriberOnly && (
                      <span className="bg-[#ffc700] text-[#121212] px-1.5 py-0.5 rounded text-[9px] font-bold">
                        Subscriber only
                      </span>
                    )}
                    {article.isLive && (
                      <span className="bg-[#c7171c] text-white px-1.5 py-0.5 rounded text-[9px] font-bold animate-pulse">
                        LIVE
                      </span>
                    )}
                  </div>

                  <h3
                    className={`${
                      idx === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    } font-bold headline-serif leading-tight text-[#121212] group-hover:text-[#184c78] transition-colors`}
                  >
                    {article.headline}
                  </h3>

                  <p className="mt-2 text-[14px] text-[#444444] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="mt-3 text-[11px] text-[#777777] flex items-center space-x-2">
                    <span>{article.byline}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Standard Le Monde Front Page Layout */
        <div className="space-y-12">
          {/* SECTION 1: À LA UNE (LEAD STORY + CONTINUOUS NEWS COLUMN) */}
          <section className="grid grid-cols-12 gap-6 lg:gap-8 pb-10 lemonde-border-b">
            {/* Left 8 Cols: Lead Story with Hero Media */}
            <article
              onClick={() => onSelectArticle(leadStory)}
              className="col-span-12 lg:col-span-8 cursor-pointer group pr-0 lg:pr-4"
            >
              <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="text-[#184c78]">{leadStory.kicker}</span>
                <span className="text-[#aaaaaa]">·</span>
                <span className="bg-[#ffc700] text-[#121212] px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  Subscriber only
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold headline-serif leading-tight text-[#121212] group-hover:text-[#184c78] transition-colors mb-3">
                {leadStory.headline}
              </h2>

              {leadStory.imageUrl && (
                <div className="mb-3 overflow-hidden bg-neutral-100 rounded-xs">
                  <img
                    src={leadStory.imageUrl}
                    alt={leadStory.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-96 object-cover group-hover:scale-101 transition-transform duration-300"
                  />
                  {leadStory.imageCaption && (
                    <p className="text-[11px] text-[#777777] mt-1.5 italic">
                      {leadStory.imageCaption}
                    </p>
                  )}
                </div>
              )}

              <p className="text-[16px] text-[#333333] leading-relaxed mb-3">
                {leadStory.summary}
              </p>

              <div className="flex items-center space-x-3 text-[11px] text-[#666666]">
                <span className="font-medium text-[#121212]">{leadStory.byline}</span>
                <span>·</span>
                <span>{leadStory.date}</span>
                <span>·</span>
                <span className="font-semibold text-[#184c78]">{leadStory.readTime}</span>
              </div>
            </article>

            {/* Right 4 Cols: The Latest & Live Feed Column */}
            <aside className="col-span-12 lg:col-span-4 pl-0 lg:pl-4 lg:border-l border-[#e2e4e6] flex flex-col justify-between space-y-6">
              {/* Live Story Box */}
              <div
                onClick={() => onSelectArticle(liveStory)}
                className="p-4 bg-[#fbfbfb] border border-[#e2e4e6] rounded cursor-pointer group hover:border-[#121212] transition-colors"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c7171c] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#c7171c] uppercase tracking-wider">
                    LIVE REPORTING
                  </span>
                  <span className="text-[10px] text-[#888888]">{liveStory.date}</span>
                </div>
                <h3 className="text-[17px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-2">
                  {liveStory.headline}
                </h3>
                <p className="text-[13px] text-[#555555] leading-normal line-clamp-3">
                  {liveStory.summary}
                </p>
                <div className="mt-2 text-[10px] font-semibold text-[#184c78] flex items-center space-x-1">
                  <span>Read live developments</span>
                  <span>→</span>
                </div>
              </div>

              {/* French Budget & National Assembly Story */}
              <article
                onClick={() => onSelectArticle(budgetStory)}
                className="cursor-pointer group pb-4 border-b border-[#e2e4e6]"
              >
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span className="text-[#184c78]">{budgetStory.kicker}</span>
                  <span className="bg-[#ffc700] text-black px-1.5 py-0.2 rounded text-[9px] font-bold">
                    Subscriber only
                  </span>
                </div>
                <h3 className="text-[18px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-1.5">
                  {budgetStory.headline}
                </h3>
                <p className="text-[13px] text-[#555555] leading-normal line-clamp-2">
                  {budgetStory.summary}
                </p>
                <span className="text-[11px] text-[#888888] mt-1.5 block">
                  {budgetStory.byline} · {budgetStory.readTime}
                </span>
              </article>

              {/* European Economy & ECB Story */}
              <article
                onClick={() => onSelectArticle(ecbStory)}
                className="cursor-pointer group"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] mb-1">
                  {ecbStory.kicker}
                </div>
                <h3 className="text-[17px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-1.5">
                  {ecbStory.headline}
                </h3>
                <p className="text-[13px] text-[#555555] leading-normal line-clamp-2">
                  {ecbStory.summary}
                </p>
                <span className="text-[11px] text-[#888888] mt-1.5 block">
                  {ecbStory.byline} · {ecbStory.readTime}
                </span>
              </article>
            </aside>
          </section>

          {/* SECTION 2: THE BIG READ · LE GRAND FORMAT (INVESTIGATION SHOWCASE) */}
          <section className="bg-[#1f242a] text-white p-6 sm:p-8 rounded-sm">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 md:col-span-7 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#ffc700] text-[#121212] text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xs">
                    THE BIG READ · GRAND FORMAT
                  </span>
                  <span className="text-[11px] text-[#bbbbbb] uppercase tracking-wider">
                    Investigation
                  </span>
                </div>

                <h2
                  onClick={() => onSelectArticle(bigReadStory)}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold headline-serif leading-tight hover:text-[#ffc700] transition-colors cursor-pointer"
                >
                  {bigReadStory.headline}
                </h2>

                <p className="text-[15px] text-[#cccccc] leading-relaxed">
                  {bigReadStory.summary}
                </p>

                <div className="flex items-center space-x-3 text-[12px] text-[#aaaaaa] pt-2">
                  <span>{bigReadStory.byline}</span>
                  <span>·</span>
                  <span>{bigReadStory.readTime}</span>
                </div>

                <button
                  onClick={() => onSelectArticle(bigReadStory)}
                  className="mt-4 bg-[#ffc700] hover:bg-[#eab308] text-[#121212] font-bold text-[12px] uppercase tracking-wider py-2 px-4 rounded-xs transition-colors cursor-pointer inline-flex items-center space-x-2"
                >
                  <span>Read Investigation</span>
                  <span>→</span>
                </button>
              </div>

              <div
                onClick={() => onSelectArticle(bigReadStory)}
                className="col-span-12 md:col-span-5 cursor-pointer overflow-hidden rounded-xs group"
              >
                <img
                  src={bigReadStory.imageUrl}
                  alt={bigReadStory.headline}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* SECTION 3: OPINION & DEBATES (IDÉES & TRIBUNES) */}
          <section className="pb-10 lemonde-border-b">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#e2e4e6]">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#ffc700] inline-block" />
                <h2 className="text-xl font-bold uppercase tracking-wider headline-serif text-[#121212]">
                  Opinion & Debates
                </h2>
              </div>
              <button
                onClick={() => onSelectCategory('Opinion')}
                className="text-[11px] text-[#184c78] font-semibold hover:underline cursor-pointer"
              >
                See all opinions →
              </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Tribune: Thomas Piketty */}
              <article
                onClick={() => onSelectArticle(pikettyStory)}
                className="col-span-12 md:col-span-6 p-6 bg-[#fbfbfb] border border-[#e2e4e6] rounded-xs cursor-pointer group hover:border-[#121212] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <span className="text-[#c7171c]">TRIBUNE</span>
                    <span className="text-[#888888]">·</span>
                    <span className="bg-[#ffc700] text-black px-1.5 py-0.2 rounded text-[9px]">
                      Subscriber only
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-3">
                    {pikettyStory.headline}
                  </h3>

                  <p className="text-[14px] text-[#444444] leading-relaxed mb-4">
                    {pikettyStory.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2e4e6] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[13px] text-[#121212] block">
                      {pikettyStory.byline}
                    </span>
                    <span className="text-[11px] text-[#777777] block">
                      {pikettyStory.authorTitle}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#184c78] font-semibold">
                    {pikettyStory.readTime}
                  </span>
                </div>
              </article>

              {/* Editorial Board */}
              <article
                onClick={() => onSelectArticle(editorialStory)}
                className="col-span-12 md:col-span-6 p-6 bg-[#fbfbfb] border border-[#e2e4e6] rounded-xs cursor-pointer group hover:border-[#121212] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <span className="text-[#184c78]">LE MONDE EDITORIAL</span>
                    <span className="text-[#888888]">·</span>
                    <span className="text-[#666666]">Open access</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-3">
                    {editorialStory.headline}
                  </h3>

                  <p className="text-[14px] text-[#444444] leading-relaxed mb-4">
                    {editorialStory.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2e4e6] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[13px] text-[#121212] block">
                      {editorialStory.byline}
                    </span>
                    <span className="text-[11px] text-[#777777] block">
                      Daily editorial stance
                    </span>
                  </div>
                  <span className="text-[11px] text-[#184c78] font-semibold">
                    {editorialStory.readTime}
                  </span>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 4: FRANCE, ENVIRONMENT & SCIENCE */}
          <section className="grid grid-cols-12 gap-6 lg:gap-8 pb-10 lemonde-border-b">
            {/* Story 1: Environment */}
            <article
              onClick={() => onSelectArticle(envStory)}
              className="col-span-12 md:col-span-4 cursor-pointer group"
            >
              {envStory.imageUrl && (
                <div className="mb-3 overflow-hidden bg-neutral-100 rounded-xs">
                  <img
                    src={envStory.imageUrl}
                    alt={envStory.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-1">
                <span className="text-[#184c78]">{envStory.kicker}</span>
                <span className="bg-[#ffc700] text-black px-1.5 py-0.2 rounded text-[9px]">
                  Subscriber only
                </span>
              </div>
              <h3 className="text-lg font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-2">
                {envStory.headline}
              </h3>
              <p className="text-[13px] text-[#555555] leading-normal line-clamp-3">
                {envStory.summary}
              </p>
              <div className="mt-2 text-[11px] text-[#777777]">
                {envStory.byline} · {envStory.readTime}
              </div>
            </article>

            {/* Story 2: Science ITER Fusion */}
            <article
              onClick={() => onSelectArticle(scienceStory)}
              className="col-span-12 md:col-span-4 cursor-pointer group"
            >
              {scienceStory.imageUrl && (
                <div className="mb-3 overflow-hidden bg-neutral-100 rounded-xs">
                  <img
                    src={scienceStory.imageUrl}
                    alt={scienceStory.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider mb-1">
                <span className="text-[#184c78]">{scienceStory.kicker}</span>
                <span className="bg-[#ffc700] text-black px-1.5 py-0.2 rounded text-[9px]">
                  Subscriber only
                </span>
              </div>
              <h3 className="text-lg font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-2">
                {scienceStory.headline}
              </h3>
              <p className="text-[13px] text-[#555555] leading-normal line-clamp-3">
                {scienceStory.summary}
              </p>
              <div className="mt-2 text-[11px] text-[#777777]">
                {scienceStory.byline} · {scienceStory.readTime}
              </div>
            </article>

            {/* Story 3: Sport Rugby Six Nations */}
            <article
              onClick={() => onSelectArticle(rugbyStory)}
              className="col-span-12 md:col-span-4 cursor-pointer group"
            >
              {rugbyStory.imageUrl && (
                <div className="mb-3 overflow-hidden bg-neutral-100 rounded-xs">
                  <img
                    src={rugbyStory.imageUrl}
                    alt={rugbyStory.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] mb-1">
                {rugbyStory.kicker}
              </div>
              <h3 className="text-lg font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-2">
                {rugbyStory.headline}
              </h3>
              <p className="text-[13px] text-[#555555] leading-normal line-clamp-3">
                {rugbyStory.summary}
              </p>
              <div className="mt-2 text-[11px] text-[#777777]">
                {rugbyStory.byline} · {rugbyStory.readTime}
              </div>
            </article>
          </section>

          {/* SECTION 5: CULTURE, L'ÉPOQUE & MOST READ */}
          <section className="grid grid-cols-12 gap-8">
            {/* Left 8 Cols: Culture & Style */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between pb-2 border-b border-[#e2e4e6]">
                <h2 className="text-xl font-bold uppercase tracking-wider headline-serif text-[#121212]">
                  Culture & Living
                </h2>
                <button
                  onClick={() => onSelectCategory('Culture')}
                  className="text-[11px] text-[#184c78] font-semibold hover:underline cursor-pointer"
                >
                  More Culture →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Cinema */}
                <article
                  onClick={() => onSelectArticle(cinemaStory)}
                  className="cursor-pointer group"
                >
                  {cinemaStory.imageUrl && (
                    <div className="mb-2.5 overflow-hidden bg-neutral-100 rounded-xs">
                      <img
                        src={cinemaStory.imageUrl}
                        alt={cinemaStory.headline}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] block mb-1">
                    {cinemaStory.kicker}
                  </span>
                  <h3 className="text-[16px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-1.5">
                    {cinemaStory.headline}
                  </h3>
                  <p className="text-[13px] text-[#555555] leading-normal line-clamp-2">
                    {cinemaStory.summary}
                  </p>
                </article>

                {/* Gastronomy */}
                <article
                  onClick={() => onSelectArticle(styleStory)}
                  className="cursor-pointer group"
                >
                  {styleStory.imageUrl && (
                    <div className="mb-2.5 overflow-hidden bg-neutral-100 rounded-xs">
                      <img
                        src={styleStory.imageUrl}
                        alt={styleStory.headline}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] block mb-1">
                    {styleStory.kicker}
                  </span>
                  <h3 className="text-[16px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors mb-1.5">
                    {styleStory.headline}
                  </h3>
                  <p className="text-[13px] text-[#555555] leading-normal line-clamp-2">
                    {styleStory.summary}
                  </p>
                </article>
              </div>
            </div>

            {/* Right 4 Cols: "Most Read" (Les plus lus) numbered list */}
            <aside className="col-span-12 lg:col-span-4 pl-0 lg:pl-4 lg:border-l border-[#e2e4e6]">
              <div className="pb-2 border-b border-[#e2e4e6] mb-4">
                <h2 className="text-xl font-bold uppercase tracking-wider headline-serif text-[#121212] flex items-center justify-between">
                  <span>Most Read</span>
                  <span className="text-[11px] font-sans font-normal text-[#888888]">
                    Les plus lus
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {mostRead.map((story, rank) => (
                  <article
                    key={story.id}
                    onClick={() => onSelectArticle(story)}
                    className="flex items-start space-x-3.5 pb-3.5 border-b border-[#f0f0f0] cursor-pointer group"
                  >
                    <span className="text-3xl font-black headline-serif text-[#d0d3d6] group-hover:text-[#ffc700] transition-colors shrink-0 w-6">
                      {rank + 1}
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#184c78] block mb-0.5">
                        {story.kicker || story.section}
                      </span>
                      <h4 className="text-[14px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors">
                        {story.headline}
                      </h4>
                      <span className="text-[10px] text-[#888888] mt-1 block">
                        {story.readTime}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </section>
        </div>
      )}
    </main>
  );
};
