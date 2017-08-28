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

  // Проверка корректности введенных данных
  me.isValid = function() {
    // Отбираем все поля с атрибутом data-valid="required"
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    // Отбираем все поля с атрибутом data-email
    var emailValue = document.querySelector('[data-email]').value;
    // Отбираем все поля с атрибутом data-number
    var numberValue = document.querySelector('[data-number]').value;

    if (!me.isAllCompleted(requiredFields)) {
      console.log('Заполните пожалуйста все необходимые поля');
      return false;
    } else if (!ITVDN.validation.isEmail(emailValue)) {
      console.log('Не верный email');
      return false;
    } else if (!ITVDN.validation.isNumber(numberValue)) {
      console.log('Не верный номер');
      return false;
    }
    return true;
  };

  // Проверка заполненности всех полей из переданного массива
  me.isAllCompleted = function(data) {
    var result = true;
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (!ITVDN.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }

    return result;
  };

  // Создаём глобальную переменную form
  ITVDN.form = me;
}());