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


const list = document.querySelector(".cards__list"); //список <ul>//
const itemTemplate = document.querySelector(".list-item-template"); //элемен списка с <template>//
const cardContent = document.querySelector('.list-item-template').content;


function renderCard(item){ //создание карточек
  const cardContent = document.querySelector('.list-item-template').content;
  const cardClone = cardContent.querySelector('.card').cloneNode(true);
  const cardPhoto = cardClone.querySelector('.card__photo');
  const cardTitle = cardClone.querySelector('.card__name');
  cardPhoto.src = item.link;
  cardTitle.textContent = item.name;
  list.prepend(cardClone);
  setListeners();
}

initialCards.forEach(item => {renderCard(item)});//перебор массива

//Слушатели событий
function setListeners(cardClone){
  const deleteButton = document.querySelector(".card__button-delete");//кнопка удаления карточки
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = document.querySelector(".card__button-like");
  likeButton.addEventListener('click',likeActive);
  const openPhoto = document.querySelector('card__photo');
/*/openPhoto.addEventListener('click',)*/
  };

function likeActive() {
  const likeButton = document.querySelector(".card__button-like");
  likeButton.classList.add("card__button-like_active");//лайк меняет цвет
};////// ЛАЙК ТОЛЬКО НА ОДНОЙ КАРТОЧКЕ

 function deleteCard(){
  const deleteButton = document.querySelector(".card__button-delete");//удаление карточки
  const deleteCardClone = deleteButton.closest('.card');///// ПОЧЕМУ УДАЛЯЕТСЯ ПРЕДЫДУЩАЯ КАРТОЧКА????
  deleteCardClone.remove();
 }
 
 
 