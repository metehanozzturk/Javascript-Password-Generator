const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwElFirst = document.getElementById("pw-first")
let pwElSecond = document.getElementById("pw-second")

function toggleMode() {
    let bodyElement = document.body;
    let button = document.getElementById('dark-mode');

    // Toggle between light and dark mode classes
    if (bodyElement.classList.contains('dark-mode')) {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        button.textContent = 'Dark Mode';  // Change button text
    } else {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        button.textContent = 'Light Mode';  // Change button text
    }
}

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getRandomPassword() {
    let randomPassword = ""
    let randomPasswordSec = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordSec += getRandomCharacter()
    }
    pwElSecond.innerText = randomPasswordSec
    pwElFirst.innerText = randomPassword
    return randomPassword
}

function copyFirstPassword() {
    let passwordText = pwElFirst.innerText;
    navigator.clipboard.writeText(passwordText).then(function() {
        alert("Password copied to clipboard: " + passwordText);
    }).catch(function(error) {
        console.error("Failed to copy password: ", error);
    });
}

function copySecondPassword() {
    let passwordText = pwElSecond.innerText;
    navigator.clipboard.writeText(passwordText).then(function() {
        alert("Password copied to clipboard: " + passwordText);
    }).catch(function(error) {
        console.error("Failed to copy password: ", error);
    });
}

pwElFirst.addEventListener("click", copyFirstPassword);
pwElSecond.addEventListener("click", copySecondPassword);