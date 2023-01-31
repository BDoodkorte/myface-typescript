document.addEventListener("DOMContentLoaded", function () {

  const backgroundButton = document.getElementById("postlist-button");
  backgroundButton.addEventListener("click", function () {
    const postBackground = document.getElementsByClassName("individualpostlist");
    for(let i = 0; i < postBackground.length; i++) {
      postBackground[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    };
  })
});
