// @ts-check

var form = document.querySelector('.bookingForm');
var button = document.querySelector('.promo');
var input = form.querySelector('.input');
var checkOut = form.querySelector('.checkOut');
var adultsNumber = form.querySelector('.inputNumber');
var childrenNumber = form.querySelector('.children');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.classList.toggle('bookingForm_show');
    input.focus();
    input.selectionStart = input.value.length;
});

form.addEventListener("submit", function (evt) {
    if (!input.value || !checkOut.value || !adultsNumber.value || !childrenNumber.value) {
        evt.preventDefault();
    }
});
