// define all number (aka dial) buttons
//const btn = document.querySelector("button");
//btn.addEventListener("click", () => FUNCTION);
// button pressed output
// when a button is pressed all dial buttons change to a random number 0-9
    // if buttonPushed, display number in output & randomize numbers on dial
    // if button number already displayed on screen, choose another number at random, repeat for all buttons
        // if var1 == var2 && var3 && var4 ... chooseNewValue, else displayValue
// add a function that randomly selects a number 0-9 for buttonText but doesn't repeat a number on the screen, change this variable to a "let" 

    document.addEventListener('DOMContentLoaded', function () {
// defining variables
    const outputContainer = document.getElementById('outputCont');
    const buttons = document.querySelectorAll('.dials button');
    let clickCount = 0;
        
// event listener to tell when each button has been pushed/clicked & what to do when that event occurs
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonID = button.id;
        
            // if the backspace button is clicked use that function, else display the number on the button clicked
            if (buttonID === 'backspace') {
                useBackspace();
            } else {
                const buttonText = button.innerText;
                displayNumber(buttonText);
            }
        });
    });

// functions
// fucntion() displays the number of the clicked button
    function displayNumber(number) {
        // Create a new div element for the output
        const output = document.createElement('div');
        output.classList.add('output');
        output.innerText = number;
        
        // Append the output div to the output container
        outputContainer.appendChild(output);
        
        // Check if 10 numbers have been clicked, then reset
        if (clickCount === 10) {
            resetOutput();
        } else {
            // Increment the click count
            clickCount++;
        }
    }
        
// function() enables the use of a backspace button
    function useBackspace() {
        // Get the last child of the output container
        const lastOutput = outputContainer.lastChild;
        
        // Remove the last output if it exists
        if (lastOutput) {
            outputContainer.removeChild(lastOutput);
        
        // Decrement the click count
            clickCount = Math.max(0, clickCount - 1);
        }
    }
        
// function() resets the output container
    function resetOutput() {
        outputContainer.innerHTML = '';
        clickCount = 0;
    }
});
        
        
        
        
          
          