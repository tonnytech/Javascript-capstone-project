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
  ImageContainer.style.backgroundImage = `url(${movieData.show.image.original})`;
  mainDiv.appendChild(ImageContainer);

  const nameAndLike = CreateElement('div', '', 'name-and-like');
  const movieName = CreateElement('div', movieData.show.name, 'movieName');
  nameAndLike.append(movieName);

  const Likes = CreateElement(
    'div',
    '<i class="icon-heart-empty"></i> <input/ placeholder = "0" class = "likeCount">',
    'movieLikes',
  );
  nameAndLike.append(Likes);
  mainDiv.appendChild(nameAndLike);

  const ReservationAndComment = CreateElement('div', '', 'like_and_comment');
  const reservation = CreateElement('div', 'Reserve', 'Reserve_and_comment');
  ReservationAndComment.appendChild(reservation);

  const commentDiv = CreateElement('div', 'comment', 'Reserve_and_comment');
  ReservationAndComment.appendChild(commentDiv);
  mainDiv.appendChild(ReservationAndComment);
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
