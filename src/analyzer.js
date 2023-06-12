//import analyzer from './analyzer.js';

const analyzer = {
  getWordCount: function(text){
  // Elimina los caracteres especiales y cuenta solo las palabras.
  // If se utiliza para cuando no haya ninguna palabra en el textArea, se regresé la cuenta a cero ya que el split split(/\s+/) divide en palabras el texto.
  //condición que verifica si el resultado de la cadena es igual a una vacía que retornará 0.
    if (text.trim() ===''){
      return 0;
    }
    //con trim() se elimina cualquier espacio en blanco adicional al inicio o al final del texto 
    //esto garantiza que no se cuenten espacios en blanco innecesarios alrededor del texto
    const cleanedText = text.trim();
    //El texto limpio se divide en palabras utilizando el método split(/\s+/).
    //Aquí se utiliza una expresión regular /\s+/ que coincide con uno o más espacios en blanco
    //esto divide el texto en palabras basándose en los espacios en blanco encontrados.
    //Las palabras se almacenan en el arreglo word
    const words = cleanedText.split(/\s+/);
    //Se devuelve la longitud del arreglo words, que representa el número de palabras en el texto.
    return words.length;
  },
  getCharacterCount: function(text) {
    //cuenta los caracteres inlcuyendo espacios y números
    //utilizando el método trim() se elimina cualquier espacio en blanco adicional al inicio o al final del texto 
    //esto garantiza que no se cuenten espacios en blanco innecesarios alrededor del texto.
    const cleanedText = text.trim();
    //Length devuelve la cantidad de caracteres en el texto, incluyendo espacios en blanco y signos de puntuación.
    return cleanedText.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //replace para eliminar los espacios y signos de puntuación y se utiliza junto a una expresión.
    //[^\w\s] coincide con cualquier caracter que no sea alfanumérico ni un espacio en blanco.
    //gi indica que se deben realizar coincidencias globales (en todo el texto) y sin distinguir entre mayúsculas y minúsculas.
    ///\s+/g para eliminar los espacios en blanco adicionales.
    //\s+ coincide con uno o más espacios en blanco, al reemplazarlos con una cadena vacía, se eliminan del texto.
    const cleanedText = text.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
    //se devuelve la longitud del texto resultante, que representa la cantidad de caracteres excluyendo espacios y signos de puntuación.
    return cleanedText.length;
  },
  getNumberCount: (text) => {
    //retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const cleanedText = text.trim();
    const numbers = cleanedText.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const cleanedText = text.trim();
    const words = cleanedText.split(/\s+/);
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      //isnan significa que no es un número
      if (!isNaN(words[i])) {
        sum += Number(words[i]);
      }
    }
    return sum;
  },
  getAverageWordLength: (text) => {    
    //retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  },
};
export default analyzer;