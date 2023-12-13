document.addEventListener('DOMContentLoaded', function () {
    // defining variables
    const outputContainer = document.getElementById('outputCont');
    const buttons = document.querySelectorAll('.dials button');
    let clickCount = 0;

    // event listener to tell when each button has been pushed/clicked & what to do when that event occurs
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonID = button.id;

            // handle 'backspace' button
            if (buttonID === 'backspace') {
                useBackspace();
            } 
            // handle 'call' button
            else if (buttonID === 'call') {
                makeCall();
                resetOutput();
            } 
            // handle number buttons
            else if (buttonID.startsWith('number-')) {
                generateNewNumbers(button);
            }
        });
    });

    // functions
    // function generates new random numbers for all number buttons and updates output
    function generateNewNumbers(clickedButton) {
        // create a div for the output
        const output = document.createElement('div');
        output.classList.add('output');

        // capture the current number on the clicked button
        const currentNumber = clickedButton.innerText;

        // iterate through number buttons and generate new random numbers
        buttons.forEach(function (button) {
            if (button.id.startsWith('number-')) {
                const randomNumber = Math.floor(Math.random() * 10);
                button.innerText = randomNumber;

                // display the captured current number for the clicked button
                if (button === clickedButton) {
                    output.innerText = `${currentNumber}`;
                }
            }
        });

        // append the output div to the output container
        outputContainer.appendChild(output);

        // check if 10 numbers have been clicked, then reset
        if (clickCount === 10) {
            resetOutput();
        } else {
            // increment the click count
            clickCount++;
        }
    }

    // function enables the use of a backspace button
    function useBackspace() {
        // get the last child (aka number) of the output container
        const lastOutput = outputContainer.lastChild;

        // remove the last output if it exists
        if (lastOutput) {
            outputContainer.removeChild(lastOutput);

            // decrement the click count
            clickCount = Math.max(0, clickCount - 1);
        }
    }

    // function handles the 'call' button functionality & displays message alert
    function makeCall() {
        alert(`I Would Call U But It's 2 Annoying`);
    }

    // function resets the output container
    function resetOutput() {
        outputContainer.innerHTML = '';
        clickCount = 0;
    }
});










