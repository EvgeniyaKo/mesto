const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".popup__open");
const popupClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const inputName = document.querySelector(".input-name");
const inputJob = document.querySelector(".input-job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupButton = document.querySelector(".popup__button");

popupOpen.addEventListener("click", function () {
  popup.classList.add("active");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});
popupClose.addEventListener("click", function () {
  popup.classList.remove("active");
});
popupButton.addEventListener("click", function () {
  popup.classList.remove("active");
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}
formElement.addEventListener("submit", formSubmitHandler);
