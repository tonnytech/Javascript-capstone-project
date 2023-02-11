const commentsCounter = () => {
  const allComments = document.querySelector('.comment-text');
  const count = allComments.childElementCount;
  return count;
};

export default commentsCounter;