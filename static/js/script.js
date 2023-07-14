const result = document.querySelector("#result");
const copy = document.querySelector(".copy");
copy.addEventListener('click', copyContent)
document.querySelector("#create").addEventListener('click', createPassword)

function createPassword(){
    if (document.querySelector("#result").value.length !== 0) {
        document.querySelector("#result").value = ''
    }
    const length = document.querySelector("#length").value;
    const lengthPlaceHolder = document.querySelector("#length");
    const randomNumber = Math.floor(Math.random() * (32 - 12 + 1)) + 12 // returns a number between 12 - 32
    const passwordArr = [];
    const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const characters = ["!", "@", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", "/", ";", "=", "?"];
    for (let i = 0; i < Alphabet.length; i++) {
        passwordArr.push(Alphabet[i])

        if (number[i] != undefined) {
            passwordArr.push(number[i])
        }
        if (characters[i] != undefined) {
            passwordArr.push(characters[i])
        }

        passwordArr.push(Alphabet[i].toLowerCase()) 

        
    }

    const randomized = passwordArr.sort(() => Math.random() - 0.5) // mixing all the arrays
    const finalPasswordArr = randomized.slice(0, length == '' ? randomNumber : length)
    const finalPassword = finalPasswordArr.join("")
    if (length == '') {
        lengthPlaceHolder.placeholder = randomNumber
    }
    result.value = finalPassword
}


async function copyContent() {
    let text = document.querySelector("#result").value; // reselecting the #result div, because the data has changed
    try {
      await navigator.clipboard.writeText(text);
      document.querySelector(".copy").style =  "background-color: #2c8d1a9c";
      setTimeout(() => {
          document.querySelector(".copy").style = "";
      }, 4000);
    } catch (err) {
      result.innerHTML = err
    }
  }