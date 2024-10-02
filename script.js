const max = 6;
const min = 1; 

let Button = document.getElementById("myButton");
let Number1 = document.getElementById("randomNum");
let Number2 = document.getElementById("randomNum2");

Button.onclick = function(){
    let randomNumber = Math.floor(Math.random() * max) + min;
    let randomNumber2 = Math.floor(Math.random() * max) + min;

    Number1.textContent = randomNumber;
    Number2.textContent = randomNumber2;
}