const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=> {
    const widthRatio = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWidth / 300));
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
      clickCounter++;
      if (imageItem - (6 + clickCounter) + (4 - widthRatio) >= 0) {
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get
          ("transform")[0].x.value -430}px)`;
     } else {
     movieLists[i].style.transform = "translateX(0)";
     clickCounter = 0;
    }
  });
});


/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidepar,.sidepar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-tittle")

ball.addEventListener("click", function(){
   items.forEach((item)  => item.classList.toggle("active"))
})
<body>
  <script>
    // Sayfa yüklendiğinde page.html dosyasını içe aktar
    document.addEventListener("DOMContentLoaded", function() {
      fetch("pages/page.html")
        .then(response => response.text())
        .then(data => {
          document.querySelector(".container").innerHTML = data;
        })
    });
  </script>
