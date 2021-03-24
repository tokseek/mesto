// находим элементы в DOM, назначаем переменные
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let formSubmit = document.querySelector('.popup__form');
let popupAddImg = document.querySelector('.popup-add-img');
let addImgBtn = document.querySelector('.profile__add-button');
let closeFormAddPlace = document.querySelector('.popup__btn-close-add-img');

/* получаем по идентификатору(id) поле ввода Имени и сохраняем в переменной inputName */
let inputName = document.querySelector('#input-name');

/* получаем по идентификатору(id) поле ввода Статуса и сохраняем в переменной inputStatus */
let inputStatus = document.querySelector('#input-status');

// находим элемент список (ul elements) и присваем переменную
const elementsList = document.querySelector('.elements');
// получаем содержимое template элемента element-tamplate обращаясь к его свойству .content
const elementTemplate = document.querySelector('.element-template').content;

// объявляем функцию открытия модального окна Редактировать Профиль
function openPopup() {
    // к элементу popup добавляем атрибут popup_opened  
    popup.classList.add('popup_opened');
    // полям ввода присваиваем значения из профиля
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}
// объявляем функцию закрытия модального окна Редактировать Профиль
function closePopup() {
    // удаляем атрибут popup_opened
    popup.classList.remove('popup_opened');
}
// объявляем функцию открытия модального окна Добавить Место
function openPopupAddImg() {
    popupAddImg.classList.add('popup_opened');
}
// объявляем функцию закрытия модального окна Добавить Место
function closePopupAddImg() {
    popupAddImg.classList.remove('popup_opened');
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

// объявляем переменную массиву с фотографиям
const initialElement = [
    {
        elementName: 'Мельница',
        elementLink: 'https://images.unsplash.com/photo-1590523328639-1ebe5a06a0d4',
    },
    {
        elementName: 'Семафор',
        elementLink: 'https://images.unsplash.com/photo-1602570002144-76437cc6ce85',
    },
    {
        elementName: 'Экстерьер',
        elementLink: 'https://images.unsplash.com/photo-1591462906387-f0f9eb3d82d0',
    },
    {
        elementName: 'Причал',
        elementLink: 'https://images.unsplash.com/photo-1590611698651-2f2fb9c6a44b',
    },

    {
        elementName: 'Уют',
        elementLink: 'https://cdn.pixabay.com/photo/2021/01/05/03/35/image-5889561_960_720.jpg',
    },
   
];

// вызываем метод forEach массива initialElement
initialElement.forEach(function (item) { 
    // клонируем element-template и записываем в переменную 
    const elementItem = elementTemplate.cloneNode(true); 

elementItem.querySelector('.element__title').textContent = item.elementName;
elementItem.querySelector('.element__image').alt = item.elementName;
elementItem.querySelector('.element__image').src = item.elementLink;

elementsList.prepend(elementItem);
});


// добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
formSubmit.addEventListener('submit', changeValue);
// добавляем слушатель клика на кнопку Редактировать Профиль, вызываем функцию открытия модального окна
openPopupBtn.addEventListener('click', openPopup);
// добавляем слушатель клика на кнопку закрыть попап Редактировать Профиль, вызываем функцию закрытия модального окна
closePopupBtn.addEventListener('click', closePopup);
// добавляем слушатель клика на кнопку Добавить Место, вызываем функцию открытия модального окна
addImgBtn.addEventListener('click', openPopupAddImg);
// добавляем слушатель клика на кнопку закрыть попап Добавить Место, вызываем функцию закрытия модального окна
closeFormAddPlace.addEventListener('click', closePopupAddImg);
