let posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("posts");
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
        <img src="${posts.post}" class="post-img" name="${posts.username}">   
        <div class="action-container">
            <img src="images/icon-heart.png" class="action" id="like" name="${posts.username}">
            <img src="images/icon-comment.png" class="action">
            <img src="images/icon-dm.png" class="action">
        </div>
        <p class="like" id="like-${posts.username}">${posts.likes} likes</p>
        <p class="post-comment"><span class="post-username">${posts.username}</span> ${posts.comment}</p>
    </section>
    `;
};

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    postContainer.innerHTML += post(posts[i]);
  }
}

renderPosts();

const likeBtns = document.querySelectorAll("#like");

for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function () {
    const likesEl = document.getElementById("like-" + likeBtns[i].name);
    posts[i].likes += 1;
    likesEl.textContent = posts[i].likes + " likes";
  });
}

const postImgs = document.querySelectorAll(".post-img");

for (let i = 0; i < postImgs.length; i++) {
  postImgs[i].addEventListener("dblclick", function () {
    const likesEl = document.getElementById("like-" + postImgs[i].name);
    posts[i].likes += 1;
    likesEl.textContent = posts[i].likes + " likes";
  });
}
