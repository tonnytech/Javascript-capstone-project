const APIkeyOne = '3vnHMFG69E4WPq0bdrAl';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APIkeyOne}/likes`;

const getApiResponse = async (id, likeCount) => {
  const response = await fetch(url);

  const result = await response.json();
  console.log(result);
  const likeData = result.find((item) => item.item_id === id);
  if (likeData) {
    likeCount.textContent = likeData.likes;
  }
};
export default getApiResponse;
