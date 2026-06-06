const posts = [
  {
    image: "images/photo1.jpg",
    caption: "Golden hour in Dublin 🌅"
  },
  {
    image: "images/photo2.jpg",
    caption: "Street photography vibes 📸"
  },
  {
    image: "images/photo3.jpg",
    caption: "Quiet city nights 🌙"
  }
];

const feed = document.getElementById("feed");

posts.forEach(post => {
  const postElement = document.createElement("div");
  postElement.className = "post";

  postElement.innerHTML = `
    <img src="${post.image}" />
    <div class="caption">${post.caption}</div>
  `;

  feed.appendChild(postElement);
});
