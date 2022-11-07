let posts = [
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21,
      hasUserLiked: false,
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4,
      hasUserLiked: false,
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
      hasUserLiked: false,
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
          <div class="img-container">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/white-heart_1f90d.png" class="overlay post-like-animation" id="like-overlay-${posts.username}">
            <img src="${posts.post}" class="post-img" name="${posts.username}">
          </div> 
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
      if(!posts[i].hasUserLiked) {
        posts[i].likes += 1;
        likeBtns[i].setAttribute("src","images/icon-heart-filled.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = true;
        likeBtns[i].classList.add("like-animation");
        setTimeout(function () {
          likeBtns[i].classList.remove("like-animation");
        },300);
      }
      else {
        posts[i].likes -= 1;
        likeBtns[i].setAttribute("src","images/icon-heart.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = false;
      }
    });
  }
  
  const postImgs = document.querySelectorAll(".post-img");
  
  for (let i = 0; i < postImgs.length; i++) {
    postImgs[i].addEventListener("dblclick", function () {
      const postLike = document.getElementById("like-overlay-"+likeBtns[i].name);
      const likesEl = document.getElementById("like-" + likeBtns[i].name);
      if(!posts[i].hasUserLiked) {
        posts[i].likes += 1;
        likeBtns[i].setAttribute("src","images/icon-heart-filled.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = true;
        postLike.style.display = "block";
        postLike.classList.add("post-like-animation");
        setTimeout(function () {
          postLike.style.display = "none";
        },400);
      }
      else {
        likeBtns[i].setAttribute("src","images/icon-heart-filled.png");
        postLike.style.display = "block";
        postLike.classList.add("post-like-animation");
        setTimeout(function () {
          postLike.style.display = "none";
        },400);
      }
    });
  }
  
