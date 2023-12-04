// define all number (aka dial) buttons
//const btn = document.querySelector("button");
//btn.addEventListener("click", () => FUNCTION);


// button pressed output

// when a button is pressed all dial buttons change to a random number 0-9
    // if buttonPushed, display number in output & randomize numbers on dial
    // if button number already displayed on screen, choose another number at random, repeat for all buttons

            // Get all buttons with the class 'dials'
            const buttons = document.querySelectorAll('.btn button');

            // Function to handle button click
            const handleButtonClick = (event) => {
                // Get the text content (number) of the clicked button
                const buttonNumber = event.target.textContent;
    
                // Display the button number (replace 'output' with your actual output element)
                console.log(`Button ${buttonNumber} Pressed`);
    
                // You can update your output display logic here
            };
    
            // Add click event listener to each button
            buttons.forEach((button) => {
                button.addEventListener('click', handleButtonClick);
            });

