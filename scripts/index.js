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
