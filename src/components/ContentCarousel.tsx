
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '@/data/movies';
import MovieCard from './MovieCard';

interface ContentCarouselProps {
  title: string;
  movies: Movie[];
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' 
        ? -current.clientWidth / 2 
        : current.clientWidth / 2;
      
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="my-8 px-4 md:px-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      
      <div className="relative group">
        <div 
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-4 pb-4 pt-1 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map(movie => (
            <div key={movie.id} className="flex-none w-[180px] md:w-[220px]">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-stream-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-stream-black focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-stream-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-stream-black focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>

        {/* Fade out at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-stream-dark to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-stream-dark to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ContentCarousel;
