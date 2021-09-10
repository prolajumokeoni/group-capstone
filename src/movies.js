import { pullMovies } from './api.js';
import { displayPopup, pullLikes, addLike } from './engagement.js';

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
          <div class="col-lg-4 col-md-6 col-sm-6 mb-5 shadow ">
            <div class="movie-container card rounded">
                <div class="movie-content">
                  <img class="img-top" src="${image}" height="300px" width= "100%" />
                </div>
                  <h6 class="move-c pl-3 pt-2">${movies[i].show.name}</h6>
                <div class="pt-3 px-3 d-flex separation">
                  <span like-id="${movies[i].show.id}" class="material-icons-outlined pl-3 btn pt-2 pr-2 like">thumb_up</span>
                  <p class="pt-2" >${numLikes}</p>
                  <button data-id="${movies[i].show.id}" class="material-icons-outlined btn btn-sm ml-2 mb-3">mode_comment</button>
                </div>
            </div>
            </div>`);
    const button = document.querySelectorAll(`[data-id="${movies[i].show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const movieId = e.target.getAttribute('data-id');
      displayPopup(movieId);
    });
    const likeButton = document.querySelectorAll(`[like-id="${movies[i].show.id}"]`)[0];
    likeButton.addEventListener('click', async (e) => {
      const movieId = e.target.getAttribute('like-id');
      const status = await addLike(Number(movieId));
      const newLikes = await pullLikes(movieId);
      const newLikeObject = newLikes.filter((like) => like.item_id === Number(movieId));
      const newNumLikes = newLikeObject[0].likes;
      const newLike = document.querySelectorAll(`[like-id="${movieId}"]`)[0];
      if (status === 'success') {
        newLike.innerText = `${newNumLikes} likes`;
      }
      window.location.reload();
    });
  }

  const movieCount = getCount();
  updateTitles(movieCount);
};

export default displayMovies;