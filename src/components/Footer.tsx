import React from 'react';
import { Sparkles, Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hunt Studio
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover the future of technology through AI-powered product curation and community-driven insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Product</h3>
            <ul className="space-y-3">
              {['Features', 'API', 'Pricing', 'Changelog', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Community</h3>
            <ul className="space-y-3">
              {['Makers', 'Leaderboard', 'Stories', 'Newsletter', 'Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for makers worldwide</span>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2025 Hunt Studio. All rights reserved.
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;