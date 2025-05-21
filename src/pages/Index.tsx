
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentCarousel from '@/components/ContentCarousel';
import Footer from '@/components/Footer';
import { 
  movies, 
  getFeaturedMovies, 
  getTrendingMovies, 
  getNewReleases,
  getMoviesByGenre 
} from '@/data/movies';

const Index = () => {
  // Get the first featured movie for the hero section
  const featuredMovie = getFeaturedMovies()[0] || movies[0];
  
  return (
    <div className="min-h-screen bg-stream-dark text-white">
      <Navbar />
      
      <main>
        <HeroSection movie={featuredMovie} />
        
        <div className="py-4">
          <ContentCarousel title="Trending Now" movies={getTrendingMovies()} />
          <ContentCarousel title="New Releases" movies={getNewReleases()} />
          <ContentCarousel title="Science Fiction" movies={getMoviesByGenre("Science Fiction")} />
          <ContentCarousel title="Drama" movies={getMoviesByGenre("Drama")} />
          <ContentCarousel title="Action" movies={getMoviesByGenre("Action")} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
