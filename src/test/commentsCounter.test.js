import commentsCounter from '../modules/commentsCounter.js';

describe('Test for comments counter', () => {
  document.body.innerHTML = `
        <div class="all-comments">
            <h3 class="comments-header"></h3>
            <div class="comment-text">
                <p>10/02/2023 Mark: Super</p>
                <p>08/02/2023 Sonia: Jeez!</p>
                <p>02/02/2023 Selline: I am really impressed</p>
            </div>
        </div>
    `;

  test('Get count of items displayed', () => {
    const commentsCount = commentsCounter();
    expect(commentsCount).toBe(3);
  });

  test('Count is accurate even when new comment is added', () => {
    const commentText = document.querySelector('.comment-text');
    const row = document.createElement('p');
    row.textContent = '27/01/2023 Joe: I think it is overrated';
    commentText.appendChild(row);
    const commentsCount = commentsCounter();
    expect(commentsCount).toBe(4);
  });
});