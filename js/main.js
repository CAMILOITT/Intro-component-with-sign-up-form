const $submit = document.querySelector('.form__btn');
const $form = document.querySelector('.form__form');
const $inputs = document.querySelectorAll('.form__input');

$form.onsubmit = function (e) {
  e.preventDefault();
  $inputs.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.style.opacity = 1;
      input.nextElementSibling.nextElementSibling.style.opacity = 1;
    } else {
      input.nextElementSibling.style.opacity = 0;
      input.nextElementSibling.nextElementSibling.style.opacity = 0;
    }
  });
};
