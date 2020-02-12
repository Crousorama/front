import {NewsImg} from './news-img';

export interface News {
  canonicalUrl?: string;
  cover: {
    caption?: string;
    size?: {
      '1280x960'?: NewsImg;
      '800x'?: NewsImg;
      '800x600'?: NewsImg;
      original?: NewsImg;
    };
  };
  publishDate?: string;
  publishDateStr?: string;
  title?: string;
  summary?: string;
}
