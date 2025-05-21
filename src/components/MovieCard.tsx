
import React from 'react';
import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { Movie } from '@/data/movies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative w-full min-w-[180px] md:min-w-[220px] h-[300px] rounded-md overflow-hidden card-hover">
      <img 
        src={movie.posterUrl} 
        alt={movie.title} 
        className="w-full h-full object-cover" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-medium text-lg">{movie.title}</h3>
          <div className="flex items-center text-xs text-gray-300 mt-1 space-x-2">
            <span className="text-green-400">{movie.rating}/5</span>
            <span>•</span>
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>
          
          <div className="flex items-center mt-3 space-x-2">
            <button className="bg-white text-black rounded-full p-2 hover:bg-stream-purple hover:text-white transition-colors">
              <Play size={16} />
            </button>
            <button className="bg-stream-gray/80 text-white rounded-full p-2 hover:bg-stream-gray transition-colors">
              <Plus size={16} />
            </button>
            <button className="bg-stream-gray/80 text-white rounded-full p-2 hover:bg-stream-gray transition-colors">
              <ThumbsUp size={16} />
            </button>
            <button className="bg-stream-gray/80 text-white rounded-full p-2 hover:bg-stream-gray transition-colors">
              <Info size={16} />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-3">
            {movie.genre.slice(0, 2).map((genre, index) => (
              <span key={index} className="text-xs bg-stream-gray/70 px-2 py-1 rounded text-gray-200">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
