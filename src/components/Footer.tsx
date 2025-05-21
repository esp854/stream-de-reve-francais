
import React from 'react';
import { Play, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stream-black py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="relative mr-2">
            <div className="h-7 w-7 bg-stream-purple rounded-sm flex items-center justify-center">
              <Play size={16} className="text-white ml-0.5" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">StreamFlix</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-4">StreamFlix</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Corporate Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Plans & Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Device Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies Preferences</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Corporate Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-gray-400 text-sm mb-2">Download Our App</h4>
              <div className="flex space-x-2">
                <button className="bg-stream-gray/30 hover:bg-stream-gray/50 transition-colors px-3 py-2 rounded-md text-white text-xs">
                  App Store
                </button>
                <button className="bg-stream-gray/30 hover:bg-stream-gray/50 transition-colors px-3 py-2 rounded-md text-white text-xs">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2025 StreamFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
