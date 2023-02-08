// const movieName = document.getElementById('movieName');
const movieDisplaySection = document.querySelector('.movie-display');

const CreateElement = (ele, content, myClass) => {
  const element = document.createElement(ele);
  element.innerHTML = content;
  element.className = myClass;
  return element;
};

const generateMovie = (movieData) => {
  const mainDiv = CreateElement('div', '', 'movie-wrapper');
  const ImageContainer = CreateElement('div', '', 'image-container');
  mainDiv.appendChild(ImageContainer);
  const image = CreateElement('image', '', 'image');
  image.setAttribute('src', movieData.show.image.original);
  ImageContainer.appendChild(image);
  const likeDiv = CreateElement('div', 'like', 'like');
  mainDiv.appendChild(likeDiv);
  const commentDiv = CreateElement('div', 'comment', 'comment');
  mainDiv.appendChild(commentDiv);
  return mainDiv;
};

const searchMovie = async () => {
  const toSearchMovie = 'girls';
  const searchedMovie = await fetch(
    `https://api.tvmaze.com/search/shows?q=${toSearchMovie}`,
  )
    .then((response) => response.json())
    .then((array) => array.forEach((object) => {
      const moviesToDisplay = generateMovie(object);
      movieDisplaySection.appendChild(moviesToDisplay);
    }));
  return searchedMovie;
};

export default searchMovie;
