const buttonFormDisplay = document.querySelector(".form-display-button");
const searchForm = document.querySelector(".search-form");
const checkInDate = searchForm.querySelector("[name=checkin-date]");
const checkOutDate = searchForm.querySelector("[name=checkout-date]");
const adults = searchForm.querySelector("[name=adults]");
const children = searchForm.querySelector("[name=children]");

searchForm.classList.add("search-form-closed");

buttonFormDisplay.addEventListener("click", function () { 
  searchForm.classList.toggle("search-form-closed");  });

searchForm.addEventListener("submit", function (evt) {
  if (!checkInDate.value || !checkOutDate.value || !adults.value) {
    evt.preventDefault();
    console.log("Введите даты поездки и количество гостей");
    searchForm.classList.add("form-error");
  } else {
    console.log("Все ок!")      
    searchForm.classList.remove("form-error"); 
  }
});