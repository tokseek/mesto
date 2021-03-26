// находим элементы в DOM, назначаем переменные
let popupEditProfile = document.querySelector('.popup-edit-profile');
let editProfileBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let formSubmit = document.querySelector('.popup__form');

/* получаем по идентификатору(id) поле ввода Имени и сохраняем в переменной inputName */
let inputProfileName = document.querySelector('#input-profile-name');

/* получаем по идентификатору(id) поле ввода Статуса и сохраняем в переменной inputStatus */
let inputProfileStatus = document.querySelector('#input-profile-status');

let popupAddImg = document.querySelector('.popup-add-img');
let addImgBtn = document.querySelector('.profile__add-button');
let closeFormAddPlace = document.querySelector('.popup__btn-close-add-img');

// находим элемент список (ul elements) и присваем переменную
const elementsList = document.querySelector('.elements');
// получаем содержимое template элемента element-tamplate обращаясь к его свойству .content
const elementTemplate = document.querySelector('.element-template').content;

// объявляем функцию открытия модального окна Редактировать Профиль
function openPopup() {
    // к элементу popup добавляем атрибут popup_opened  
    popupEditProfile.classList.add('popup_opened');
    // полям ввода присваиваем значения из профиля
    inputProfileName.value = profileName.textContent;
    inputProfileStatus.value = profileStatus.textContent;
}
// объявляем функцию закрытия модального окна Редактировать Профиль
function closePopup() {
    // удаляем атрибут popup_opened
    popupEditProfile.classList.remove('popup_opened');
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
function editProfile(event) {
    // Метод позволяет отменить стандартные действия браузера по клику на кнопку (передача данных на сервер, обновление страницы).//
    /* Метод preventDefault () интерфейса Event сообщает User agent (браузер), 
    что если событие не обрабатывается явно, его действие по умолчанию не должно 
    выполняться так, как обычно. Событие продолжает распространяться как обычно, 
    до тех пор, пока один из его обработчиков не вызывает методы 
    stopPropagation () или stopImmediatePropagation (), 
    любой из которых сразу же прекращает распространение. */
    event.preventDefault();
    // меняем значения в профиле на введенные
    profileName.textContent = inputProfileName.value;
    profileStatus.textContent = inputProfileStatus.value;
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
    {
        elementName: 'Параплан',
        elementLink: 'https://images.unsplash.com/photo-1597104831784-1fce445bcdda',
    },
    {
        elementName: 'Заброшенный ретро автомобиль',
        elementLink: './images/bruno-neurath-wilson-K6KIz8ydsi8-unsplash.jpg',
    },
    {
        elementName: 'Diana F+',
        elementLink: './images/bambi-corro-GLZ0b6ZmYek-unsplash.jpg',
    },
    {
        elementName: 'Случайное фото',
        elementLink: 'https://source.unsplash.com/collection/35mm-film',
    },
    {
        elementName: 'Фотоаппарат Polaroid',
        elementLink: './images/camila-quintero-franco-Yg1JBNAUC48-unsplash.jpg',
    },
    {
        elementName: 'Колесо обозрения',
        elementLink: './images/linda-holman-6jTlmUWGweE-unsplash.jpg',
    },
    {
        elementName: 'Фотоплёнка',
        elementLink: './images/markus-winkler-CiA0uLEKeUI-unsplash.jpg',
    },
   
];

// вызываем метод forEach массива initialElement
initialElement.forEach(function (item) {
    // клонируем element-template и записываем в переменную 
    const elementItem = elementTemplate.cloneNode(true);

    const placeItems = elementItem.querySelector('.element');
    const placeBtnDel = elementItem.querySelector('.element__button-trash');
    const placeBtnLike = elementItem.querySelector('.element__button-like');

    // добавляем слушатель клика по кнопке Удаление карточки, вызываем функцию удаления карточки
    placeBtnDel.addEventListener('click', () => placeItems.remove())
    
    // слушатель клика по сердечку, вызываем функцию лайк
    placeBtnLike.addEventListener('click', () => placeBtnLike.classList.add('button-like-active'))

    elementItem.querySelector('.element__title').textContent = item.elementName;
    elementItem.querySelector('.element__image').alt = item.elementName;
    elementItem.querySelector('.element__image').src = item.elementLink;
    elementsList.prepend(elementItem);


});

const place = document.querySelector('.elements');

// объявляем функцию создание элементов
function addPlace(event) {
    const placeContainer = document.createElement('li');
    placeContainer.classList.add('element');

    const placeImg = document.createElement('img');
    placeImg.classList.add('element__image');

    placeImg.src = inputPlaceUrl.value;

    const placeBox = document.createElement('div');
    placeBox.classList.add('element__box');

    const placeTitle = document.createElement('h2');
    placeTitle.classList.add('element__title');

    placeTitle.textContent = inputPlaceName.value;

    const placeBtnLike = document.createElement('button');
    placeBtnLike.classList.add('element__button-like');

    const placeBtnDel = document.createElement('button');
    placeBtnDel.classList.add('element__button-trash');


    // добавляем элементы
    placeContainer.append(placeImg, placeBox, placeBtnDel);
    placeBox.append(placeTitle, placeBtnLike);
    place.prepend(placeContainer);

    event.preventDefault();
    closePopupAddImg();
    
    placeBtnDel.addEventListener('click', () => placeContainer.remove())
    placeBtnLike.addEventListener('click', () => placeBtnLike.classList.add('button-like-active'))
    
}



const inputPlaceName = document.querySelector('#input-place-name');
const inputPlaceUrl = document.querySelector('#input-place-url');
const submitPlaceBtn = document.querySelector('.popup-form-place');



submitPlaceBtn.addEventListener('submit', addPlace);




// добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
formSubmit.addEventListener('submit', editProfile);
// добавляем слушатель клика на кнопку Редактировать Профиль, вызываем функцию открытия модального окна
editProfileBtn.addEventListener('click', openPopup);
// добавляем слушатель клика на кнопку закрыть попап Редактировать Профиль, вызываем функцию закрытия модального окна
closePopupBtn.addEventListener('click', closePopup);
// добавляем слушатель клика на кнопку Добавить Место, вызываем функцию открытия модального окна
addImgBtn.addEventListener('click', openPopupAddImg);
// добавляем слушатель клика на кнопку закрыть попап Добавить Место, вызываем функцию закрытия модального окна
closeFormAddPlace.addEventListener('click', closePopupAddImg);