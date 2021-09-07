import { pullMovies } from './api';

const getCount = () => {
  const movieCount = document.getElementById('movies').children.length;
  return movieCount;
};

const updateTitles = (count) => {
  const movieTitle = document.getElementById('movie-count');
  movieTitle.innerText = `Movies (${count})`;
};

const displayMovies = async () => {
  const movies = await pullMovies();
  const moviesList = document.getElementById('movies');

  moviesList.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    const image = movies[i].show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';
    moviesList.insertAdjacentHTML('beforeend', ` 
            <div class="movie-container">
                <div class="movie-content">
                <img src="${image}" />
                </div>
                <div>
                    <h6>${movies[i].show.name}</h6>
                </div>
        </div>`);
  }

  const movieCount = getCount();
  updateTitles(movieCount);
};

export default displayMovies;