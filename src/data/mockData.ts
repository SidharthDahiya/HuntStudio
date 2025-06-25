import { Product, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    username: 'sarahchen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'AI/ML Engineer building the future',
    badges: ['Top Maker', 'AI Expert'],
    points: 2840,
    rank: 3,
    isVerified: true,
    matchScore: 95
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    username: 'marcusj',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Product designer & startup founder',
    badges: ['Design Pro', 'Founder'],
    points: 1920,
    rank: 7,
    isVerified: true,
    matchScore: 88
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    username: 'elena_r',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Growth hacker & marketing strategist',
    badges: ['Growth Expert'],
    points: 1650,
    rank: 12,
    isVerified: false,
    matchScore: 92
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'NeuralCanvas',
    tagline: 'AI-powered design tool that thinks like you',
    description: 'Revolutionary design platform that uses advanced AI to understand your creative vision and help bring it to life with unprecedented speed and precision.',
    logo: '/images/tool.png',
    gallery: [
      '/images/tool.png',
      '/images/tool.png'
    ],
    votes: 847,
    comments: 123,
    category: 'Design Tools',
    tags: ['AI', 'Design', 'Productivity'],
    maker: mockUsers[0],
    launchDate: '2025-06-15',
    featured: true,
    trending: true,
    website: 'https://neuralcanvas.co',
    isLaunching: true,
    launchTime: '2025-01-15T14:00:00Z'
  },
  {
    id: '2',
    name: 'CodeMind',
    tagline: 'The developer\'s AI pair programming companion',
    description: 'Advanced AI coding assistant that understands context, suggests optimizations, and helps debug complex issues across multiple programming languages.',
    logo: '/images/codemind.png',
    gallery: [
      '/images/codemind.png',
      '/images/codemind.png'
    ],
    votes: 623,
    comments: 89,
    category: 'Developer Tools',
    tags: ['AI', 'Development', 'Programming'],
    maker: mockUsers[1],
    launchDate: '2025-06-14',
    featured: false,
    trending: true,
    website: 'https://codemind.dev'
  },
  {
    id: '3',
    name: 'FlowState',
    tagline: 'Biometric-powered focus enhancement system',
    description: 'Wearable device and app that monitors your biometrics to optimize focus periods, break timing, and overall productivity using real-time feedback.',
    logo: '/images/flowstate_logo.png',
    gallery: [
      '/images/flowstate_logo.png',
      '/images/flowstate_logo.png'
    ],
    votes: 419,
    comments: 67,
    category: 'Health & Fitness',
    tags: ['Biometrics', 'Productivity', 'Wearable'],
    maker: mockUsers[2],
    launchDate: '2025-06-13',
    featured: false,
    trending: false,
    website: 'https://flowstate.io'
  },
  {
    id: '4',
    name: 'EcoTrack',
    tagline: 'Personal carbon footprint optimizer',
    description: 'Smart sustainability platform that tracks your environmental impact and provides personalized recommendations to reduce your carbon footprint.',
    logo: '/images/jungle.png',
    gallery: [
      '/images/jungle.png',
      '/images/earth.png'
    ],
    votes: 312,
    comments: 45,
    category: 'Environment',
    tags: ['Sustainability', 'Environment', 'Tracking'],
    maker: mockUsers[0],
    launchDate: '2025-06-12',
    featured: false,
    trending: false,
    website: 'https://ecotrack.green'
  }
];

export const categories = [
  'All Categories',
  'AI & Machine Learning',
  'Design Tools',
  'Developer Tools',
  'Productivity',
  'Health & Fitness',
  'Environment',
  'SaaS',
  'Mobile Apps',
  'Web Apps'
];

export const trendingTags = [
  'AI', 'Productivity', 'Design', 'Development', 'SaaS', 'Mobile',
  'Analytics', 'Automation', 'Collaboration', 'Security'
];