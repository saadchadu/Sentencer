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

  function makeSentenceCase(sentence) {
    var lowercase = sentence.toLowerCase();

    var capitalized = lowercase[0].toUpperCase() + lowercase.slice(1);
  
    return capitalized;
  }
  var sentence = inputValue;
var modifiedSentence = makeSentenceCase(sentence);
inputBox.value = modifiedSentence; 

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
  sentenceBtnClick()
  
  let inputValue = inputBox.value;

  function capitalizeWords() {
    return inputValue
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  inputBox.value = capitalizeWords();


  
  
    
}


// function alternateCase(){
//   let inputValue = inputBox.value;
//   function makeEvenLettersUppercase() { 
//     var result = "";
  
//     for (var i = 0; i < inputValue.length; i++) {
//       if (i % 2 === 0) {
//         result += inputValue[i].toUpperCase();
//       } else {
//         result += inputValue[i];
//       }
//     }
//     return result;
//   }
//   var modifiedSentence = makeEvenLettersUppercase(inputValue);
//   inputBox.value = modifiedSentence;
  
  
// }



function inverseBtnClick() {
  let inputValue = inputBox.value;

  function inverseCase() {
    let inverseSentence = "";

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



function clearData() {
  inputBox.value = "";
}

function copyData() {
  let inputValue = inputBox.value;
  var temp = document.createElement("textarea");
  temp.value = inputValue;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}




document.addEventListener('copy', function() {
  // Show the toast notification
  var toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide the toast notification after 3 seconds
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
});
