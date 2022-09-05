const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.popup__open');
const editButton = document.querySelector('.edit-button');

editButton.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})
