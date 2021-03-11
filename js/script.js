const buttonFormDisplay = document.querySelector(".form-display-button");
const searchForm = document.querySelector(".search-form-wrap");

searchForm.classList.add("search-form-closed");

buttonFormDisplay.addEventListener("click", function (evt) {
  evt.preventDefault
  searchForm.classList.toggle("search-form-closed");
});