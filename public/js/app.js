document.addEventListener("DOMContentLoaded", function () {

  // const backgroundButton = document.getElementById("postlist-button");
  // backgroundButton.addEventListener("click", function () {
  //   const postBackground = document.getElementsByClassName("individualpostlist");
  //   for(let i = 0; i < postBackground.length; i++) {
  //     postBackground[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  //   };
  // })

  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", function () {

    const userHeader = document.getElementById("ourmenuoptions");
    const userButton = document.getElementById("menu-button");

    userHeader.classList.remove("menuoptionnone");
    userHeader.classList.add("menuoptionblock");

    userButton.style.display = "none";
  })

  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", function () {

    const userHeader = document.getElementById("ourmenuoptions");
    const userButton = document.getElementById("menu-button");

    userHeader.classList.remove("menuoptionblock");
    userHeader.classList.add("menuoptionnone");

    userButton.style.display = "block";
  })




  window.addEventListener('click', function (e) {
    if (document.getElementById("ourmenuoptions").classList.contains("menuoptionblock") && (!document.getElementById('ourmenuoptions').contains(e.target)) && (!document.getElementById('menu-button').contains(e.target))) {
      // alert("Clicked outside l2 and logo-menu");
      const userHeader = document.getElementById("ourmenuoptions");
      const userButton = document.getElementById("menu-button");

      userHeader.classList.remove("menuoptionblock");
      userHeader.classList.add("menuoptionnone");

      userButton.style.display = "block";
    }
  })
});




/*
if (userHeader.classList.contains("menuoptionnone")) {
  userHeader.classList.remove("menuoptionnone");
  userHeader.classList.add("menuoptionblock");
} else if (userHeader.classList.contains("menuoptionblock")) {
  userHeader.classList.remove("menuoptionblock");
  userHeader.classList.add("menuoptionnone");
}
*/


    // class="menuoptionblock"

    // if (userHeader.style.display === "block") {
    //   userHeader.style.display = "none";
    // } else {
    //   userHeader.style.display = "block";
    // }

