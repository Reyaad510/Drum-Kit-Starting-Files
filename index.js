


// Add an event listener
// querySelectorAll then pass in ".drum" to targer that class which are on the buttons, then when click on button will call the handleClick() function


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

const handleClick = () => {
    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    console.log(this);

    
    }

for(let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
           
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
           
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
            
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;     
                
            case "d":
            
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
            
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
            
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
            
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(this);
                break;
        }

    });

    
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