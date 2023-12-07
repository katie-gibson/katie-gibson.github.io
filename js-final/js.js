// define all number (aka dial) buttons
//const btn = document.querySelector("button");
//btn.addEventListener("click", () => FUNCTION);
// button pressed output
// when a button is pressed all dial buttons change to a random number 0-9
    // if buttonPushed, display number in output & randomize numbers on dial
    // if button number already displayed on screen, choose another number at random, repeat for all buttons
        // if var1 == var2 && var3 && var4 ... chooseNewValue, else displayValue

// if clickCount === 10 && button w/ callID is clicked (eventListener) --> increase the size of outputContainer && reset
// add a function that randomly selects a number 0-9 for buttonText but doesn't repeat a number on the screen, change this variable to a "let" 

document.addEventListener('DOMContentLoaded', function () {
    // defining variables
    const outputContainer = document.getElementById('outputCont');
    const buttons = document.querySelectorAll('.dials button');
    let clickCount = 0;

    // array to track displayed numbers
    let displayedNumbers = [];

    // event listener to tell when each button has been pushed/clicked & what to do when that event occurs
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonID = button.id;

            // if the backspace button is clicked, use that function
            if (buttonID === 'backspace') {
                useBackspace();
            } else {
                // generate random numbers for all buttons
                displayedNumbers = getRandomNumbers();

                // display the randomly selected numbers on the buttons
                buttons.forEach(function (button, index) {
                    button.innerText = displayedNumbers[index];
                });

                // check if 10 numbers have been clicked, then reset
                if (clickCount === 10) {
                    resetOutput();
                } else {
                    // increment the click count
                    clickCount++;
                }
            }
        });
    });

    // functions
    // function enables the use of a backspace button
    function useBackspace() {
        // iterate through buttons and clear text content
        buttons.forEach(function (button) {
            button.innerText = '';
        });

        // reset the displayed numbers array
        displayedNumbers = [];

        // reset the click count
        clickCount = 0;
    }

    // function resets the output container and the displayed numbers array
    function resetOutput() {
        // iterate through buttons and clear text content
        buttons.forEach(function (button) {
            button.innerText = '';
        });

        // reset the displayed numbers array
        displayedNumbers = [];

        // reset the click count
        clickCount = 0;
    }

    // function generates an array of random numbers between 0 and 9
    function getRandomNumbers() {
        return Array.from({ length: buttons.length }, function () {
            return Math.floor(Math.random() * 10).toString();
        });
    }
});



        
        
        
        
          
          