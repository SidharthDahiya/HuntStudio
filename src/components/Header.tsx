import React, { useState } from 'react';
import { Search, Bell, User, Menu, Sparkles, TrendingUp } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hunt Studio
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                placeholder="Discover amazing products..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/80"
              />
              {isFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-xl border border-gray-200/50 shadow-xl p-4">
                  <div className="text-sm text-gray-600 mb-2">Trending Searches</div>
                  <div className="flex flex-wrap gap-2">
                    {['AI tools', 'Design apps', 'Productivity'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => onSearch(tag)}
                        className="px-3 py-1 bg-gray-100/80 hover:bg-blue-100/80 rounded-full text-sm text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Launch</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Leaderboard</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Stories</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <User className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Launch</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Leaderboard</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Stories</a>
            <div className="border-t border-gray-200/50 pt-3">
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;