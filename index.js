


// Add an event listener
// querySelectorAll then pass in ".drum" to targer that class which are on the buttons, then when click on button will call the handleClick() function


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

const handleClick = () => {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    
    }

for(let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    
}








// Higher order functions are functions that can take other functions as inputs.

/*
function add(num1, numm2) {
    return num1 + num2;
}

function multiply(num1, numm2) {
    return num1  * num2;
}

function calculator(num1, numm2, operator){
    return operator(num1,num2);
}

calculator(num1,num2,add);

debugger; -> in console of website walks through step by step to figure out an error



*/