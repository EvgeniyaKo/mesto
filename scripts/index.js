const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const openEditPopupButton = document.querySelector(".profile__button-edit");
const closePopupButton = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_name_name");
const inputJob = document.querySelector(".popup__input_name_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupSave = document.querySelector(".popup__button-save");

/////ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ//////
function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function popupForm(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
};

function openEditPopup(popupEdit){
  openPopup(popupEdit);
  popupForm(popupEdit);
};

function closePopup (popup) {
  popup.classList.remove("popup_opened");
};

function submitHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEditProfile);
};

openEditPopupButton.addEventListener("click", openEditPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", submitHandlerEdit);

///////ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ/////
const popupAdd = popup.querySelector(".popup_add");
const addCardButton = popup.querySelector(".profile__button-add");
const inputcardName = document.querySelector(".popup__input_name_card");
const popupcardLink = document.querySelector(".popup__input_name_link");
const closePopupCardButton = document.querySelector(".popup__add-card_close");

/*addCardButton.addEventListener('click', () => {
  openPopup(popupAdd);
});*/

function openPopupAdd() {
 openPopup(popupAdd);
};


//function closePopupAdd(popupAdd) {
  //closePopup(addCardButton);
//};
//addCardButton.addEventListener("click", openPopupAdd);
//closePopupCardButton.addEventListener("click", closePopupAdd);




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
  cardPhoto.alt = `Фотография ${item.name}`;
  list.prepend(cardClone);
  setListeners();
}

initialCards.forEach(item => {renderCard(item)});//перебор массива
const card = document.querySelector('.card');

//Слушатели событий
function setListeners(cardContent){
  const card = document.querySelector('.card');
  const deleteButton = card.querySelector(".card__button-delete");//кнопка удаления карточки
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = card.querySelector(".card__button-like");
  likeButton.addEventListener('click',likeActive);
  const openPhoto = document.querySelector('.card__photo');
  openPhoto.addEventListener('click', openCardPrewie);
  };

  const cardPrewie = document.querySelector('.card__popup_container');
  const cardPrewieImage = document.querySelector('.card__photo_popup');
  const cardPrewieCaption = document.querySelector('.card__popup_title');
  const cardPrewieAlt = document.querySelector('.card__photo_popup');
 

function openCardPrewie(evt){
  openPopup(cardPrewie);
  cardPrewieCaption.textContent = evt.target.textContent;
  cardPrewieImage.src = evt.target.src;
  cardPrewieAlt.alt = evt.target.alt;
};



  function likeActive(evt) {
    const likeButton = document.querySelector(".card__button-like");
    evt.target.classList.add("card__button-like_active");
  };
  
   function deleteCard(evt){
    evt.target.parentElement.remove();
  }
  

 


 /*function popupCardOpen(openPopup){
   const popupCardTemplate = document.querySelector('.template_photo').content;
   /*const popupCard = popupCardTemplate.querySelector(".popup");
   const popupCardPhoto = card.querySelector('.card__photo');
   const popupCardTitle = card.querySelector('.card__name')
   openPopup(popupCardOpen);
   popupCardPhoto.classList.add('card__photo_popup');
   popupCardTitle.classList.add('card__popup_title');
 };*/


 
 