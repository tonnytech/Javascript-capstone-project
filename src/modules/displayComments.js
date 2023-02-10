import { getComments } from './commentsApi.js';

const displayComments = async (itemId) => {
  const givenComments = async () => {
    const givenComment = await getComments(itemId);
    return givenComment;
  };

  const allComments = await givenComments();
  const commentsArr = JSON.parse(allComments);

  const commentText = document.querySelector('.comment-text');
  const commentsHeader = document.querySelector('.comments-header');
  commentsHeader.innerHTML = '';
  if (commentsArr.length) {
    commentsHeader.innerHTML = `Comments (${commentsArr.length})`;
  } else {
    commentsHeader.innerHTML = 'Comments (0)';
  }

  commentText.innerHTML = '';
  commentsArr.forEach((comment) => {
    const newDisplayComment = document.createElement('p');
    newDisplayComment.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    commentText.appendChild(newDisplayComment);
  });
};

export default displayComments;