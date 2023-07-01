const btnToggle = document.querySelector(".btn__toggle");
const mainNav = document.querySelector(".main-nav");

btnToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  mainNav.classList.toggle("show-links");
});


new google.maps.Map(document.getElementById("map"), {
  zoom: 10,
  center: new google.maps.LatLng(59.91916, 30.32910),
  mapTypeId: "roadmap"
});