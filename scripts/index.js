let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let inputName = document.querySelector('#input-name');
let inputStatus = document.querySelector('#input-status');
let formSubmit = document.querySelector('.popup__form');

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function changeValue(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup()
}

formSubmit.addEventListener('submit', changeValue);
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);