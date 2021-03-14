const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close');
const closePopupOverlay = document.querySelector('.popup__overlay');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = document.querySelector('.popup__input-name');
const inputStatus = document.querySelector('.popup__input-status');


function OpenPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}

function ClosePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function () {
    OpenPopup();
});

closePopupBtn.addEventListener('click', function () {
    ClosePopup();
});
closePopupOverlay.addEventListener('click', function () {
    ClosePopup();
});

const saveBtn = document.querySelector('.popup__button');



