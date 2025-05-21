
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Play, Bell, User } from 'lucide-react';
import { categories } from '@/data/movies';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stream-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-stream-black to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="h-7 w-7 bg-stream-purple rounded-sm flex items-center justify-center">
                <Play size={16} className="text-white ml-0.5" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">StreamFlix</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mx-8">
            <a href="#" className="text-white font-medium hover:text-stream-purple transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Movies
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              New & Popular
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              My List
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white hidden md:block">
              <Bell size={20} />
            </button>
            <div className="hidden md:block">
              <div className="h-8 w-8 rounded-full bg-stream-purple flex items-center justify-center">
                <User size={16} />
              </div>
            </div>
            <button 
              className="text-gray-300 hover:text-white md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-stream-black z-50 md:hidden">
          <div className="flex justify-end p-4">
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-6">
            <a href="#" className="text-white text-xl font-medium">Home</a>
            <a href="#" className="text-gray-400 text-xl hover:text-white">Movies</a>
            <a href="#" className="text-gray-400 text-xl hover:text-white">TV Shows</a>
            <a href="#" className="text-gray-400 text-xl hover:text-white">New & Popular</a>
            <a href="#" className="text-gray-400 text-xl hover:text-white">My List</a>
            <div className="mt-6 pt-6 border-t border-gray-800 w-1/2 flex justify-center">
              <div className="h-10 w-10 rounded-full bg-stream-purple flex items-center justify-center">
                <User size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
