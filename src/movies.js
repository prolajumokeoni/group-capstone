import { pullMovies } from './api';
import { displayPopup, pullLikes, addLike } from './engagement';

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
  const likes = await pullLikes();
  const moviesList = document.getElementById('movies');

  moviesList.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    const likeObject = likes.filter((like) => like.item_id === movies[i].show.id);

    let numLikes = '';
    if (likeObject.length > 0) {
      numLikes = `${likeObject[0].likes} likes`;
    }

    const image = movies[i].show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';
    moviesList.insertAdjacentHTML('beforeend', ` 
            <div class="movie-container">
                <div class="movie-content">
                <img src="${image}" />
                </div>
                <div>
                  <h6>${movies[i].show.name}</h6>
                  <p>${numLikes}</p>
                </div>
                <button data-id="${movies[i].show.id}" class="material-icons-outlined">mode_comment</button>
                <span like-id="${movies[i].show.id}" class="material-icons-outlined">thumb_up</span>
        </div>`);
    const button = document.querySelectorAll(`[data-id="${movies[i].show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const movieId = e.target.getAttribute('data-id');
      displayPopup(movieId);
    });
    const likeButton = document.querySelectorAll(`[like-id="${movies[i].show.id}"]`)[0];
    likeButton.addEventListener('click', async (e) => {
      const movieId = e.target.parentElement.parentElement.getAttribute('like-id');
      const status = await addLike(Number(movieId));
      const newLikes = await pullLikes(movieId);
      const likesObject = newLikes.filter((like) => like.item_id === movies[i].show.id);
      const likeCount = `${likesObject[0].likes} likes`;
      if (status === 201) {
        const likeDisplay = likeButton.previousElementSibling.previousElementSibling.children[1];
        likeDisplay.innerText = likeCount;
      }
    });

    const movieCount = getCount();
    updateTitles(movieCount);
  };
};
export default displayMovies;