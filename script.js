const btnToggle = document.querySelector(".btn--toggle");
console.log(btnToggle)

btnToggle.addEventListener("click", () => {
    console.log(document.querySelector(".main-nav-mobile"))
    document.querySelector(".main-nav-mobile").classList.toggle("display-none");
})