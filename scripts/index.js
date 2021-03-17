// находим элементы в DOM, назначаем переменные
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let formSubmit = document.querySelector('.popup__form');

/* получаем по идентификатору(id) поле ввода Имени и сохраняем в переменной inputName */
let inputName = document.querySelector('#input-name');

/* получаем по идентификатору(id) поле ввода Статуса и сохраняем в переменной inputStatus */
let inputStatus = document.querySelector('#input-status');

// объявляем функцию открытия модального окна
function openPopup() {
    // к элементу popup добавляем атрибут popup_opened  
    popup.classList.add('popup_opened');
    // полям ввода присваиваем значения из профиля
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}

// объявляем функцию закрытия модального окна 
function closePopup() {
    // удаляем атрибут popup_opened
    popup.classList.remove('popup_opened');
}

// объявляем функцию изменения значений в профиле 
function changeValue(event) {
    // Метод позволяет отменить стандартные действия браузера по клику на кнопку (передача данных на сервер, обновление страницы).//
    /* Метод preventDefault () интерфейса Event сообщает User agent (браузер), 
    что если событие не обрабатывается явно, его действие по умолчанию не должно 
    выполняться так, как обычно. Событие продолжает распространяться как обычно, 
    до тех пор, пока один из его обработчиков не вызывает методы 
    stopPropagation () или stopImmediatePropagation (), 
    любой из которых сразу же прекращает распространение. */
    event.preventDefault();
    // меняем значения в профиле на введенные
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    // вызов функции закрытия модального окна
    closePopup()
}

// добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
formSubmit.addEventListener('submit', changeValue);
// добавляем слушатель клика на кнопку редактировать профиль, вызываем функцию открытия модальног окна
openPopupBtn.addEventListener('click', openPopup);
// добавляем слушатель клика на кнопку закрыть попап, вызываем функцию закрытия модального окна
closePopupBtn.addEventListener('click', closePopup);