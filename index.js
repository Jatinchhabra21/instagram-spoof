import { posts } from './data.js';

const postContainer = document.getElementById('posts');
const post = (posts) => {
  return `
      <section class="post">
          <div class="post-header">
              <img src="${posts.avatar}" />
              <div class="user-detail-container">
                  <p class="name">${posts.name}</p>
                  <p class="location">${posts.location}</p>
            </div>
          </div>
          <div class="img-container">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/white-heart_1f90d.png" class="overlay post-like-animation" id="like-overlay-${posts.username}">
            <img src="${posts.post}" class="post-img" data-img="${posts.username}">
          </div> 
          <div class="action-container">
              <img src="images/icon-heart.png" class="action like-btn" id="like-btn-${posts.username}" data-like-btn="${posts.username}">
              <img src="images/icon-comment.png" class="action">
              <img src="images/icon-dm.png" class="action">
          </div>
          <p class="like" id="like-${posts.username}">${posts.likes} likes</p>
          <p class="post-comment"><span class="post-username">${posts.username}</span> ${posts.comment}</p>
      </section>
      `;
};

document.addEventListener('click', function (event) {
  if (event.target.dataset.likeBtn) {
    likeBtnAnimate(event.target);
    incrementLike(event.target.dataset.likeBtn);
  }
});

document.addEventListener('dblclick', function (event) {
  if (event.target.dataset.img) {
    likeOverlayAnimate(event.target.dataset.img);
  }
});

function likeBtnAnimate(like) {
  const likeBtn = like;
  const post = posts.filter(
    (post) => post.username === likeBtn.dataset.likeBtn
  )[0];
  if (!post.hasUserLiked) {
    likeBtn.setAttribute('src', 'images/icon-heart-filled.png');
    likeBtn.classList.add('like-animation');
    setTimeout(function () {
      likeBtn.classList.remove('like-animation');
    }, 300);
  } else {
    likeBtn.setAttribute('src', 'images/icon-heart.png');
  }
}

function incrementLike(username) {
  const post = posts.filter((post) => post.username === username)[0];
  const likeText = document.getElementById('like-' + username);
  if (!post.hasUserLiked) {
    post.likes += 1;
    post.hasUserLiked = true;
  } else {
    post.likes -= 1;
    post.hasUserLiked = false;
  }
  likeText.textContent = post.likes + ' likes';
}

function likeOverlayAnimate(username) {
  const likeOverlay = document.querySelector('#like-overlay-' + username);
  const post = posts.filter((post) => post.username === username)[0];
  likeOverlay.style.display = 'block';
  likeOverlay.classList.add('post-like-animation');
  setTimeout(function () {
    likeOverlay.style.display = 'none';
  }, 480);
  if (!post.hasUserLiked) {
    likeBtnAnimate(
      document.querySelector('#like-btn-' + event.target.dataset.img)
    );
    incrementLike(username);
  }
}

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    postContainer.innerHTML += post(posts[i]);
  }
}

renderPosts();
