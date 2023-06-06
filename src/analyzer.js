import analyzer from './analyzer.js';
//const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
//const TEST_TEXT_NUMBERS = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
//const TEST_TEXT_DECIMALS = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
//const TEST_TEXT_NOT_A_NUMBER = 'Esto no es un número: 41u0003jot';

const analyzer = {
getWordCount: (text) => {
  const words = text.trim().split('  ');
  return words.filter((word) => word !== '').length;
},
};  
export default analyzer;
