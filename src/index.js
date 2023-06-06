import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const textArea = document.querySelector('textarea');
const getWordCount = document.querySelector('Parrafo');
const getCharacterCount = document.querySelector('');
const getCharacterCout = document.querySelector('');
const getCharacterCountExcludingSpaces = document.querySelector('');
const getNumberCount = document.querySelector('');
const getNumberSum = document.querySelector('');
const getAverageWordLength = document.querySelector('resetButton');

function getWordCount(aString) {
  return aString.trim().split(" ").length;
}
function update() {
  getWordCount.textArea = "Parrafo: " + getWordCount(textArea.value);
}
textArea.addEventListener("textArea", update);
update;
