document.addEventListener('DOMContentLoaded', function () {
  var contactButtons = document.getElementsByClassName('contact-btn');
  
  var modal = document.getElementById('contact-modal');
  var closeButtons = document.getElementsByClassName('close');

  for (var i = 0; i < contactButtons.length; i++) {
    contactButtons[i].addEventListener('click', function () {
      modal.style.display = "block";
    });
  }

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
      modal.style.display = "none";
    });
  }

  // Закрытие модального окна при клике вне его области
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
 $(".phone").mask("+7(999)999-99-99");
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
  // Получаем значения полей формы
  var nameInput = document.getElementById('name-input').value;
  var phoneInput = document.getElementById('phone-input').value;
  
  // Отправка данных на сервер
  // Здесь можно добавить код для обработки отправки данных на сервер
});

window.addEventListener('load', async () => {
if ('serviceWorker' in navigator) {
try {
const reg = await navigator.serviceWorker.register('sw.js')
console.log('Service worker register success', reg)
} catch (e) {
console.log('Service worker register fail')
}
}
})