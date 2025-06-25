import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, SortAsc } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { categories, trendingTags } from '../data/mockData';

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'votes' | 'comments' | 'recent' | 'trending'>('votes');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [votedProducts, setVotedProducts] = useState<Set<string>>(new Set());

  const handleVote = (productId: string) => {
    setVotedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'All Categories' ||
        product.category === selectedCategory;

      // Tags filter
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => product.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'votes':
          return b.votes - a.votes;
        case 'comments':
          return b.comments - a.comments;
        case 'recent':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'trending':
          return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filters Header */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="votes">Most Voted</option>
              <option value="comments">Most Discussed</option>
              <option value="recent">Most Recent</option>
              <option value="trending">Trending</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-end space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Popular Tags</label>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </span>
          {(searchQuery || selectedCategory !== 'All Categories' || selectedTags.length > 0) && (
            <button
              onClick={() => {
                setSelectedCategory('All Categories');
                setSelectedTags([]);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-8 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredAndSortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onVote={handleVote}
            isVoted={votedProducts.has(product.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search query to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Categories');
              setSelectedTags([]);
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;