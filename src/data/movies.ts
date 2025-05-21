
export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backgroundUrl: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Cosmic Odyssey",
    description: "Follow a team of astronauts as they embark on a perilous journey through a mysterious wormhole in search of a new habitable planet for humanity.",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaWZpfGVufDB8fDB8fHww",
    backgroundUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2023,
    rating: 4.7,
    duration: "2h 35m",
    genre: ["Science Fiction", "Adventure", "Drama"],
    featured: true
  },
  {
    id: 2,
    title: "Shadow Realm",
    description: "In a world where shadows come to life at night, a young woman discovers she has the power to control darkness and must fight to save her city from eternal night.",
    posterUrl: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    rating: 4.5,
    duration: "2h 10m",
    genre: ["Fantasy", "Action", "Thriller"]
  },
  {
    id: 3,
    title: "Yesterday's Promise",
    description: "A heartfelt story about two childhood friends whose paths diverge and reconnect over decades, exploring how their choices shaped their lives.",
    posterUrl: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9tYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2021,
    rating: 4.3,
    duration: "1h 58m",
    genre: ["Romance", "Drama"]
  },
  {
    id: 4,
    title: "Urban Legends",
    description: "A detective with a troubled past must solve a series of murders that seem to be inspired by urban legends, leading him into a world of folklore and superstition.",
    posterUrl: "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG15c3Rlcnl8ZW58MHx8MHx8fDA%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    rating: 4.6,
    duration: "2h 15m",
    genre: ["Mystery", "Crime", "Thriller"]
  },
  {
    id: 5,
    title: "The Last Champion",
    description: "After a career-ending injury, a former champion wrestler returns to his hometown and gets a second chance at redemption by coaching the high school wrestling team.",
    posterUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzfGVufDB8fDB8fHww",
    backgroundUrl: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2020,
    rating: 4.2,
    duration: "2h 5m",
    genre: ["Sports", "Drama", "Inspiration"]
  },
  {
    id: 6,
    title: "Midnight Laughter",
    description: "A stand-up comedian's life takes a dark turn when his jokes start becoming reality, blurring the line between comedy and horror.",
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9ycm9yfGVufDB8fDB8fHww",
    backgroundUrl: "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=2378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2021,
    rating: 4.0,
    duration: "1h 52m",
    genre: ["Horror", "Comedy", "Thriller"]
  },
  {
    id: 7,
    title: "Chronicles of Tomorrow",
    description: "In a distant future, a historian travels back in time to document the present day, but accidentally changes the course of history and must fix the timeline.",
    posterUrl: "https://images.unsplash.com/photo-1501769752-a59efa2298ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGltZXxlbnwwfHwwfHx8MA%3D%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2023,
    rating: 4.8,
    duration: "2h 28m",
    genre: ["Science Fiction", "Adventure", "Drama"],
    featured: true
  },
  {
    id: 8,
    title: "Ocean's Secret",
    description: "A marine biologist discovers an underwater civilization while researching deep-sea anomalies, changing our understanding of human evolution.",
    posterUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFufGVufDB8fDB8fHww",
    backgroundUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    rating: 4.4,
    duration: "2h 12m",
    genre: ["Adventure", "Mystery", "Science Fiction"]
  },
  {
    id: 9,
    title: "Pixels and Dreams",
    description: "A documentary following indie game developers as they navigate the challenges of creating innovative games while battling industry giants.",
    posterUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2021,
    rating: 4.1,
    duration: "1h 45m",
    genre: ["Documentary", "Technology"]
  },
  {
    id: 10,
    title: "Culinary Journey",
    description: "A celebrated chef loses his sense of taste and embarks on a global journey to rediscover his passion for food through different cultures and traditions.",
    posterUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2020,
    rating: 4.3,
    duration: "2h 5m",
    genre: ["Drama", "Food", "Travel"]
  },
  {
    id: 11,
    title: "Echoes of the Past",
    description: "An archaeologist uncovers an ancient artifact that allows him to communicate with historical figures, leading to revelations that challenge modern understanding of history.",
    posterUrl: "https://images.unsplash.com/photo-1579609598065-79f8e4bc060d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpc3RvcnklMjBhcnRpZmFjdHxlbnwwfHwwfHx8MA%3D%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1598397123042-9d761ebf23d1?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2023,
    rating: 4.6,
    duration: "2h 20m",
    genre: ["Historical", "Drama", "Fantasy"]
  },
  {
    id: 12,
    title: "Rhythm of Life",
    description: "A gifted musician loses her hearing and must find new ways to create music, inspiring a revolutionary approach to experiencing sound.",
    posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    backgroundUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    rating: 4.9,
    duration: "2h 8m",
    genre: ["Music", "Drama", "Inspiration"],
    featured: true
  }
];

export const categories = [
  { id: 1, name: "Trending Now" },
  { id: 2, name: "New Releases" },
  { id: 3, name: "Science Fiction" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Action" },
  { id: 6, name: "Comedy" },
  { id: 7, name: "Horror" },
];

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genre.includes(genre));
};

export const getFeaturedMovies = (): Movie[] => {
  return movies.filter(movie => movie.featured);
};

export const getTrendingMovies = (): Movie[] => {
  return movies.slice(0, 6);
};

export const getNewReleases = (): Movie[] => {
  return movies.filter(movie => movie.year >= 2023);
};
