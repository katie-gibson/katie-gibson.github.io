document.addEventListener('DOMContentLoaded', function () {
    const newQuoteButton = document.getElementById('js-new-quote');
    const answerButton = document.getElementById('js-answer-link');
  
    newQuoteButton.addEventListener('click', getQuote);
  
    answerButton.addEventListener('click', showAnswer);
  
    function getQuote() {
      console.log('Button clicked!');
  
      const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched quote:', data.question);
          displayQuote(data.question);
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
          alert('Error fetching quote. Please try again.');
        });
    }
  
    function displayQuote(quote) {
      const quoteTextElement = document.getElementById('js-quote-text');
      quoteTextElement.textContent = quote;
    }
  
    function showAnswer() {
      const answerTextElement = document.getElementById('js-answer-text');
      answerTextElement.textContent = `${data.answer}`;
    }
  });
  