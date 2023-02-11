export const addComments = async (itemId, userName, userComment) => {
  const addComment = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3vnHMFG69E4WPq0bdrAl/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: userName,
      comment: userComment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const commentText = await addComment.text();
  return commentText;
};

export const getComments = async (itemId) => {
  const allComments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3vnHMFG69E4WPq0bdrAl/comments?item_id=${itemId}`);

  const movieComments = await allComments.text();
  return movieComments;
};