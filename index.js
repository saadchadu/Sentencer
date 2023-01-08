var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let inputBox = document.querySelector("textarea");

function sentenceBtnClick() {
  let inputValue = inputBox.value;

  function capitalizeFirstLetter() {
    return inputValue[0].toUpperCase() + inputValue.slice(1);
  }
  
  let sentence = inputValue;
  inputBox.value = capitalizeFirstLetter(); 
  
}


