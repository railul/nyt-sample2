export type Edition = 'IN ENGLISH' | 'EN FRANÇAIS';

export type Category =
  | 'All'
  | 'International'
  | 'Europe'
  | 'France'
  | 'Economy'
  | 'Environment'
  | 'Culture'
  | 'Opinion'
  | 'Sport'
  | 'Science'
  | 'Style'
  | 'The Big Read';

export interface Comment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  likes: number;
  isLeMondePick?: boolean;
}

export interface Article {
  id: string;
  kicker?: string;
  headline: string;
  summary: string;
  byline: string;
  readTime: string;
  date: string;
  section: Category;
  subsection?: string;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  authorTitle?: string;
  authorAvatar?: string;
  paragraphs: string[];
  pullQuote?: {
    text: string;
    attribution?: string;
  };
  comments?: Comment[];
  audioMinutes?: number;
  isSubscriberOnly?: boolean;
  isLive?: boolean;
  timeAgo?: string;
}
