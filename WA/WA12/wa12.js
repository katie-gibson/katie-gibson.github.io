document.addEventListener('DOMContentLoaded', function () {
    const newBtn = document.getElementById('js-new-quote').addEventListener('click', getQuote);
  
    const questionTxt = document.getElementById('js-quote-text');
    let answerTxt = document.getElementById('js-answer-text');
  
    let answer = '';
  
    // This is the endpoint for the API that we want to get a response from
    const endpoint = 'https://uselessfacts.jsph.pl/random.json?language=en';
  
    // Function to fetch a new quote from the API
    async function fetchQuote() {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        return json;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch new quote');
      }
    }
  
    // Function to display the question on the webpage
    function displayQuote(question) {
      questionTxt.textContent = question;
    }
  
    // Function to display the answer on the webpage
    function displayAnswer() {
      answerTxt.textContent = answer;
    }
  
    // Function to get a new quote and update the webpage
    async function getQuote() {
      try {
        const json = await fetchQuote();
        displayQuote(json['text']);
        answer = ''; // The useless facts API doesn't provide an answer field, so you may want to adjust this accordingly
        answerTxt.textContent = '';
      } catch (err) {
        alert(err.message);
      }
    }
  
// Random background colors
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    // Function to handle the button click event
      function handleButtonClick() {
        // Generate a random color
        var randomColor = getRandomColor();
    
    // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
      }
    
    // Add an event listener to the button
      var colorButton = document.getElementById('js-new-quote');
      colorButton.addEventListener('click', handleButtonClick);

    // Run getQuote once when the script first loads to populate a question
    // when the page is loading
    getQuote();
  });
  