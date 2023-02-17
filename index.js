var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
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
  inputBox.value = inputBox.value.replace(/(?<=[\.\?\!])\s*([a-z])/g, (match, group) => group.toUpperCase());
  inputBox.value = inputBox.value.replace(/([.!?])\s*(?=[a-zA-Z])/g, "$1 ");
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
  sentenceBtnClick();

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

function alternateCase() {
  sentenceBtnClick();
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

// function titleCase(){
// let inputValue = inputBox.value;

// }




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



function convertSpacesToHyphens() {
  // let sentence = inputBox.value;
  let newSentence = inputBox.value.replace(/ /g, "-");
  inputBox.value = newSentence;
}




//Hyphen >> Space
function convertHyphensToSpaces(){
  var convertSpacesToHyphens =  inputBox.value.replace(/-/g, " ");
  inputBox.value  = convertSpacesToHyphens;

}




//Clear data

function clearData() {
  inputBox.value = " ";
  characterCount.innerHTML = "0000";
  wordCount.innerHTML = "0000";
  lineCount.innerHTML = "0000";
  window.location.reload()
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

document.addEventListener("copy", function () {
  // Show the toast notification
  var toast = document.getElementById("toast");
  toast.classList.add("show");

  // Hide the toast notification after 3 seconds
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
});

//Counter

//Character

let characterCount = document.getElementById("characterCount");

inputBox.addEventListener("input", function (e) {
  let currentLength = inputBox.value.length;

  characterCount.innerHTML = currentLength;
});

//Word Count

let wordCount = document.getElementById("wordCount");
inputBox.addEventListener("input", function () {
  var newText = inputBox.value.replace(/\n/g, "\n ");
  const words = newText.split(" ");
  wordCount.innerHTML = words.length;
});

let inputValue = inputBox.value;

//Line Count

let lineCount = document.getElementById("lineCount");

inputBox.addEventListener("keyup", function () {
  let lines = inputBox.value.split("\n").length;
  lineCount.innerHTML = lines;
});




//Lorem Ipsum Generator


function generateLoremIpsum() {
  var numWord = prompt("Enter the number of words for your Lorem Ipsum:");
  const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,", "sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua.", "Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry"
  ];

  let loremIpsum = "";
  for (let i = 0; i < numWord; i++) {
    loremIpsum += loremIpsumWords[i % loremIpsumWords.length] + " ";
  }

  inputBox.innerHTML = loremIpsum;
}







