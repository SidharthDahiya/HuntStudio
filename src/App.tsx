import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { mockProducts } from './data/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      {/* Header */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <ProductGrid products={mockProducts} searchQuery={searchQuery} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>


      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;