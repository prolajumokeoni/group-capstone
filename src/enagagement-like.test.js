/**
 * @jest-environment jsdom
*/

describe('Test Adding Likes', () => {
  document.body.innerHTML = ` 
      <div class="movie-container">
        <div class="movie-content">
          <img src="image" />
        </div>
        <div>
          <h2>image name</h2>
          <p>0</p>
        </div>
        <button data-id="test" class="btn-comments">Comments</button>
        <button like-id="42069" class="btn-likes"><i class="fas fa-heart"></i></button>
      </div>`;

  const pullLikes = (likeId) => {
    const countLikes = document.querySelectorAll(`[like-id="${likeId}"]`)[0]
      .previousElementSibling.previousElementSibling.children[1];
    return Number(countLikes.innerHTML);
  };

  const addLikes = (likeId) => {
    const showLikes = document.querySelectorAll(`[like-id="${likeId}"]`)[0]
      .previousElementSibling.previousElementSibling.children[1];

    let currentCount = Number(showLikes.innerHTML);
    currentCount += 1;
    showLikes.innerHTML = currentCount;
  };

  test('expect return number of likes to equal 0', () => {
    expect(pullLikes(42069)).toBe(0);
  });

  test('expect return number of likes to equal 0', () => {
    addLikes(42069);
    expect(pullLikes(42069)).toBe(1);
  });
});
