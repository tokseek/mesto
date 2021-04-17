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



initialElement.forEach((item) => {
    const InsertPlace = createPlace(item);
    elementsList.prepend(InsertPlace);
});

// если перебор и добавление карточки оставлять в index то карточки не добавляются.. ошибка
// index.js:90 Uncaught ReferenceError: initialElement is not defined
// at index.js:90

// получается что массив не видно из indexa




