const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close');
const closePopupOverlay = document.querySelector('.popup__overlay');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = document.querySelector('.popup__input-name');
const inputStatus = document.querySelector('.popup__input-status');
const formSubmit = document.querySelector('.popup__form');

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function () {
    openPopup();
});

closePopupBtn.addEventListener('click', function () {
    closePopup();
});
closePopupOverlay.addEventListener('click', function () {
    closePopup();
});


function changeValue(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup()
}

formSubmit.addEventListener('submit', changeValue);
