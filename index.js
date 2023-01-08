let swiper = new Swiper(".mySwiper", {
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


function lowerBtnClick() {
  let inputValue = inputBox.value;
  let lowerCase = inputValue.toLowerCase();
  inputBox.value = lowerCase;
}

function upperBtnClick() {
  let inputValue = inputBox.value;
  let upperCase = inputValue.toUpperCase();
  inputBox.value = upperCase;
}

function capitalBtnClick() {
  let inputValue = inputBox.value;

  function capitalizeWords() {
    return inputValue.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }

  inputBox.value = capitalizeWords();
}



function inverseBtnClick() {
  let inputValue = inputBox.value;

  function inverseCase() {
    let inverseSentence = ''; 
    
    for (let i = 0; i < inputValue.length; i++) {
      let letter = inputValue[i];
      if (letter == letter.toUpperCase()) {
        inverseSentence += letter.toLowerCase();
      } else if (letter == letter.toLowerCase()) {
        inverseSentence += letter.toUpperCase();
      }
    }
    
    return inverseSentence;
  }
  inputBox.value = inverseCase();
}



