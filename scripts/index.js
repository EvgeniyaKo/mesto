const popup = document.querySelector(".popup");
const popupOpenButton = document.querySelector(".profile__button-edit");
const popupClose = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_name_name");
const inputJob = document.querySelector(".popup__input_name_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupSave = document.querySelector(".popup__button-save");


let openPopup = function () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
};
let closePopup = function () {
  popup.classList.remove("popup_opened");
};
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

popupOpenButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);

const popupAddcard = document.querySelector(".popup__add-card");
const cardAddButton = document.querySelector(".profile__button-add");
const inputcardName = document.querySelector(".popup__input_name_card");
const popupcardLink = document.querySelector(".popup__input_name_link");
const closePopupcardButton = document.querySelector(".popup__add-card_close");

function openPopupAddcard() {
  popupAddcard.classList.add("popup__add-card_opened");
}
function closePopupAddcard() {
  popupAddcard.classList.remove("popup__add-card_opened");
}

cardAddButton.addEventListener("click", openPopupAddcard);
closePopupcardButton.addEventListener("click", closePopupAddcard);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


/*const list = document.querySelector("cards__list"); //список <ul>//
const itemTemplate = document.querySelector(".list-item-template"); //элемен списка с <template>//
const deleteButton = document.querySelector(".card__button-delete");//кнопка удаления карточки
 const likeButton = document.querySelector(".card__button-like");//кнопка лайк
 let newCard = null;

function create() {
  initialCards.forEach(createCard);
  
}

function createCard(cards) {
  const newHtmlElement = itemTemplate.cloneNode(true);//клонируем template элемент
  const cardName = newHtmlElement.querySelector(".card__name").textContent =
    name;//заголовок карточки
  const cardFoto = newHtmlElement.querySelector("card__photo").src = link;//ссылка на фото
  setListenersForCard(newHtmlElement);
  list.prependChild(newHtmlElement);
}



function setListenersForCard(element) {
  deleteButton.addEventListener("click", handlerDelete);
  likeButton.addEventListener("click"); //функция лайка
  const openPhoto = itemTemplate.querySelector("card__photo");
  openPhoto.addEventListener("click"); //функция открытия фото
}*/

/*const list = document.querySelector("cards__list"); //список <ul>//
const itemTemplate = document.querySelector(".list-item-template"); //элемен списка с <template>//
const deleteButton = document.querySelector(".card__button-delete");//кнопка удаления карточки
 const likeButton = document.querySelector(".card__button-like");//кнопка лайк
 let newCard = null;


const cards = initialCards.reverse;

function create(){
  initialCards.forEach((cards)=>{renderCard(cards)});
  };

function createCard(cardItem){

  const cardsElement = itemTemplate.cloneNode(true);
  const cardsTitle = cardsElement.querySelector('.card__name');
  const cardsPhoto = cardsElement.querySelector('.card__photo');
  const cardDescription = cardsElement.querySelector('.card__name');
  cardDescription = cardsPhoto = cards.name;
  cardsTitle.textContent = cards.name;
  cardsPhoto.src = cards.link;
  setListeners(cardsElement);
  return cardsElement;
}

function setListeners(cardsElement){
  deleteButton.addEventListener("click", handlerDelete);
  likeButton.addEventListener("click"); //лайк
  const openPhoto = itemTemplate.querySelector("card__photo");
  openPhoto.addEventListener("click", ); //открытие фото
}

function popupPhotoOpen(){
  openPhoto.classList.add(card__photo_open);
}

function renderCard(cards){
  itemTemplate.prepend(createCard(cards));
};

create();*/





const list = document.querySelector(".cards__list"); //список <ul>//
const itemTemplate = document.querySelector(".list-item-template"); //элемен списка с <template>//
const deleteButton = document.querySelector(".card__button-delete");//кнопка удаления карточки
const likeButton = document.querySelector(".card__button-like");//кнопка лайк



function renderCard(){
  const cardContent = document.querySelector('.list-item-template').content;
  const cardClone = cardContent.querySelector('.card').cloneNode(true);
  cardClone.querySelector('.card__photo').src = initialCards[5].link;
  cardClone.querySelector('.card__name').textContent = initialCards[5].name;
  list.prepend(cardClone);
}


initialCards.forEach((item) => {renderCard()});
  
