export const addComments = async (Id, Name, Comment) => {
  const addComment = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3vnHMFG69E4WPq0bdrAl/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: Id,
      name: Name,
      comment: Comment,
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

  return await allComments.text();
};