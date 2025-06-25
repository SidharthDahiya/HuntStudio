import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Play, Users, Award, Clock } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onVote: (productId: string) => void;
  isVoted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onVote, isVoted = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVote(product.id);
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffHours < 1) return 'Just launched';
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  return (
    <div
      className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
        product.featured ? 'ring-2 ring-blue-500/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
          <Award className="w-3 h-3 inline mr-1" />
          Featured
        </div>
      )}

      {/* Launch Badge */}
      {product.isLaunching && (
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 px-3 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span>LIVE</span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.gallery[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Play Button Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-gray-800 ml-1" />
            </button>
          </div>
        )}

        {/* Trending Indicator */}
        {product.trending && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-2 py-1 bg-orange-500/90 text-white text-xs font-medium rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <span>Trending</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              className="w-12 h-12 rounded-xl border-2 border-white shadow-md"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.tagline}</p>
            </div>
          </div>

          <button
            onClick={handleVote}
            className={`flex flex-col items-center px-3 py-2 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              isVoted 
                ? 'bg-red-50 border-red-200 text-red-600' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isVoted ? 'fill-current' : ''}`} />
            <span className="text-sm font-semibold mt-1">{product.votes}</span>
          </button>
        </div>

        {/* Description */}
        <p className={`text-gray-600 leading-relaxed mb-4 transition-all duration-300 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-2'
        }`}>
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-50/80 text-blue-700 text-xs font-medium rounded-full border border-blue-200/50"
            >
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-50/80 text-gray-600 text-xs font-medium rounded-full border border-gray-200/50">
              +{product.tags.length - 3}
            </span>
          )}
        </div>

        {/* Maker Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50/50 rounded-xl">
          <div className="flex items-center space-x-3">
            <img
              src={product.maker.avatar}
              alt={product.maker.name}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">{product.maker.name}</div>
              <div className="text-xs text-gray-600">@{product.maker.username}</div>
            </div>
            {product.maker.isVerified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          {product.maker.matchScore && (
            <div className="text-xs text-blue-600 font-semibold">
              {product.maker.matchScore}% match
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{product.comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(product.launchDate)}</span>
            </div>
          </div>

          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>Visit</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200/50">
          <div className="pt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {product.gallery.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} screenshot ${index + 2}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
              <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;