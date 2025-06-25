export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  gallery: string[];
  votes: number;
  comments: number;
  category: string;
  tags: string[];
  maker: User;
  launchDate: string;
  featured: boolean;
  trending: boolean;
  website: string;
  isLaunching?: boolean;
  launchTime?: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  badges: string[];
  points: number;
  rank: number;
  isVerified: boolean;
  matchScore?: number;
}

export interface Vote {
  id: string;
  userId: string;
  productId: string;
  timestamp: string;
}

export interface SearchFilters {
  category: string;
  tags: string[];
  dateRange: string;
  sortBy: 'votes' | 'comments' | 'recent' | 'trending';
}