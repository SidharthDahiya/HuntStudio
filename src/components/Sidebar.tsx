import React from 'react';
import { TrendingUp, Users, Crown, MessageSquare, Calendar, Award } from 'lucide-react';
import { mockUsers } from '../data/mockData';

const Sidebar: React.FC = () => {
  const leaderboardUsers = mockUsers.sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-6">
      {/* Live Analytics */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Live Analytics</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Active Hunters</span>
            <span className="text-lg font-bold text-blue-600">2,847</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Products Today</span>
            <span className="text-lg font-bold text-purple-600">127</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Votes</span>
            <span className="text-lg font-bold text-green-600">15.2K</span>
          </div>
          
          <div className="pt-2 border-t border-gray-200/50">
            <div className="text-xs text-gray-500 mb-2">Vote Activity</div>
            <div className="flex items-end space-x-1 h-8">
              {[8, 12, 6, 15, 9, 18, 14, 11, 20, 16, 13, 25].map((height, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-sm flex-1"
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Crown className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-bold text-gray-900">Top Hunters</h3>
        </div>
        
        <div className="space-y-4">
          {leaderboardUsers.map((user, index) => (
            <div key={user.id} className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === 0 ? 'bg-yellow-100 text-yellow-800' :
                index === 1 ? 'bg-gray-100 text-gray-700' :
                index === 2 ? 'bg-orange-100 text-orange-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {index + 1}
              </div>
              
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {user.name}
                  </span>
                  {user.isVerified && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-600">{user.points.toLocaleString()} pts</div>
              </div>
              
              {user.badges.length > 0 && (
                <div className="flex items-center space-x-1">
                  <Award className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{user.badges.length}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
          View Full Leaderboard
        </button>
      </div>

      {/* Trending Categories */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Trending</h3>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'AI & Machine Learning', count: 42, growth: '+15%' },
            { name: 'Design Tools', count: 28, growth: '+8%' },
            { name: 'Developer Tools', count: 23, growth: '+12%' },
            { name: 'Productivity', count: 19, growth: '+5%' }
          ].map((category, index) => (
            <div key={category.name} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-600">{category.count} products</div>
              </div>
              <div className="text-xs text-green-600 font-semibold">{category.growth}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Chat Preview */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">Community</h3>
        </div>
        
        <div className="space-y-3">
          {[
            { user: 'Sarah Chen', message: 'Amazing launch! The AI features are incredible 🚀', time: '2m' },
            { user: 'Marcus J', message: 'Has anyone tried the new design tool?', time: '5m' },
            { user: 'Elena R', message: 'Congrats on the successful launch! 🎉', time: '8m' }
          ].map((chat, index) => (
            <div key={index} className="text-sm">
              <div className="font-medium text-gray-900">{chat.user}</div>
              <div className="text-gray-600 text-xs mt-1">{chat.message}</div>
              <div className="text-gray-400 text-xs mt-1">{chat.time} ago</div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-2 text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors">
          Join Discussion
        </button>
      </div>

      {/* Upcoming Launches */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-orange-600" />
          <h3 className="text-lg font-bold text-gray-900">Coming Soon</h3>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'VoiceFlow AI', date: 'Tomorrow', category: 'AI Tools' },
            { name: 'DesignSync', date: 'Jan 16', category: 'Design' },
            { name: 'CodeBreaker', date: 'Jan 18', category: 'Developer Tools' }
          ].map((launch, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">{launch.name}</div>
                <div className="text-xs text-gray-600">{launch.category}</div>
              </div>
              <div className="text-xs text-orange-600 font-semibold">{launch.date}</div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-2 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
          Get Notified
        </button>
      </div>
    </div>
  );
};

export default Sidebar;