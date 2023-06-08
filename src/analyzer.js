//import analyzer from './analyzer.js';

const analyzer = {
      getWordCount: function(text){
      // Eliminar los caracteres especiales y contar las palabras
      //Se elimina cualquier espacio en blanco adicional al inicio o al final del texto utilizando el método trim() 
      //esto garantiza que no se cuenten espacios en blanco innecesarios alrededor del texto.
      const cleanedText = text.trim();
      //El texto limpio se divide en palabras utilizando el método split(/\s+/)
      //Aquí se utiliza una expresión regular /\s+/ que coincide con uno o más espacios en blanco.
      // Esto divide el texto en palabras basándose en los espacios en blanco encontrados.
      //las palabras se almacenan en el arreglo word
      const words = cleanedText.split(/\s+/);
      //se devuelve la longitud del arreglo words, que representa el número de palabras en el texto.
      return words.length;
    },

       getCharacterCount: function(text) {
        //cuenta los caracteres
        const cleanedText = text.trim();
        return text.length;
      },
  
      getCharacterCountExcludingSpaces: (text) => {
        //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
        
      },
      getAverageWordLength: (text) => {    
        //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
      },
      getNumberCount: (text) => {
        //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
      },
      getNumberSum: (text) => {
        //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
      },
    };    




export default analyzer;
