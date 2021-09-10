import { pullId } from './api.js';

const apiHead = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const apiApp = 'IWf3COm5aU7E5iifRsF3';
const commentsURL = `${apiHead}/${apiApp}/comments`;
const likeURL = `${apiHead}/${apiApp}/likes`;

const createComment = async (obj) => {
  const commentBody = {
    item_id: obj.item_id,
    username: obj.username,
    comment: obj.comment,
  };

  const response = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });

  return response.status;
};

const getComments = async (id) => {
  try {
    const response = await fetch(`${commentsURL}?item_id=${id}`);
    const comments = await response.json();

    return comments;
  } catch (error) {
    return [];
  }
};

const getCommentsNumber = (commentId) => {
  const commentsContent = document.querySelectorAll(
    `[comment-id="${commentId}"]`,
  )[0].parentElement.previousElementSibling.children;

  const commentsCount = [...commentsContent].filter(
    (elem) => elem.nodeName === 'P',
  ).length;

  return commentsCount;
};

const updateCommentTitle = (id) => {
  const numberOfComments = getCommentsNumber(id);

  const commentsContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
    .parentElement.previousElementSibling.children;

  if (commentsContent.length > 0) {
    const commentTitle = [...commentsContent].filter(
      (elem) => elem.nodeName === 'H3',
    )[0];

    commentTitle.innerText = `Comments (${numberOfComments})`;
  }
};

const genPopupContent = async (movie) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  popup.innerHTML = '';
  const image = movie.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';

  const movieId = movie.id;
  const comments = await getComments(movieId);

  let commentBlock = '';

  popup.insertAdjacentHTML(
    'beforeend',
    ` 
      <div class="popup-container">
        <div class="inner-content">
          <div class="photo-close d-flex">
            <img src="${image}" />
            <span type="button" class="material-icons-outlined close-popup">close</span>
          </div>
          <h1>${movie.name}</h1>
          <div class="d-flex">
          <div class="">
            <p>Type: ${movie.type}</p>
            <p>Language: ${movie.language}</p>
          </div>
          <div class="pl-2">
            <p>Status: ${movie.status}</p>
            <p>Premiered: ${movie.premiered}</p>
          </div>
          </div>
          <div class="comments-display">
            ${commentBlock}
          </div>
          <div class="comment-create">
            <h3>Add a comment</h3>
            <div id="errorMsg" class="errmsg"></div>
            <input name="username" class="form-control" placeholder="Your username"/>
            <textarea name="insights" class="form-control" rows="3" placeholder="Your comments"></textarea>
            <span class="center-it" type="button" comment-id="${movie.id}"><i class="material-icons-outlined">mode_comment</i>Comment</span>
            </div>
        </div>
      </div>`,
  );
  document.querySelector('main').appendChild(popup);
  const closeButton = document.getElementsByClassName('close-popup')[0];
  closeButton.addEventListener('click', () => {
    document.querySelector('.popup').remove();
  });

  const commentsDisplay = document.querySelectorAll(
    `[comment-id="${movie.id}"]`,
  )[0].parentElement.previousElementSibling;

  if (comments.length > 0) {
    commentBlock += '<h3>Comments</h3>';
    comments.forEach((comment) => {
      const date = comment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
    });
  }
  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);

  updateCommentTitle(movie.id);

  const commentButton = document.querySelectorAll(
    `[comment-id="${movie.id}"]`,
  )[0];
  commentButton.addEventListener('click', async (e) => {
    const commentObject = {
      item_id: Number(e.target.getAttribute('comment-id')),
      username:
        commentButton.previousElementSibling.previousElementSibling.value,
      comment: commentButton.previousElementSibling.value,
    };

    if (commentObject.username && commentObject.comment) {
      const result = await createComment(commentObject);
      e.target.parentElement.children[1].innerHTML = ' ';
      if (result === 201) {
        const comments = await getComments(movieId);
        const lastComment = comments[comments.length - 1];
        const commentsDisplay = document.querySelectorAll(
          `[comment-id="${movie.id}"]`,
        )[0].parentElement.previousElementSibling;
        const date = lastComment.creation_date.split('-');
        const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;

        if (comments.length === 1) {
          commentsDisplay.insertAdjacentHTML(
            'beforeend',
            `
            <h3>Comments</h3>
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `,
          );
        } else {
          commentsDisplay.insertAdjacentHTML(
            'beforeend',
            `
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `,
          );
        }
        updateCommentTitle(movie.id);
      }
    } else {
      e.target.parentElement.children[1].innerHTML = 'Username and comment required';
    }
  });
};

const displayPopup = async (id) => {
  const movie = await pullId(id);
  genPopupContent(movie);
};

const addLike = async (id) => {
  const likeBody = {
    item_id: id,
  };

  const response = await fetch(`${likeURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeBody),
  });

  return response.status;
};

const pullLikes = async () => {
  try {
    const response = await fetch(`${likeURL}`);
    const likes = await response.json();

    return likes;
  } catch (error) {
    return [];
  }
};

export { displayPopup, addLike, pullLikes };
