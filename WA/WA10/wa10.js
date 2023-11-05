const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a swim to cool off. He swam so far that he ended up at :inserty:, they caught their breath for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertx = ["Paul Rudd", "Matthew McConaughey", "Miles Teller"];
const inserty = ["the North Pole", "Disneyland", "Atlantis"];
const insertz = ["spontaneously combusted", "finished the swim and took a long nap", "turned into a shark and swam away"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertx);
const yItem = randomValueFromArray(inserty);
const zItem = randomValueFromArray(insertz);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("us").checked) {
    const weight = Math.round(300) + " pounds";
    newStory = newStory.replace("21 stone", weight);
    const temperature =  Math.round(94) + " fahrenheit";
    newStory = newStory.replace("34 celsius", temperature);
  }

  if(document.getElementById("uk").checked) {
    const weight2 = Math.round(300/14) + " stone";
    newStory = newStory.replace("300 pounds", weight2);
    const temperature2 =  Math.round((94-32)*(5/9)) + " celsius";
    newStory = newStory.replace("94 fahrenheit", temperature2);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}