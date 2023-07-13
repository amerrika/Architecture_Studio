const btnToggle = document.querySelector(".btn__toggle");
const mainNav = document.querySelector(".main-nav");

btnToggle.addEventListener("click", function () {
  mainNav.classList.toggle("show-links");
});


new google.maps.Map(document.getElementById("map"), {
  zoom: 10,
  center: new google.maps.LatLng(59.91916, 30.32910),
  mapTypeId: "roadmap"
});