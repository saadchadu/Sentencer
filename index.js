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



//Sentence Case

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

//Lower Button

function lowerBtnClick() {
  let inputValue = inputBox.value;
  let lowerCase = inputValue.toLowerCase();
  inputBox.value = lowerCase;
}


//Upper Button

function upperBtnClick() {
  let inputValue = inputBox.value;
  let upperCase = inputValue.toUpperCase();
  inputBox.value = upperCase;
}



//Capital 

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



//Alternate Case

function alternateCase(){
  sentenceBtnClick()
  let inputValue = inputBox.value;
  function makeEvenLettersUppercase() { 
    var result = "";
  
    for (var i = 0; i < inputValue.length; i++) {
      if (i % 2 === 0) {
        result += inputValue[i].toUpperCase();
      } else {
        result += inputValue[i];
      }
    }
    return result;
  }
  var modifiedSentence = makeEvenLettersUppercase(inputValue);
  inputBox.value = modifiedSentence;
  
  
}


//Title Case

function titleCase(){
let inputValue = inputBox.value;





}


//Inverse

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


//Clear data

function clearData() {
  inputBox.value = "";
  characterCount.innerHTML= "0000";
}


//Copy Data

function copyData() {
  let inputValue = inputBox.value;
  var temp = document.createElement("textarea");
  temp.value = inputValue;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}


//Copy Button Toast

document.addEventListener('copy', function() {
  // Show the toast notification
  var toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide the toast notification after 3 seconds
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
});





//Counter


let characterCount = document.getElementById("characterCount");


inputBox.addEventListener('input', function (e) {

  // Count the current number of characters
  let currentLength = inputBox.value.length;

  characterCount.innerHTML=currentLength;


});
