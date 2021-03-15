const buttonFormDisplay = document.querySelector(".form-display-button");
const mapImage = document.querySelector(".map-image");
const mapGoogle = document.querySelector(".sedona-google-map");
const searchForm = document.querySelector(".search-form");
const checkInDate = searchForm.querySelector("[name=checkin-date]");
const checkOutDate = searchForm.querySelector("[name=checkout-date]");
const adults = searchForm.querySelector("[name=adults]");
const children = searchForm.querySelector("[name=children]");

mapImage.classList.add("map-image-hidden");
mapGoogle.classList.remove("sedona-google-map-hidden");
searchForm.classList.add("search-form-closed");

buttonFormDisplay.addEventListener("click", function () { 
  searchForm.classList.toggle("search-form-closed");
});

searchForm.addEventListener("submit", function (evt) {
  if (!checkInDate.value || !checkOutDate.value || !adults.value) {
    evt.preventDefault();
    searchForm.classList.add("form-error");
    setTimeout(function() { 
      searchForm.classList.remove("form-error"); 
    }, 1000);
  } else {   
    searchForm.classList.remove("form-error"); 
  }
});