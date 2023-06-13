import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textAreaElement = document.querySelector('textarea');
const wordCountElement = document.querySelector('.parrafo');
const characterCountElement = document.querySelector('.caracter');
const characterCountExcludingSpacesEelement = document.querySelector('.caractersolo');
const numberCountElement = document.querySelector('.cantnumeros');
const numberSumElement = document.querySelector('.totalnum');
const averageWordLengthElement = document.querySelector('.promlong');
const resetButton = document.getElementById('reset-button');

textAreaElement.addEventListener('keyup', function() {
  const text = textAreaElement.value;

  const wordCount = analyzer.getWordCount(text);
  wordCountElement.textContent = `Número de palabras : ${wordCount}`;

  const characterCount = analyzer.getCharacterCount (text);
  characterCountElement.textContent = `Número de caracteres : ${characterCount}`;
  
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces (text);
  characterCountExcludingSpacesEelement.textContent = `Número de caracteres sin espacios y signos de puntuación : ${characterCountExcludingSpaces}`;

  const numberCount = analyzer.getNumberCount(text);
  numberCountElement.textContent = `Cantidad de números: ${numberCount}`;

  const getNumberSum = analyzer.getNumberSum(text);
  numberSumElement.textContent = `Total de números: ${getNumberSum}`;

  const averageWordLength = analyzer.getAverageWordLength (text);
  averageWordLengthElement.textContent = `Promedio de longitud: ${averageWordLength}`;
})


document.addEventListener('DOMContentLoaded', () => {
  resetButton.addEventListener('click', () => {
  // acción de reset para el cuadro de texto y las 6 funciones
    textAreaElement.value = ''; 
    // Limpiar texArea
    wordCountElement.textContent = 'Número de palabras: 0'; 
    // Restablecer  a  0
    characterCountElement.textContent = 'Número de caracteres : 0'
    // Restablecer  a  0
    characterCountExcludingSpacesEelement.textContent = 'Número de caracteres sin espacios y signos de puntuación : 0'
    // Restablecer  a  0
    numberCountElement.textContent = 'Cantidad de números : 0'
    // Restablecer  a  0
    numberSumElement.textContent = 'Total de números : 0'
    // Restablecer  a  0
    averageWordLengthElement.textContent = 'Promedio de longitud : 0'
  });
})