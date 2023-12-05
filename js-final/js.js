// define all number (aka dial) buttons
//const btn = document.querySelector("button");
//btn.addEventListener("click", () => FUNCTION);


// button pressed output

// when a button is pressed all dial buttons change to a random number 0-9
    // if buttonPushed, display number in output & randomize numbers on dial
    // if button number already displayed on screen, choose another number at random, repeat for all buttons
        // if var1 == var2 && var3 && var4 ... chooseNewValue, else displayValue

        document.addEventListener('DOMContentLoaded', function () {
            // Get the output container
            const outputContainer = document.getElementById('outputCont');
        
            const buttons = document.querySelectorAll('.dials button');
            let clickCount = 0;
        
            // Add click event listener to each button
            buttons.forEach(function (button) {
                button.addEventListener('click', function () {
                    const buttonID = button.id;
        
                    // Check if the button is the backspace button
                    if (buttonID === 'backspace') {
                        handleBackspace();
                    } else {
                        const buttonText = button.innerText;
                        displayNumber(buttonText);
                    }
                });
            });
        
            // Function to display the clicked number
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
        
            // Function to handle backspace
            function handleBackspace() {
                // Get the last child of the output container
                const lastOutput = outputContainer.lastChild;
        
                // Remove the last output if it exists
                if (lastOutput) {
                    outputContainer.removeChild(lastOutput);
        
                    // Decrement the click count
                    clickCount = Math.max(0, clickCount - 1);
                }
            }
        
            // Function to reset the output container
            function resetOutput() {
                outputContainer.innerHTML = '';
                clickCount = 0;
            }
        });
        
        
        
        
          
          