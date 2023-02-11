import { addComments, getComments } from './modules/commentsApi.js';
import displayComments from './modules/displayComments.js';

const commentsPopup = (movieDetails) => {
  const popupWindow = document.querySelector('.comments-popup');
  const window = document.createElement('div');
  window.classList.add('popup-window');
  window.innerHTML = `
        <div class="popup-image">
            <img src=${movieDetails.show.image.medium} alt="" class="movie-pop-image">
            <span><i class="fa-solid fa-xmark remove-btn"></i></span>
        </div>

        <div class="popup-details">
            <p class="movie-id">${movieDetails.show.id}</p>
            <h1 class="popup-title">${movieDetails.show.name}</h1>
            <ul class="popup-list">
                <li>Genres: ${movieDetails.show.genres}</li>
                <li>Runtime: ${movieDetails.show.runtime} mins</li>
                <li>Rating: ${movieDetails.show.rating.average}</li>
                <li>Language: ${movieDetails.show.language}</li>
            </ul>
        </div>

        <div class="comments-section">
            <div class="all-comments">
                <h3 class="comments-header">Comments (2)</h3>
                <div class="comment-text">
                   
                </div>
            </div>
            <div class="add-comment">
                <h3>Add a comment</h3>
                <form action="" class="comment-form">
                    <input type="text" placeholder="Your name" class="name-input" required>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your insights" class="comment-input" required></textarea>
                    <button type="button" class="comment-button">Comment</button>
                </form>
            </div>
        </div>
    `;

  popupWindow.appendChild(window);

  const removeButton = document.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => {
    popupWindow.classList.remove('comments-popup-toggle');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });

  const userNames = document.querySelectorAll('.name-input');
  const userName = userNames[userNames.length - 1];

  const commentTexts = document.querySelectorAll('.comment-input');
  const commentText = commentTexts[commentTexts.length - 1];

  const submitComments = document.querySelectorAll('.comment-button');
  const submitComment = submitComments[submitComments.length - 1];

  submitComment.addEventListener('click', async () => {
    await addComments(movieDetails.show.id, userName.value, commentText.value);
    displayComments(movieDetails.show.id);
  });

  const commentButton = document.querySelector('.comment-button');
  const oneMovieId = commentButton.parentElement.parentElement.parentElement.previousElementSibling;
  const movieId = oneMovieId.firstElementChild.textContent;

  const movieComments = async () => {
    const movieComment = await getComments(movieId);
    return movieComment;
  };

  (async () => {
    const receivedId = await movieComments();
    const commentText = document.querySelector('.comment-text');
    const commentsHeader = document.querySelector('.comments-header');
    const allComments = JSON.parse(receivedId);
    if (allComments.length) {
      commentsHeader.innerHTML = `Comments (${allComments.length})`;
    } else {
      commentsHeader.innerHTML = 'Comments (0)';
    }

    allComments.forEach((comment) => {
      const newDisplayComment = document.createElement('p');
      newDisplayComment.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      commentText.appendChild(newDisplayComment);
    });
  })();
};

export default commentsPopup;