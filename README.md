# Analizador de texto

## Índice

* [1. Descripción de un analizador de texto](#1-Descripción-de-un-analizador-de-texto)
* [2. Objetivos del proyecto](#2-Objetivos-del-proyecto)
* [3. Características de un analizador de texto](#3-Características-de-un-analizador-de-texto)
* [4. Funcionalidades](#4-Funcionalidades)
* [5. Acceso al proyecto](#5-Acceso-al-proyecto)
* [6. Tecnologías utilizadas](#6-Tecnologías-utilizdas)
* [7. Desarrolladora](#7-Desarrolladora)
* [8. Bibliografía](#8-Bibliografía)

***

## 1. Descripción de un analizador de texto


Un analizador de texto es una herramienta o programa informático diseñado para examinar y procesar el contenido textual con el fin de extraer información significativa y realizar diversas operaciones, como la identificación de palabras clave, el análisis de sentimientos, el etiquetado gramatical, la detección de entidades nombradas, entre otras tareas relacionadas con el procesamiento del lenguaje natural (NLP, por sus siglas en inglés).

Estos analizadores utilizan algoritmos y técnicas avanzadas de procesamiento del lenguaje natural para comprender y extraer información relevante del texto. Pueden aplicarse en una amplia variedad de dominios, como análisis de opiniones en redes sociales, clasificación de documentos, extracción de información en bases de datos, traducción automática, entre otros.

Es útil para cualquier tipo de escritor que escribe textos con un determinado número mínimo y/o máximo de palabras. Ayuda a los escritores a identificar la repetición innecesaria de algunas palabras y promueve una mejor armonización de la terminología utilizada. 

## 2. Objetivos del proyecto

El principal ojetivo de este analizador de texto 

![Una lupa sobre texto de libro](https://github.com/Laboratoria/bootcamp/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_



## 3. Características de un analizador de texto

Tokenización: El analizador de texto divide el texto en unidades más pequeñas llamadas tokens. Estos tokens pueden ser palabras individuales, frases, oraciones o incluso caracteres. La tokenización es una etapa fundamental para el análisis y procesamiento posterior del texto.

Etiquetado gramatical: Un analizador de texto puede asignar etiquetas gramaticales a cada token en el texto, como nombres, verbos, adjetivos, etc. Esto ayuda a comprender la estructura gramatical y sintáctica del texto.

Análisis de sentimientos: Algunos analizadores de texto tienen la capacidad de analizar el tono emocional o la actitud expresada en el texto. Pueden identificar si el texto tiene una connotación positiva, negativa o neutral, lo que es útil en aplicaciones como el análisis de opiniones en redes sociales, comentarios de clientes, etc.

Reconocimiento de entidades nombradas (NER): Un analizador de texto puede identificar y clasificar entidades nombradas en el texto, como nombres de personas, organizaciones, lugares, fechas, etc. Esto es útil para la extracción de información y la indexación de documentos.

Extracción de información: Un analizador de texto puede extraer información específica del texto, como relaciones entre entidades, datos estructurados, eventos, etc. Esto ayuda a organizar y extraer conocimientos significativos del texto.


## 4. Funcionalidades

* Recuento de palabras: la aplicación debe poder contar el número de palabras en el texto de entrada y mostrar este recuento al usuario

* Recuento de caracteres: la aplicación debe poder contar el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y mostrar este recuento al usuario.

* Recuento de caracteres excluyendo espacios y signos de puntuación: la aplicación debe poder contar el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento al usuario.

* Recuento de números: la aplicación debe contar cúantos números hay en el texto de entrada y mostrar este recuento al usuario.

* Suma total de números: la aplicación debe sumar todos los números que hay en el texto de entrada y mostrar el resultado al usuario.
Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto de entrada y mostrársela al usuario.

* Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto de entrada y mostrársela al usuario.

## 5. Acceso al proyecto

A continuación encontrarás el link para poderacceder a un analizador de texto que te ayudará a conocer lo necesario sobre tus textos.

### Acceso

  - [ ] Analizador de texto
  [`Analizador`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)


## 6. Tecnologías utilizadas

Para el desarrollo de este proyecto se utilizó:

* Visual studio code para el desarrollo de todo el código por medio de java script, HTML y CSS.
* Github Pages para desplegar nuestro sitio web.

## 7. Desarrolladora

### Prepara tu PC para trabajar

Antes de comenzar instala lo siguiente:

1. [Node.js](https://nodejs.org/)
2. [git](https://git-scm.com/download/) Si estas en Linux es muy probable que
  ya este instalado 👀.
  Para conocer más de git visita
  [este enlace](https://curriculum.laboratoria.la/es/topics/scm/01-git)
3. Un editor de código, te sugerimos [Code](https://code.visualstudio.com/)

Después en [GitHub](https://github.com/):

1. Crear una cuenta. Conoce más de GitHub en este
  [link](https://curriculum.laboratoria.la/es/topics/scm/02-github/01-github)
2. Realiza un fork de este proyecto
3. Configura tu SSH Key  en GitHub. Puedes revisar este
[video](https://www.youtube.com/watch?v=g0ZV-neSM7E) o
[artículo](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Luego en una [shell](https://curriculum.laboratoria.la/es/topics/shell)
ejecuta lo siguiente. Si estas en Windows puedes usar Git Bash:

1. Clona el fork en tu PC
2. Ubica la shell en el proyecto que clonaste
3. Instala las dependencias del proyecto con `npm install`
4. Instala `playwright` con `npx playwright install chromium --with-deps`
5. Para arrancar el servidor web `npm start` y dirígete a
   `http://localhost:3000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-text-analyzer](https://claseslaboratoria.slack.com/archives/C058GP6K9NY)

## 8. Bibliografía

*Jurafsky, D., & Martin, J. H. (2019). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics, and Speech Recognition (3rd ed.). Pearson.
*Manning, C. D., & Schütze, H. (1999). Foundations of Statistical Natural Language Processing. MIT Press.
*Bird, S., Klein, E., & Loper, E. (2009). Natural Language Processing with Python. O'Reilly Media.
