const newButton = document.querySelector('#js-new-quote');
addEventListener('click', getQuote);

const newButton1 = document.getElementById('#js-new-answer');
addEventListener('click', getAnswer);

let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];
    }
    catch(err) {
        console.log(err);
        alert('failed to fetch the quote');
    }
}

function displayQuote(question) {
    const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = question;
}


function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

getQuote();

