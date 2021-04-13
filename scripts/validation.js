const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    const errorUnderline = formElement.querySelector('.popup__input');
    errorUnderline.classList.add("popup__input-error-underline");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    const errorUnderline = formElement.querySelector('.popup__input');
    errorElement.textContent = '';
    errorElement.classList.remove("popup__input-error_active");
    errorUnderline.classList.remove("popup__input-error-underline");
};

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
} 

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    );

    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add("popup__submit_inactive");
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove("popup__submit_inactive");
    }
}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', event => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__submit");

inputList.forEach(inputElement => {
    inputElement.addEventListener("input", (event) => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    });
});
// сделаем чтобы кнопка была неактивна сразу при инициализации
    toggleButtonState(inputList, buttonElement);   
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'))

    formList.forEach(setEventListeners);

    console.log(formList)
};

enableValidation();


// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__submit',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }); 

