import getItemsCount from '../modules/itemsCounter.js';

describe('Test for comments counter', () => {
  document.body.innerHTML = `
        <div class="movie-display">
            <div>Movie 1</div>
            <div>Movie 2</div>
            <div>Movie 3</div>
            <div>Movie 4</div>
        </div>
    `;

  test('Get count of items displayed', () => {
    const itemsCount = getItemsCount();
    expect(itemsCount).toBe(4);
  });

  test('Count is accurate even when new movie is added', () => {
    const movieSection = document.querySelector('.movie-display');
    const row = document.createElement('div');
    row.innerHTML = 'Movie 5';
    movieSection.appendChild(row);
    const movieSectionCount = getItemsCount();
    expect(movieSectionCount).toBe(5);
  });
});