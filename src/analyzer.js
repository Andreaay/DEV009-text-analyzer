//import analyzer from './analyzer.js';

const analyzer = {
  getWordCount(text) {
      // Eliminar los caracteres especiales y contar las palabras
      const cleanedText = text.trim();
      const words = cleanedText.split(/\s+/);
      return words.length;
  },
};

export default analyzer;
