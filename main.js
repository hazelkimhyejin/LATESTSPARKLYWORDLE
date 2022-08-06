import $ from "jquery";
import { WORDS } from "./dictionary.js";
// variables put all the way on top of javascript
let currentLife = 0;
const NUMBER_OF_GUESSES = 6;  //initialise global variables 
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

//nooky
//let rightGuessString = "WORDLE"
// console.log(rightGuessString)
function myFunction() {
    var x = document.getElementById("myImg").src;
    document.getElementById("demo").innerHTML = x;
  }
  function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}
$(document).ready(function(){
$(".btn1").click(function(){
  $("howtoplay").hide();
});
$(".btn2").click(function(){
  $("howtoplay").show();
});
});
let text = "box";
let result = text.repeat(5);
document.getElementById("box1").innerHTML = result;
let text2 = "box2";
let result2 = text.repeat(5);
document.getElementById("box2").innerHTML = result;
let text3 = "box3";
let result3 = text.repeat(5);
document.getElementById("box3").innerHTML = result;
let text4 = "box4";
let result4 = text.repeat(5);
document.getElementById("box4").innerHTML = result;
let text5 = "box5";
let result5 = text.repeat(5);
document.getElementById("box5").innerHTML = result;
let text6 = "box6";
let result6 = text.repeat(5);
document.getElementById("box6").innerHTML = result;
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }
 
  
  function initBoard() { // function definition that creates one row for each guess we give the user and creates 5 boxes for each row.
      //initBoard adds each row to the board container. Each row is given the class letter-row, and each box is assigned letter-box
      let board = document.getElementById("game-board");
  
      for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
          let row = document.createElement("div")
          row.className = "letter-row"
  
          for (let j = 0; j < rightGuessString.length; j++) {
              let box = document.createElement("div")
              box.className = "letter-box"
              box.id = `Marbles-${i}-${j}` // this is a name for each of your box i is your row j is your column
              row.appendChild(box)
          }
  
          board.appendChild(row)
      }
  }
  initBoard() // call function
  
  let wordlelife = ""  // memory control
  function renderWord() {
      if (currentLife >= NUMBER_OF_GUESSES) {
          return
      }
      //write out a pseudo code
      //Take the wordlelife variable and split into individual letters into the boxes of the row (Hint: Use split)
      //Use currentLife represents your row refer to boxidtwentyseven
      for (let i = 0; i < wordlelife.length; i++) {
          let box = document.getElementById(`Marbles-${currentLife}-${i}`);
          box.innerHTML = wordlelife[i]
          if (wordlelife[i]===rightGuessString[i]) {
              box.style.backgroundColor="green"
          }
      }
  }
  function appendWordle(input) {  // additional input on top of your memory
  
      if (wordlelife.length + 1 > rightGuessString.length) {
          currentLife++
          wordlelife = ""
          console.log(rightGuessString)
          if (currentLife > NUMBER_OF_GUESSES) {
              console.log("GAME OVER!")
          return // to cut off a function
          }
  
      }
      wordlelife += input
      // console.log(wordlelife)
      renderWord()
      // if (currentGuess===rightGuessString) {
      //     backgroundColor: green;
      //     console.log("Letter '' is in the word and in the correct spot.");
      // }
      // if (currentGuess!==rightGuessString) {
      //     backgroundColor: yellow;
      //     console.log("Letter '' is in the word but in the wrong spot..");
      // }
      // if (currentGuess!==rightGuessString) {
      //     backgroundColor: grey;
      //     console.log("Letter '' is not in the word in any spot.");
      // }
      if (wordlelife===rightGuessString) {
          console.log("YOU WIN!")
          console.log(rightGuessString)
          currentLife = 9999
      }
  }
  
  function renderkeyboard() {  // function definition
      const keyboardarray1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
      const keyboardarray2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
      const keyboardarray3 = ["ENTERBUTTON", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACEBUTTON"];
      let firstrow = document.getElementById("first-row"); // use getElementbyId to get the div with the name first row
      let secondrow = document.getElementById("second-row");
      let thirdrow = document.getElementById("third-row");
      //firstrow is the parent
  
      for (let i = 0; i < keyboardarray1.length; i++) {
          let keybutton = document.createElement("button") // keybutton is the child
          keybutton.className = "keybutton"
          keybutton.innerHTML = keyboardarray1[i]
          keybutton.onclick = function () {
              // console.log(keyboardarray1[i])
              appendWordle(keyboardarray1[i])  // calling a function from line 31
          }
  
          firstrow.appendChild(keybutton)
      }
      for (let i = 0; i < keyboardarray2.length; i++) {
          let keybutton = document.createElement("button") // keybutton is the child
          keybutton.className = "keybutton"
          keybutton.innerHTML = keyboardarray2[i]
          keybutton.onclick = function () {
              // console.log(keyboardarray2[i])
              appendWordle(keyboardarray2[i])
          }
  
          secondrow.appendChild(keybutton)
      }
      for (let i = 0; i < keyboardarray3.length; i++) {
  
          let keybutton = document.createElement("button") // keybutton is the child
          keybutton.className = "keybutton"
          keybutton.innerHTML = keyboardarray3[i]
          keybutton.onclick = function () {
              // console.log(keyboardarray3[i])
              appendWordle(keyboardarray3[i])// everytime you click on the button it will call this appendWordle function
          }
  
          thirdrow.appendChild(keybutton)
      }
  
  }; console.log("keyboardarray1");
  renderkeyboard() // call function
  
  //To study: syntax, property, element, array accesss, anonymous function
  //Write down the logic of what the statement does
  // initialisation var, definition function 
  // function / normal variable
  // create / use
  // initialisation / assign value/definition function - use a variable or call a function to use it
  // variable 
  // function


  import { WORDS } from "./word.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)

function initBoard() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
      let row = document.createElement("div")
      row.className = "letter-row"
      
      for (let j = 0; j < 5; j++) {
          let box = document.createElement("div")
          box.className = "letter-box"
          row.appendChild(box)
      }

      board.appendChild(row)
  }
}

initBoard()

function renderkeyboard() {  // function definition
  const keyboardarray1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyboardarray2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyboardarray3 = ["ENTERBUTTON", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACEBUTTON"];
  let firstrow = document.getElementById("first-row"); // use getElementbyId to get the div with the name first row
  let secondrow = document.getElementById("second-row");
  let thirdrow = document.getElementById("third-row");
  //firstrow is the parent

  for (let i = 0; i < keyboardarray1.length; i++) {
      let keybutton = document.createElement("button") // keybutton is the child
      keybutton.className = "keybutton"
      keybutton.innerHTML = keyboardarray1[i]
      keybutton.onclick = function () {
          // console.log(keyboardarray1[i])
          appendWordle(keyboardarray1[i])  // calling a function from line 31
      }

      firstrow.appendChild(keybutton)
  }
  for (let i = 0; i < keyboardarray2.length; i++) {
      let keybutton = document.createElement("button") // keybutton is the child
      keybutton.className = "keybutton"
      keybutton.innerHTML = keyboardarray2[i]
      keybutton.onclick = function () {
          // console.log(keyboardarray2[i])
          appendWordle(keyboardarray2[i])
      }

      secondrow.appendChild(keybutton)
  }
  for (let i = 0; i < keyboardarray3.length; i++) {

      let keybutton = document.createElement("button") // keybutton is the child
      keybutton.className = "keybutton"
      keybutton.innerHTML = keyboardarray3[i]
      keybutton.onclick = function () {
          // console.log(keyboardarray3[i])
          appendWordle(keyboardarray3[i])// everytime you click on the button it will call this appendWordle function
      }

      thirdrow.appendChild(keybutton)
  }

}; console.log("keyboardarray1");
renderkeyboard() // call function

document.addEventListener("keyup", (e) => {

  if (guessesRemaining === 0) {
      return
  }

  let pressedKey = String(e.key)
  if (pressedKey === "Backspace" && nextLetter !== 0) {
      deleteLetter()
      return
  }

  if (pressedKey === "Enter") {
      checkGuess()
      return
  }

  let found = pressedKey.match(/[a-z]/gi)
  if (!found || found.length > 1) {
      return
  } else {
      insertLetter(pressedKey)
  }
})
function insertLetter (pressedKey) {
  if (nextLetter === 5) {
      return
  }
  pressedKey = pressedKey.toLowerCase()

  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter]
  animateCSS(box, "pulse")
  box.textContent = pressedKey
  box.classList.add("filled-box")
  currentGuess.push(pressedKey)
  nextLetter += 1
}
function deleteLetter () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter - 1]
  box.textContent = ""
  box.classList.remove("filled-box")
  currentGuess.pop()
  nextLetter -= 1
}
function checkGuess () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let guessString = ''
  let rightGuess = Array.from(rightGuessString)

  for (const val of currentGuess) {
      guessString += val
  }

  if (guessString.length != 5) {
      alert("Not enough letters!")
      return
  }

  if (!WORDS.includes(guessString)) {
      alert("Word not in list!")
      return
  }

  
  for (let i = 0; i < 5; i++) {
      let letterColor = ''
      let box = row.children[i]
      let letter = currentGuess[i]
      
      let letterPosition = rightGuess.indexOf(currentGuess[i])
      // is letter in the correct guess
      if (letterPosition === -1) {
          letterColor = 'grey'
      } else {
          // now, letter is definitely in word
          // if letter index and right guess index are the same
          // letter is in the right position 
          if (currentGuess[i] === rightGuess[i]) {
              // shade green 
              letterColor = 'green'
          } else {
              // shade box yellow
              letterColor = 'yellow'
          }

          rightGuess[letterPosition] = "#"
      }

      let delay = 250 * i
      setTimeout(()=> {
          //shade box
          box.style.backgroundColor = letterColor
          shadeKeyBoard(letter, letterColor)
      }, delay)
  }

  if (guessString === rightGuessString) {
      alert("You guessed right! Game over!")
      guessesRemaining = 0
      return
  } else {
      guessesRemaining -= 1;
      currentGuess = [];
      nextLetter = 0;

      if (guessesRemaining === 0) {
          alert("You've run out of guesses! Game over!")
          alert(`The right word was: "${rightGuessString}"`)
      }
  }
}
function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
      if (elem.textContent === letter) {
          let oldColor = elem.style.backgroundColor
          if (oldColor === 'green') {
              return
          } 

          if (oldColor === 'yellow' && color !== 'green') {
              return
          }

          elem.style.backgroundColor = color
          break
      }
  }
}
function checkGuess () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let guessString = ''
  let rightGuess = Array.from(rightGuessString)
  let delay = 250 * i
setTimeout(()=> {
    //flip box
    animateCSS(box, 'flipInX')
    //shade box
    box.style.backgroundColor = letterColor
    shadeKeyBoard(letter, letterColor)
}, delay)

  for (const val of currentGuess) {
      guessString += val
  }

  if (guessString.length != 5) {
      toastr.error("Not enough letters!")
      return
  }

  if (!WORDS.includes(guessString)) {
      toastr.error("Word not in list!")
      return
  }

  
  for (let i = 0; i < 5; i++) {
      let letterColor = ''
      let box = row.children[i]
      let letter = currentGuess[i]
      
      let letterPosition = rightGuess.indexOf(currentGuess[i])
      // is letter in the correct guess
      if (letterPosition === -1) {
          letterColor = 'grey'
      } else {
          // now, letter is definitely in word
          // if letter index and right guess index are the same
          // letter is in the right position 
          if (currentGuess[i] === rightGuess[i]) {
              // shade green 
              letterColor = 'green'
          } else {
              // shade box yellow
              letterColor = 'yellow'
          }

          rightGuess[letterPosition] = "#"
      }

      let delay = 250 * i
      setTimeout(()=> {
          //shade box
          box.style.backgroundColor = letterColor
          shadeKeyBoard(letter, letterColor)
      }, delay)
  }

  if (guessString === rightGuessString) {
      toastr.success("You guessed right! Game over!")
      guessesRemaining = 0
      return
  } else {
      guessesRemaining -= 1;
      currentGuess = [];
      nextLetter = 0;

      if (guessesRemaining === 0) {
          toastr.error("You've run out of guesses! Game over!")
          toastr.info(`The right word was: "${rightGuessString}"`)
      }
  }
}
document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  const target = e.target
  
  if (!target.classList.contains("keyboard-button")) {
      return
  }
  let key = target.textContent

  if (key === "Del") {
      key = "Backspace"
  } 

  document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
    node.style.setProperty('--animate-duration', '0.3s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});