// create a new like
const APIkeyOne = '3vnHMFG69E4WPq0bdrAl';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APIkeyOne}/likes`;

const createNewLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });

  // if (!res.ok && res.status !== 201) {
  //   return;
  // }
};

export default createNewLike;
