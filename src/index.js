import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector('.textarea');
const wordCountElement = document.querySelector('.parrafo');
const characterCountElement = document.querySelector('.caracter');
const characterCountExcludingSpacesEelement = document.querySelector('.caractersolo');
const numberCountElement = document.querySelector('.cantnumeros');
const numberSumElement = document.querySelector('.totalnum');
const averageWordLengthElement = document.querySelector('.promlong');
const resetButton = document.querySelector('#reset-button');

textArea.addEventListener('input', () => {
  const text = textArea.value;

  const wordCount = analyzer.getWordCount(text);
  wordCountElement.textContent = `Número de palabras: ${wordCount}`;

  const characterCount = analyzer.getCharacterCount (text);
  characterCountElement.textContent = `Número de caracteres : ${characterCount}`;
  
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces (text);
  characterCountExcludingSpacesEelement.textContent = `Número de caracteres sin espacios y signos de puntuación : ${characterCountExcludingSpacesEelement}`;


})


document.addEventListener('DOMContentLoaded', () => {
resetButton.addEventListener('click', () => {
  // acción de reset para el cuadrode texto y las 6 funciones
  textArea.value = ''; // Limpiar texArea
  wordCountElement.textContent = 'Número de palabras: 0'; // Restablecer  a 0
});
})