(function () {
  var me = {};
  // Ищем элемент с классом form-container
  var form = document.querySelector('.form-container');
  var closeButton = null;

  function onClose() {
    me.close();
    if (closeButton) {
      closeButton.removeEventListener('click', onClose);
    }
  }
  // Показать форму
  me.open = function () {
    // Удаляем у формы класс is-hidden
    form.classList.remove('is-hidden');
    closeButton = document.querySelector('.form__close-button');
    if (closeButton) {
      closeButton.addEventListener('click', onClose);
    }
  };

  // Скрыть форму
  me.close = function () {
    // Добавляем форме класс is-hidden
    form.classList.add('is-hidden');
  };

  // Создаём глобальную переменную form
  window.form = me;
}());