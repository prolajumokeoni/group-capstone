const genre = [
  'action',
  'horror',
  'animation',
  'adventure',
  'family'
];
const randGenre = genre[Math.floor(Math.random() * genre.length)];
const linkBase = 'https://api.tvmaze.com/search/shows';
const searchURL = `https://api.tvmaze.com/search/shows?q=${randGenre}`;

let id;

const pullMovies = async () => {
  const response = await fetch(searchURL);
  const movies = await response.json();

  return movies;
};

const movieId = async () => {
  const response = await fetch(linkBase + id);
  const movies = await response.json();

  return movies;
};

exports.movieId = movieId;
exports.pullMovies = pullMovies;