const toggler = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__links");

toggler.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggler.classList.toggle("open");
});