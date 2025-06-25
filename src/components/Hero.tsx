import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 12 });

  const recommendations = [
    'AI-powered design tools',
    'Developer productivity apps',
    'Sustainability platforms',
    'Health & wellness tech'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 text-blue-700">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Discovery</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover the
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future of Tech
                </span>
                Today
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Hunt Studio uses advanced AI to curate personalized product discoveries, 
                connecting you with innovations that match your interests and needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-500 font-medium">Trending Recommendations</div>
              <div className="h-8 flex items-center">
                <div className="flex items-center space-x-2 text-lg text-gray-800">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="animate-fade-in-up">
                    {recommendations[currentRecommendation]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Start Discovering</span>
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold border border-gray-200/50 hover:bg-white hover:shadow-md transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Live Launch Card */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">LIVE LAUNCH</span>
                </div>
                <Clock className="w-5 h-5 text-gray-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">NeuralCanvas</h3>
              <p className="text-gray-600 mb-4">AI-powered design tool that thinks like you</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">Seconds</div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Vote Now • 847 votes
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/80 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">24.7K</div>
                    <div className="text-sm text-gray-600">Active Hunters</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/40 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100/80 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">1,247</div>
                    <div className="text-sm text-gray-600">Products Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;