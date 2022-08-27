const filterBtn = document.querySelector(".header__search-setting-btn");
const filterOpen = document.querySelector(".filters");

filterBtn.addEventListener("click", function () {
  filterBtn.classList.toggle("is-open");
  filterOpen.classList.toggle("is-open");
});
