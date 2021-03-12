const buttonFormDisplay = document.querySelector(".form-display-button"); // нахожу кнопку
const searchForm = document.querySelector(".search-form"); // форму
const checkInDate = searchForm.querySelector("[name=checkin-date]"); // поле даты заезда
const checkOutDate = searchForm.querySelector("[name=checkout-date]"); // поле ввода даты выезда
const adults = searchForm.querySelector("[name=adults]"); // поле ввода взрослых
const children = searchForm.querySelector("[name=children]"); // поле ввода количества детей

searchForm.classList.add("search-form-closed");  // при инициализации JS форма скрывается

buttonFormDisplay.addEventListener("click", function (evt) { 
  evt.preventDefault(); // зачем "пустой" кнопке убирать поведение по умолчанию? 
  searchForm.classList.toggle("search-form-closed");  }); // «переключатель» для кнопки, управляющей формой

searchForm.addEventListener("submit", function (evt) { // событие «Отправка» формы
  evt.preventDefault();	// отключаю поведение по умолчанию
  if (!checkInDate.value || !checkOutDate.value || !adults.value) { // если пользователь не ввел данные в поля дат и количества отдыхающих, то
    console.log("Введите даты поездки и количество гостей"); // выводится сообщение в консоль и 
    searchForm.classList.add("form-error"); // добавляется класс, анимирующий ошибку. И вся эта часть if {} не работает((
  } else { //эта часть ветки работает нормально, если форма заполнена, то в консоли выходит сообщение
    console.log("Все ок!")      
    searchForm.classList.remove("form-error"); 
  }
});

// ошибка в строке 16. Каждое значение по отдельности (checkInDate.value, checkOutDate.value, adults.value) проверяла через консоль - работают. А условием  - нет. Что я не так здесь пишу?? Класс .form-error тоже проверяла: через css напрямую работает , форма трясется. 
// попробовала написать if (checkInDate.value && checkOutDate.value && adults.value) - заполненная форма - все сработало: и сообщение в консоли появилось, и форма потряслась.