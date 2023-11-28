const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo = 'The kittens are called ';
const requestURL = 'quiz13.json'; // Replace with the correct path to your JSON file

fetch(requestURL)
  .then(response => response.json())
  .then(data => displayCatInfo(data));

function displayCatInfo(catData) {
  for (let i = 0; i < catData.mothers.length; i++) {
    motherInfo += catData.mothers[i];
    if (i < catData.mothers.length - 1) {
      motherInfo += ', ';
    } else {
      motherInfo += ' and ';
    }
  }

  let totalKittens = 0;
  let maleKittens = 0;
  let femaleKittens = 0;

  for (let mother of catData.mothers) {
    for (let kitten of mother.kittens) {
      totalKittens++;
      if (kitten.gender === 'male') {
        maleKittens++;
      } else if (kitten.gender === 'female') {
        femaleKittens++;
      }
    }
  }

  kittenInfo += `${totalKittens} kittens in total, ${maleKittens} males, and ${femaleKittens} females.`;

  // Set the text content inside the function
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;

  // Append paragraphs to the section
  section.appendChild(para1);
  section.appendChild(para2);
}