// находим элементы в DOM, назначаем переменные
const pop = document.querySelector('.popup')
//переменные модальных окон
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddImg = document.querySelector('.popup-add-img');
const viewImg = document.querySelector('.popup-view-img');
//элементы открытия модальных окон
const editProfileBtn = document.querySelector('.profile__edit-button');
const addImgBtn = document.querySelector('.profile__add-button');
//элементы закрытия модальных окон
const closePopupBtn = popupEditProfile.querySelector('.popup__btn-close');
const closeFormAddPlace = popupAddImg.querySelector('.popup__btn-close');
const closeViewImg = viewImg.querySelector('.popup__btn-close');
//элементы профиля
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formSubmit = document.querySelector('.popup__form');
const fullImage = document.querySelector('.popup__img');
/* получаем по идентификатору(id) поле ввода Имени и сохраняем в переменной inputName */
const inputProfileName = document.querySelector('#input-profile-name');
/* получаем по идентификатору(id) поле ввода Статуса и сохраняем в переменной inputStatus */
const inputProfileStatus = document.querySelector('#input-profile-status');
// находим элемент список (ul elements) и присваем переменную
const elementsList = document.querySelector('.elements');
// получаем содержимое template элемента element-tamplate обращаясь к его свойству .content
const elementTemplate = document.querySelector('.element-template').content;

const imgTitle = document.querySelector('.popup__img-title');
const inputPlaceName = document.querySelector('#input-place-name');
const inputPlaceUrl = document.querySelector('#input-place-url');
const submitPlaceBtn = document.querySelector('.popup-form-place');

// объявляем функцию открытия модального окна
// к элементу popup добавляем атрибут popup_opened  
const togglePopup = (pop) => { pop.classList.toggle('popup_opened') };

// объявляем функцию закрытия модального окна по клику вне области контента
const overlayHandler = (e) => {
    if (!e.target.closest('.popup__content')) {
        const closeModalWithClick = document.querySelector('.popup_opened')
        togglePopup(closeModalWithClick)
        console.log('Click')
    }
};

// слушатель кнопки Escape, закрытие модального окна
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        const closePopup = document.querySelector('.popup_opened')
        togglePopup(closePopup)
    };
});


// объявляем функцию изменения значений в профиле 
function editProfile(event) {
    event.preventDefault();
    // меняем значения в профиле на введенные
    profileName.textContent = inputProfileName.value;
    profileStatus.textContent = inputProfileStatus.value;
    // вызов функции закрытия модального окна
    togglePopup(popupEditProfile)
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

function createPlace(item) {
    const elementItem = elementTemplate.cloneNode(true);
    const placeItems = elementItem.querySelector('.element');
    const placeBtnDel = elementItem.querySelector('.element__button-trash');
    const placeBtnLike = elementItem.querySelector('.element__button-like');
    const placeImg = elementItem.querySelector('.element__image');
    const placeTitle = elementItem.querySelector('.element__title');

    placeTitle.textContent = item.elementName;
    placeImg.alt = item.elementName;
    placeImg.src = item.elementLink;

    placeBtnDel.addEventListener('click', () => placeItems.remove())
    placeBtnLike.addEventListener('click', () => placeBtnLike.classList.toggle('button-like-active'))
    placeImg.addEventListener('click', function () {
        fullImage.src = placeImg.src;
        fullImage.alt = item.elementName;
        imgTitle.textContent = item.elementName;
        togglePopup(viewImg);
    });
    return elementItem
};

initialElement.forEach((item) => {
    const InsertPlace = createPlace(item);
    elementsList.prepend(InsertPlace);
});

function addPlace(e) {
    e.preventDefault();
    const newCardValue = {
        elementName: inputPlaceName.value,
        elementLink: inputPlaceUrl.value,
    }
    const elementItem = createPlace(newCardValue)
    elementsList.prepend(elementItem);
    togglePopup(popupAddImg);
}

// console.dir(event.target)

// добавляем слушатель отправки формы (сабмит) и вызываем функцию добавления нового места
submitPlaceBtn.addEventListener('submit', addPlace);

// добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
formSubmit.addEventListener('submit', editProfile);

// добавляем слушатель клика на кнопку Редактировать Профиль, вызываем функцию открытия модального окна
editProfileBtn.addEventListener('click', function () {
    inputProfileName.value = profileName.textContent;
    inputProfileStatus.value = profileStatus.textContent;
    togglePopup(popupEditProfile)
});

// добавляем слушатель клика на кнопку закрыть попап Редактировать Профиль, вызываем функцию закрытия модального окна
closePopupBtn.addEventListener('click', () => togglePopup(popupEditProfile));

// добавляем слушатель клика на кнопку Добавить Место, вызываем функцию открытия модального окна
addImgBtn.addEventListener('click', () => togglePopup(popupAddImg));

// добавляем слушатель клика на кнопку закрыть попап Добавить Место, вызываем функцию закрытия модального окна
closeFormAddPlace.addEventListener('click', () => togglePopup(popupAddImg));

// добавляем слушатель клика на крестик закрыть попап, вызываем функцию закрытия модального окна с изображением. 
closeViewImg.addEventListener('click', () => togglePopup(viewImg));

// добавляем слушатели на модальные окна
pop.addEventListener('click', overlayHandler)
popupAddImg.addEventListener('click', overlayHandler)
viewImg.addEventListener('click', overlayHandler)
