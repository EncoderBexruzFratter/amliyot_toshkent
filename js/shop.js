let shop__cards = document.querySelector("#shop__cards");
let home__right__add__btn = document.querySelector(".home__right__add__btn");
let home = document.querySelector("#home");
let description = document.querySelector(".description");
let products__top__title = document.querySelector(".products__top__title");
let shop__right__continue__btn = document.querySelector(
  ".shop__right__continue__btn"
);

home__right__add__btn.addEventListener("click", function () {
  shop__cards.style.display = "block";
  home.style.display = "none";
  description.style.display = "none";
  products__top__title.textContent = "You may be interested in";
});
shop__right__continue__btn.addEventListener("click", function () {
  shop__cards.style.display = "none";
  home.style.display = "block";
  description.style.display = "block";
  products__top__title.textContent = "Releted Products";
});

let home__right__size__btn = document.querySelectorAll(
  ".home__right__size__btn"
);

home__right__size__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    home__right__size__btn.forEach(function (item, index) {
      item.classList.remove("home__right__size__btn__active");
    });
    home__right__size__btn[index].classList.add(
      "home__right__size__btn__active"
    );
  });
});

let home__right__minus__btn = document.querySelector(
  ".home__right__minus__btn"
);
let home__right__plus__btn = document.querySelector(".home__right__plus__btn");
let home__right__number = document.querySelector(".home__right__number");
let home__right__price = document.querySelector("#home__right__price");
function newFun() {
  home__right__minus__btn.addEventListener("click", function () {
    if (home__right__number.textContent > 1) {
      home__right__number.textContent = home__right__number.textContent * 1 - 1;
      home__right__price.textContent = home__right__price.textContent - 119;
    } else if ((home__right__number.textContent = 1)) {
        home__right__price.textContent = 119.00
    }
  });
  home__right__plus__btn.addEventListener("click", function () {
    home__right__number.textContent = home__right__number.textContent * 1 + 1;
    home__right__price.textContent = 119 * home__right__number.textContent;
  });
}
newFun();

let description__bottom = document.querySelectorAll(".description__bottom");
let description_title = document.querySelectorAll(".description_title");

description_title.forEach(function (item, index) {
  item.addEventListener("click", function () {
    description_title.forEach(function (item, index) {
      item.classList.remove("description__active");
    });
    description_title[index].classList.add("description__active");
    description__bottom.forEach(function (item, index) {
      item.classList.remove("description__bottom__active");
    });
    description__bottom[index].classList.add("description__bottom__active");
  });
});

let shop__left__card__minus__btn = document.querySelectorAll(
  ".shop__left__card__minus__btn"
);
let shop__left__card__plus__btn = document.querySelectorAll(
  ".shop__left__card__plus__btn"
);
let shop__left__card__quantity__number = document.querySelectorAll(
  ".shop__left__card__quantity__number"
);
let shop__left__card__price = document.querySelectorAll(".shop__left__card__price")
let shop__left__card__total = document.querySelectorAll(".shop__left__card__total")
shop__left__card__minus__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (shop__left__card__quantity__number[index].textContent > 1) {
      shop__left__card__quantity__number[index].textContent =
        shop__left__card__quantity__number[index].textContent * 1 - 1;
        shop__left__card__total.textContent = shop__left__card__price.textContent*1 / shop__left__card__quantity__number[index]
    }
  });
});
shop__left__card__plus__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
      shop__left__card__quantity__number[index].textContent =
        shop__left__card__quantity__number[index].textContent * 1 + 1;
  });
});
let home__small__img__box = document.querySelectorAll(".home__small__img__box")
let home__big__img__box = document.querySelector(".home__big__img__box")
let home__small__img = document.querySelectorAll(".home__small__img")
let home__big__img = document.querySelector(".home__big__img")
home__small__img__box.forEach(function(item, index){
    item.addEventListener('click' , function(){
        home__small__img__box.forEach(function(item , index){
            item.classList.remove("home__small__img__box__active")
        })
        home__small__img__box[index].classList.add("home__small__img__box__active")
        home__big__img.src = home__small__img[index].src
    })
})