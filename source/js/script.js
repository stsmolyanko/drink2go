const burgerMenu = document.querySelector('.burger');
const navList = document.querySelector('.header__nav-list');
const violetBar = document.querySelector('.filter-form__range-bar-violet');
const priceInputs = document.querySelectorAll('.filter-form__price-input');
const priceControls = document.querySelectorAll('.filter-form__control-item');


// Скрываем и показываем кнопку меню
burgerMenu.classList.add('burger--visible');
navList.classList.add('header__nav-list--closed');

burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('burger--open');
  navList.classList.toggle('header__nav-list--closed');
  navList.classList.toggle('header__nav-list--opened');
})


// Меняем цвет у баров, если ценовые инпуты отключены
if (priceInputs[0].hasAttribute('disabled') || priceInputs[1].hasAttribute('disabled')) {
  violetBar.classList.add('filter-form__range-bar-violet--disabled');

  for (i = 0; i < priceControls.length; i++) {
    priceControls[i].classList.add('filter-form__control-item--disabled');
  }
}
