import commentsPopup from './commentsPopup.js';
// const movieName = document.getElementById('movieName');
import createNewLike from './addNewLike.js';
import getApiResponse from './ResponseFromApi.js';

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

  const Likes = CreateElement('div', '', 'movieLikes');
  const likeIcon = CreateElement('i', '', 'icon-heart');
  Likes.appendChild(likeIcon);

  const likeCount = CreateElement('div', '0', 'likeCount');
  likeCount.id = movieData.show.id;

  likeIcon.addEventListener('click', () => {
    createNewLike(likeCount.id);
    getApiResponse(likeCount.id, likeCount);
  });
  getApiResponse(likeCount.id, likeCount);
  Likes.appendChild(likeCount);
  nameAndLike.appendChild(Likes);
  mainDiv.appendChild(nameAndLike);

  const ReservationAndComment = CreateElement(
    'div',
    '',
    'Reserve_and_comment_wrapper',
  );
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
      const commentButtons = document.querySelectorAll('.Reserve_and_comment');
      const newCommentButtons = commentButtons[commentButtons.length - 1];
      newCommentButtons.addEventListener('click', () => {
        commentsPopup(object);
        const popWindow = document.querySelector('.comments-popup');
        popWindow.classList.add('comments-popup-toggle');
      });
    }));
  const movie = searchedMovie;
  return movie;
};

export default searchMovie;
