// находим элементы в DOM, назначаем переменные
// const masterModalWindow = document.querySelector('.popup')
//переменные модальных окон
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddImg = document.querySelector('.popup-add-img');
const viewImg = document.querySelector('.popup-view-img');
//элементы открытия модальных окон
const editProfileBtn = document.querySelector('.profile__edit-button');
const addImgBtn = document.querySelector('.profile__add-button');
//элементы закрытия модальных окон
const closeEditProfile = popupEditProfile.querySelector('.popup__btn-close');
const closeFormAddPlace = popupAddImg.querySelector('.popup__btn-close');
const closeViewImg = viewImg.querySelector('.popup__btn-close');
//элементы профиля
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileForm = document.querySelector('.popup-form-profile');
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
const placeForm = document.querySelector('.popup-form-place');
const btnDisable = popupAddImg.querySelector('.popup__submit')



// объявляем функцию открытия модального окна
// к элементу popup добавляем атрибут popup_opened  
// const togglePopup = (openModalWindow) => {openModalWindow.classList.toggle('popup_opened') };

function openModalWindow(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeWithEsc)

}

function closeModalWindow(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeWithEsc)
}


// объявляем функцию закрытия модального окна по клику вне области контента
const overlayHandler = (e) => {
    if (!e.target.closest('.popup__content')) {
        const closeModalWithClick = document.querySelector('.popup_opened')
        closeModalWindow(closeModalWithClick)
    }
};

// слушатель кнопки Escape, закрытие модального окна
function closeWithEsc(evt) {
    if (evt.key === 'Escape') {
        const closePopup = document.querySelector('.popup_opened')
        closeModalWindow(closePopup)
    };
};


initialElement.forEach((item) => {
    const InsertPlace = createPlace(item);
    elementsList.prepend(InsertPlace);
});

// объявляем функцию изменения значений в профиле 
function editProfile(event) {
    event.preventDefault();
    // меняем значения в профиле на введенные
    profileName.textContent = inputProfileName.value;
    profileStatus.textContent = inputProfileStatus.value;
    // вызов функции закрытия модального окна
    closeModalWindow(popupEditProfile)
}


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
        openModalWindow(viewImg);
    });
    return elementItem
};

function addPlace(e) {
    e.preventDefault();
    const newCardValue = {
        elementName: inputPlaceName.value,
        elementLink: inputPlaceUrl.value,
    }
    const elementItem = createPlace(newCardValue)
    elementsList.prepend(elementItem);
    closeModalWindow(popupAddImg);
}

// console.dir(event.target)

// добавляем слушатель отправки формы (сабмит) и вызываем функцию добавления нового места
placeForm.addEventListener('submit', addPlace);

// добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
profileForm.addEventListener('submit', editProfile);

// добавляем слушатель клика на кнопку Редактировать Профиль, вызываем функцию открытия модального окна
editProfileBtn.addEventListener('click', function () {
    inputProfileName.value = profileName.textContent;
    inputProfileStatus.value = profileStatus.textContent;
    openModalWindow(popupEditProfile)
});

// добавляем слушатель клика на кнопку закрыть попап Редактировать Профиль, вызываем функцию закрытия модального окна
closeEditProfile.addEventListener('click', () => closeModalWindow(popupEditProfile));

// добавляем слушатель клика на кнопку Добавить Место, вызываем функцию открытия модального окна
addImgBtn.addEventListener('click', () => openModalWindow(popupAddImg) || placeForm.reset() || btnDisable.classList.add(config.inactiveButtonClass) || btnDisable.setAttribute("disabled", true));

// добавляем слушатель клика на кнопку закрыть попап Добавить Место, вызываем функцию закрытия модального окна
closeFormAddPlace.addEventListener('click', () => closeModalWindow(popupAddImg));

// добавляем слушатель клика на крестик закрыть попап, вызываем функцию закрытия модального окна с изображением. 
closeViewImg.addEventListener('click', () => closeModalWindow(viewImg));

// добавляем слушатели на модальные окна
popupEditProfile.addEventListener('click', overlayHandler)
popupAddImg.addEventListener('click', overlayHandler)
viewImg.addEventListener('click', overlayHandler)







// // находим элементы в DOM, назначаем переменные
// // const masterModalWindow = document.querySelector('.popup')
// //переменные модальных окон
// const popupEditProfile = document.querySelector('.popup-edit-profile');
// const popupAddImg = document.querySelector('.popup-add-img');
// const viewImg = document.querySelector('.popup-view-img');
// //элементы открытия модальных окон
// const editProfileBtn = document.querySelector('.profile__edit-button');
// const addImgBtn = document.querySelector('.profile__add-button');
// //элементы закрытия модальных окон
// const closeEditProfile = popupEditProfile.querySelector('.popup__btn-close');
// const closeFormAddPlace = popupAddImg.querySelector('.popup__btn-close');
// const closeViewImg = viewImg.querySelector('.popup__btn-close');
// //элементы профиля
// const profileName = document.querySelector('.profile__name');
// const profileStatus = document.querySelector('.profile__status');
// const profileForm = document.querySelector('.popup-form-profile');
// const fullImage = document.querySelector('.popup__img');
// /* получаем по идентификатору(id) поле ввода Имени и сохраняем в переменной inputName */
// const inputProfileName = document.querySelector('#input-profile-name');
// /* получаем по идентификатору(id) поле ввода Статуса и сохраняем в переменной inputStatus */
// const inputProfileStatus = document.querySelector('#input-profile-status');
// // находим элемент список (ul elements) и присваем переменную
// const elementsList = document.querySelector('.elements');
// // получаем содержимое template элемента element-tamplate обращаясь к его свойству .content
// const elementTemplate = document.querySelector('.element-template').content;

// const imgTitle = document.querySelector('.popup__img-title');
// const inputPlaceName = document.querySelector('#input-place-name');
// const inputPlaceUrl = document.querySelector('#input-place-url');
// const placeForm = document.querySelector('.popup-form-place');

// // объявляем функцию открытия модального окна
// // к элементу popup добавляем атрибут popup_opened  
// const togglePopup = (openModalWindow) => {openModalWindow.classList.toggle('popup_opened') };

// // объявляем функцию закрытия модального окна по клику вне области контента
// const overlayHandler = (e) => {
//     if (!e.target.closest('.popup__content')) {
//         const closeModalWithClick = document.querySelector('.popup_opened')
//         togglePopup(closeModalWithClick)
//         console.log('Click')
//     }
// };

// // слушатель кнопки Escape, закрытие модального окна
// document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//         const closePopup = document.querySelector('.popup_opened')
//         togglePopup(closePopup)
//     };
// });


// // объявляем функцию изменения значений в профиле 
// function editProfile(event) {
//     event.preventDefault();
//     // меняем значения в профиле на введенные
//     profileName.textContent = inputProfileName.value;
//     profileStatus.textContent = inputProfileStatus.value;
//     // вызов функции закрытия модального окна
//     togglePopup(popupEditProfile)
// }



// function createPlace(item) {
//     const elementItem = elementTemplate.cloneNode(true);
//     const placeItems = elementItem.querySelector('.element');
//     const placeBtnDel = elementItem.querySelector('.element__button-trash');
//     const placeBtnLike = elementItem.querySelector('.element__button-like');
//     const placeImg = elementItem.querySelector('.element__image');
//     const placeTitle = elementItem.querySelector('.element__title');

//     placeTitle.textContent = item.elementName;
//     placeImg.alt = item.elementName;
//     placeImg.src = item.elementLink;

//     placeBtnDel.addEventListener('click', () => placeItems.remove())
//     placeBtnLike.addEventListener('click', () => placeBtnLike.classList.toggle('button-like-active'))
//     placeImg.addEventListener('click', function () {
//         fullImage.src = placeImg.src;
//         fullImage.alt = item.elementName;
//         imgTitle.textContent = item.elementName;
//         togglePopup(viewImg);
//     });
//     return elementItem
// };



// function addPlace(e) {
//     inputPlaceName.value = '';
//     inputPlaceUrl.value = '';
//     e.preventDefault();
//     const newCardValue = {
//         elementName: inputPlaceName.value,
//         elementLink: inputPlaceUrl.value,
//     }
//     const elementItem = createPlace(newCardValue)
//     elementsList.prepend(elementItem);

//     togglePopup(popupAddImg);
// }

// // console.dir(event.target)

// // добавляем слушатель отправки формы (сабмит) и вызываем функцию добавления нового места
// placeForm.addEventListener('submit', addPlace);

// // добавляем слушатель отправки формы (сабмит) и вызываем функцию изменений значений
// profileForm.addEventListener('submit', editProfile);

// // добавляем слушатель клика на кнопку Редактировать Профиль, вызываем функцию открытия модального окна
// editProfileBtn.addEventListener('click', function () {
//     inputProfileName.value = profileName.textContent;
//     inputProfileStatus.value = profileStatus.textContent;
//     togglePopup(popupEditProfile)
// });

// // добавляем слушатель клика на кнопку закрыть попап Редактировать Профиль, вызываем функцию закрытия модального окна
// closeEditProfile.addEventListener('click', () => togglePopup(popupEditProfile));

// // добавляем слушатель клика на кнопку Добавить Место, вызываем функцию открытия модального окна
// addImgBtn.addEventListener('click', () => togglePopup(popupAddImg));

// // добавляем слушатель клика на кнопку закрыть попап Добавить Место, вызываем функцию закрытия модального окна
// closeFormAddPlace.addEventListener('click', () => togglePopup(popupAddImg));

// // добавляем слушатель клика на крестик закрыть попап, вызываем функцию закрытия модального окна с изображением. 
// closeViewImg.addEventListener('click', () => togglePopup(viewImg));

// // добавляем слушатели на модальные окна
// popupEditProfile.addEventListener('click', overlayHandler)
// popupAddImg.addEventListener('click', overlayHandler)
// viewImg.addEventListener('click', overlayHandler)
