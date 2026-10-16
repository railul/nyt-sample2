import React, { useState } from 'react';
import { Article, Comment } from '../types';
import { ARTICLES } from '../data/newsData';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  onOpenSubscribe?: () => void;
  isUserSubscribed?: boolean;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  isSaved,
  onToggleSave,
  onOpenSubscribe,
  isUserSubscribed = false
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [copiedShare, setCopiedShare] = useState(false);
  const [gifted, setGifted] = useState(false);
  const [unlockedPreview, setUnlockedPreview] = useState(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>(article.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentLocation, setNewCommentLocation] = useState('');
  const [newCommentBody, setNewCommentBody] = useState('');
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const handleGift = () => {
    setGifted(true);
    setTimeout(() => setGifted(false), 3000);
  };

  const handleLikeComment = (commentId: string) => {
    setLikedComments((prev) => {
      const alreadyLiked = prev[commentId];
      return { ...prev, [commentId]: !alreadyLiked };
    });
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const isLiked = likedComments[commentId];
          return { ...c, likes: isLiked ? c.likes - 1 : c.likes + 1 };
        }
        return c;
      })
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentBody.trim()) return;

    const newComment: Comment = {
      id: 'usr_' + Date.now(),
      author: newCommentName.trim() || 'Reader',
      location: newCommentLocation.trim() || 'Paris, France',
      timestamp: 'Just now',
      content: newCommentBody.trim(),
      likes: 1
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentBody('');
    setNewCommentName('');
    setNewCommentLocation('');
  };

  // Related articles from Le Monde
  const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const fontClasses = {
    normal: 'text-[17px] leading-[1.8]',
    large: 'text-[19px] leading-[1.85]',
    xl: 'text-[21px] leading-[1.9]'
  };

  // Determine whether article should be gated
  const isGated = article.isSubscriberOnly && !isUserSubscribed && !unlockedPreview;

  return (
    <div className="w-full max-w-[960px] mx-auto px-4 md:px-6 py-6">
      {/* Top Navigation Bar within Article */}
      <div className="flex items-center justify-between border-b border-[#e2e4e6] pb-3 mb-6 font-sans text-[12px]">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[#121212] hover:text-[#184c78] cursor-pointer transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Le Monde Front Page</span>
        </button>

        <div className="flex items-center space-x-3 text-[#666666]">
          <span className="font-semibold text-[#184c78] uppercase tracking-wider text-[11px]">
            {article.section}
          </span>
          {article.subsection && (
            <>
              <span>/</span>
              <span>{article.subsection}</span>
            </>
          )}
        </div>
      </div>

      {/* Article Header & Metadata */}
      <header className="mb-8">
        <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider mb-2">
          <span className="text-[#184c78]">{article.kicker || article.section}</span>
          {article.isSubscriberOnly && (
            <span className="bg-[#ffc700] text-[#121212] px-2 py-0.5 rounded text-[10px] font-bold inline-flex items-center gap-1">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              Subscriber only
            </span>
          )}
          {article.isLive && (
            <span className="bg-[#c7171c] text-white px-2 py-0.5 rounded text-[10px] font-bold animate-pulse">
              LIVE
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold headline-serif leading-[1.15] text-[#121212] mb-4">
          {article.headline}
        </h1>

        <p className="text-lg md:text-xl text-[#444444] font-serif leading-relaxed mb-6 italic">
          {article.summary}
        </p>

        {/* Byline & Date */}
        <div className="flex flex-wrap items-center justify-between text-[12px] text-[#666666] py-3 border-y border-[#e2e4e6] gap-3">
          <div>
            <span className="font-bold text-[#121212] text-[13px]">{article.byline}</span>
            <div className="text-[11px] text-[#777777] mt-0.5">
              <span>Published on {article.date}</span>
              <span className="mx-1.5">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center space-x-2">
            {/* Audio listen toggle */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-[11px] font-semibold cursor-pointer transition-colors ${
                isPlayingAudio
                  ? 'bg-[#121212] text-white'
                  : 'bg-[#f0f2f5] hover:bg-[#e2e4e6] text-[#121212]'
              }`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                {isPlayingAudio ? (
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
              <span>{isPlayingAudio ? 'Pause' : `Listen (${article.audioMinutes || 5} min)`}</span>
            </button>

            {/* Gift button */}
            <button
              onClick={handleGift}
              className="px-2.5 py-1.5 rounded text-[11px] font-medium border border-[#e2e4e6] hover:border-[#121212] text-[#444444] hover:text-[#121212] cursor-pointer transition-colors"
              title="Gift this article (4 remaining this month)"
            >
              {gifted ? '✓ Gift Link Ready' : 'Gift article'}
            </button>

            {/* Save button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded cursor-pointer transition-colors border ${
                isSaved
                  ? 'bg-[#ffc700] border-[#ffc700] text-black font-bold'
                  : 'border-[#e2e4e6] hover:border-[#121212] text-[#666666]'
              }`}
              title={isSaved ? 'Saved in My Selection' : 'Save to My Selection'}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded cursor-pointer transition-colors border border-[#e2e4e6] hover:border-[#121212] text-[#666666]"
              title="Copy link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
            </button>

            {/* Font size control */}
            <div className="flex items-center space-x-0.5 border border-[#e2e4e6] rounded px-1">
              <button
                onClick={() => setFontSize('normal')}
                className={`text-[10px] px-1 py-1 font-bold ${
                  fontSize === 'normal' ? 'text-[#121212]' : 'text-[#888888]'
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`text-[12px] px-1 py-1 font-bold ${
                  fontSize === 'large' ? 'text-[#121212]' : 'text-[#888888]'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`text-[14px] px-1 py-1 font-bold ${
                  fontSize === 'xl' ? 'text-[#121212]' : 'text-[#888888]'
                }`}
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Audio Player Drawer */}
        {isPlayingAudio && (
          <div className="mt-3 p-3 bg-[#1f242a] text-white rounded flex items-center justify-between text-xs font-sans">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Playing audio edition narrated by Le Monde Audio Desk</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setPlaybackSpeed((prev) =>
                    prev === '1x' ? '1.25x' : prev === '1.25x' ? '1.5x' : '1x'
                  )
                }
                className="bg-neutral-800 hover:bg-neutral-700 px-2 py-0.5 rounded text-[11px] font-mono cursor-pointer"
              >
                {playbackSpeed}
              </button>
              <button
                onClick={() => setIsPlayingAudio(false)}
                className="text-neutral-400 hover:text-white px-1.5 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Image */}
      {article.imageUrl && (
        <figure className="mb-8">
          <div className="overflow-hidden rounded-xs bg-neutral-100">
            <img
              src={article.imageUrl}
              alt={article.headline}
              referrerPolicy="no-referrer"
              className="w-full max-h-[520px] object-cover"
            />
          </div>
          {article.imageCaption && (
            <figcaption className="text-[12px] text-[#666666] mt-2 flex justify-between items-baseline">
              <span>{article.imageCaption}</span>
              {article.imageCredit && (
                <span className="text-[#888888] text-[11px] uppercase tracking-wider ml-2 shrink-0">
                  {article.imageCredit}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      )}

      {/* Article Body */}
      <article className={`text-[#222222] font-serif ${fontClasses[fontSize]} space-y-5`}>
        {/* Paragraphs */}
        {(isGated ? article.paragraphs.slice(0, 2) : article.paragraphs).map((para, idx) => (
          <p key={idx} className={idx === 0 ? 'editorial-drop-cap' : ''}>
            {para}
          </p>
        ))}

        {/* Pull Quote */}
        {article.pullQuote && !isGated && (
          <div className="my-8 py-6 px-6 bg-[#f8f9fa] border-l-4 border-[#ffc700] rounded-xs font-serif italic text-lg sm:text-xl text-[#121212] space-y-2">
            <p className="leading-relaxed">{article.pullQuote.text}</p>
            {article.pullQuote.attribution && (
              <p className="text-[12px] font-sans not-italic font-bold tracking-wider uppercase text-[#666666]">
                — {article.pullQuote.attribution}
              </p>
            )}
          </div>
        )}

        {/* Remaining paragraphs if not gated */}
        {!isGated &&
          article.paragraphs.slice(2).map((para, idx) => (
            <p key={`rem_${idx}`}>{para}</p>
          ))}
      </article>

      {/* Le Monde Subscriber Gate (if article is reserved for subscribers) */}
      {isGated && (
        <div className="mt-8 p-6 sm:p-8 bg-gradient-to-b from-[#fbfbfb] to-[#f4f5f7] border-2 border-[#ffc700] rounded-sm text-center space-y-4 shadow-sm">
          <div className="inline-flex items-center space-x-1.5 bg-[#ffc700] text-black font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <span>Reserved for Le Monde Subscribers</span>
          </div>

          <h3 className="text-2xl font-bold headline-serif text-[#121212]">
            You have 65% of this article left to read.
          </h3>

          <p className="max-w-xl mx-auto text-[14px] text-[#555555] leading-relaxed">
            Support Le Monde's independent editorial room of 530 journalists. Enjoy unlimited access to all articles in English and French, daily digital newspaper editions, and comprehensive archives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenSubscribe}
              className="bg-[#ffc700] hover:bg-[#eab308] text-[#121212] font-bold text-sm uppercase tracking-wider py-2.5 px-6 rounded transition-all shadow cursor-pointer"
            >
              Subscribe from €2.49/week
            </button>

            <button
              onClick={() => setUnlockedPreview(true)}
              className="border border-[#121212] hover:bg-[#121212] hover:text-white text-[#121212] font-semibold text-xs uppercase tracking-wider py-2.5 px-5 rounded transition-all cursor-pointer"
            >
              Unlock reader preview
            </button>
          </div>
        </div>
      )}

      {/* Reader Comments Section */}
      <section className="mt-12 pt-8 border-t border-[#e2e4e6]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold headline-serif text-[#121212]">
            Reader Contributions ({comments.length})
          </h3>
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-[12px] font-semibold text-[#184c78] hover:underline cursor-pointer"
          >
            {showComments ? 'Hide comments' : 'Join the discussion'}
          </button>
        </div>

        {showComments && (
          <div className="space-y-6">
            {/* New Comment Form */}
            <form onSubmit={handleAddComment} className="p-4 bg-[#f8f9fa] border border-[#e2e4e6] rounded space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                Add your contribution
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Marie D.)"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className="p-2 border border-[#d0d3d6] rounded text-xs bg-white text-[#121212]"
                />
                <input
                  type="text"
                  placeholder="Your City (e.g. Paris, France)"
                  value={newCommentLocation}
                  onChange={(e) => setNewCommentLocation(e.target.value)}
                  className="p-2 border border-[#d0d3d6] rounded text-xs bg-white text-[#121212]"
                />
              </div>
              <textarea
                placeholder="Share your perspective on this analysis..."
                rows={3}
                value={newCommentBody}
                onChange={(e) => setNewCommentBody(e.target.value)}
                className="w-full p-2 border border-[#d0d3d6] rounded text-xs bg-white text-[#121212]"
              />
              <button
                type="submit"
                className="bg-[#121212] hover:bg-[#333333] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 rounded cursor-pointer transition-colors"
              >
                Publish Comment
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="p-4 border border-[#e2e4e6] rounded bg-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-[#121212]">{c.author}</span>
                      <span className="text-[#888888]">({c.location})</span>
                      {c.isLeMondePick && (
                        <span className="bg-[#ffc700] text-black font-bold text-[9px] uppercase px-1.5 py-0.2 rounded">
                          Le Monde Pick
                        </span>
                      )}
                    </div>
                    <span className="text-[#999999] text-[11px]">{c.timestamp}</span>
                  </div>
                  <p className="text-[13px] text-[#333333] leading-relaxed font-sans">{c.content}</p>
                  <div className="flex items-center space-x-2 pt-1 text-xs text-[#666666]">
                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className={`hover:text-black cursor-pointer flex items-center space-x-1 ${
                        likedComments[c.id] ? 'text-red-600 font-bold' : ''
                      }`}
                    >
                      <span>♥</span>
                      <span>{c.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Related Stories / More from Le Monde */}
      <section className="mt-12 pt-8 border-t-2 border-[#121212]">
        <h3 className="text-xl font-bold uppercase tracking-wider headline-serif text-[#121212] mb-6">
          More from Le Monde
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((story) => (
            <article
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="cursor-pointer group space-y-2"
            >
              {story.imageUrl && (
                <div className="overflow-hidden bg-neutral-100 rounded-xs">
                  <img
                    src={story.imageUrl}
                    alt={story.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-36 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#184c78] block">
                {story.kicker || story.section}
              </span>
              <h4 className="text-[15px] font-bold headline-serif leading-snug text-[#121212] group-hover:text-[#184c78] transition-colors">
                {story.headline}
              </h4>
              <span className="text-[11px] text-[#888888] block">{story.readTime}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
