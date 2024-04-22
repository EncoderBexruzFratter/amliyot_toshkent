let categories__text__box = document.querySelectorAll(".categories__text__box");
let categories__subtitle = document.querySelectorAll(".categories__subtitle");
let categories__number = document.querySelectorAll(".categories__number");

categories__text__box.forEach(function (item, index) {
  item.addEventListener("click", function () {
    categories__subtitle.forEach(function (title, index) {
      title.classList.remove("active");
    });
    categories__subtitle[index].classList.add("active")
    categories__number.forEach(function (title, index) {
        title.classList.remove("active");
      });
      categories__number[index].classList.add("active")
  });
});
