

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

const handleClick = () => {
    alert("I got clicked!");
    
    }


// Add an event listener

// querySelectorAll then pass in ".drum" to targer that class which are on the buttons, then when click on button will call the handleClick() function
for(let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    
}





