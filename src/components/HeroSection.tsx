
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Movie } from '@/data/movies';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    <div className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stream-dark via-stream-dark/60 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stream-dark/90 via-stream-dark/30 to-transparent z-10"></div>
      
      {/* Background image */}
      <img 
        src={movie.backgroundUrl} 
        alt={movie.title} 
        className="absolute inset-0 w-full h-full object-cover object-center" 
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-end pb-16 md:pb-24 px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
            {movie.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-300 mb-4 space-x-3">
            <span className="text-green-400 font-medium">{movie.rating}/5 Rating</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{movie.year}</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{movie.duration}</span>
          </div>
          
          <p className="text-gray-200 text-base md:text-lg mb-6 max-w-2xl">
            {movie.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-stream-purple hover:bg-stream-light-purple text-white font-medium rounded-md">
              <Play className="mr-2 h-5 w-5" /> Play Now
            </Button>
            <Button variant="outline" size="lg" className="bg-stream-gray/30 text-white border-gray-500 hover:bg-stream-gray/50 hover:text-white font-medium rounded-md">
              <Info className="mr-2 h-5 w-5" /> More Info
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {movie.genre.map((genre, index) => (
              <span key={index} className="text-sm bg-stream-gray/50 px-3 py-1 rounded-full text-gray-200">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
