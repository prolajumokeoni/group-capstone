/**
 * @jest-environment jsdom
*/

describe('Test Comments adding Functionality', () => {
    document.body.innerHTML = `
      <div class="popup-container">
        <div class="inner-content">
          <div class="photo-close d-flex">
            <img src="image" />
            <span type="button" class="material-icons-outlined close-popup">close</span>
          </div>
          <h1>movie name</h1>
          <div class="movie-description">
            <p>Type: Movie type</p>
            <p>Language: Movie language</p>
          </div>
          <div class="movie-description">
            <p>Status: Movie status</p>
            <p>Premiered: Movie premiered</p>
          </div>
          <div class="comments-display">
            <h3>Comments</h3>
          </div>
          <div class="comment-create">
            <h3>Add a comment</h3>
            <input name="username" placeholder="Your name" />
            <textarea name="insights" class="form-control" rows="3" placeholder="Your comments"></textarea>
            <span class="center-it" type="button" comment-id="42069"><i class="material-icons-outlined">comment</i>Comment</span>
          </div>
        </div>
      </div>
    `;

    const calcComments = (commentId) => {
        const commentContent = document.querySelectorAll(`[comment-id="${commentId}"]`)[0]
            .parentElement.previousElementSibling.children;

        const commentCount = [...commentContent].filter((elem) => elem.nodeName === 'P').length;

        return commentCount;
    };

    const updateTitle = (id) => {
        const commentCount = calcComments(id);

        const commentContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
            .parentElement.previousElementSibling.children;

        if (commentContent.length > 0) {
            const commentTitle = [...commentContent].filter((elem) => elem.nodeName === 'H3')[0];

            commentTitle.innerText = `Comments (${commentCount})`;
        }
    };

    const addComment = () => {
        const commentsDisplay = document.getElementsByClassName('comments-display')[0];
        commentsDisplay.insertAdjacentHTML('beforeend', `
        <p>09/09/2021 Test User: This is a test comment!</p>
      `);
    };

    test('Verify that no comments exist on start.', () => {
        expect(calcComments(42069)).toBe(0);
    });

    test('Veify that a single comment has been added.', () => {
        addComment();
        updateTitle(42069);
        expect(calcComments(42069)).toBe(1);
    });
});