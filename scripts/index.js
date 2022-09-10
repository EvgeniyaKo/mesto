const popup = document.querySelector(".popup");
const buttonOpenPopup = document.querySelector(".profile__button-edit");
const popupClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_name");
const inputJob = document.querySelector(".popup__input_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupButton = document.querySelector(".popup__button");

buttonOpenPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});
popupClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
popupButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}
formElement.addEventListener("submit", formSubmitHandler);
