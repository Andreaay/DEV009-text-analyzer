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

Recuento de palabras: la aplicación debe poder contar el número de palabras en el texto de entrada y mostrar este recuento al usuario
Recuento de caracteres: la aplicación debe poder contar el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y mostrar este recuento al usuario.
Recuento de caracteres excluyendo espacios y signos de puntuación: la aplicación debe poder contar el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento al usuario.
Recuento de números: la aplicación debe contar cúantos números hay en el texto de entrada y mostrar este recuento al usuario.
Suma total de números: la aplicación debe sumar todos los números que hay en el texto de entrada y mostrar el resultado al usuario.
Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto de entrada y mostrársela al usuario.

## 5. Criterios de aceptación mínimos del proyecto

A continuación encontrarás los criterios de aceptación mínimos del proyecto
relacionados con cada objetivo de aprendizaje.

### HTML

* **Uso de HTML semántico**

  - [ ] La aplicación tiene un encabezado conformado por un
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  que es padre de un
  [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
  con texto `Analizador de texto`. Para que puedas practicar más, estos
  elementos no pueden tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  con un el atributo `name` en el valor `user-input` para permitir al usuario
  ingresar un texto. Para que puedas practicar más, este elemento no puede
  tener atributos `id`, ni `class`.

  - [ ] La aplicación usa un
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  con 6 hijos [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li),
  uno para mostrar cada métrica.  Para que puedas practicar más, estos
  elementos no pueden tener atributos `id` ni `name`.

  - [ ] La aplicación tiene un pie de página conformado por un
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
  que es padre de un
  [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
  que tiene como texto el nombre de la estudiante desarrolladora de la aplicación.
  Para que puedas practicar más, estos elementos no pueden
  tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button` para permitir al usuario,
  mediante un clic, limpiar el contenido de la caja de texto.

### CSS

* **Uso de selectores de CSS**  

  - [ ] La aplicación usa
  [`selectores CSS de tipo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#type_selectors)
  para darle estilo al
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  y al
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).
  
  - [ ] La aplicación usa
  [`selectores CSS de class`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  para darle estilo al
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  descrito anteriormente.
  y sus hijos
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).
  
  - [ ] La aplicación usa
  [`selectores de atributo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  para darle estilo al
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  usando el atributo `name`.

  - [ ] La aplicación usa
  [`selectores CSS de ID`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors)
  para darle estilo al
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button`.

* **Modelo de caja (box model): border, margen, padding**

  - [ ] Las
  [`clases css`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  de los
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  hijos del
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  definen un estilo usando las propiedades del
  [modelo de caja](https://cssreference.io/box-model/),
  ([`background`](https://cssreference.io/backgrounds/),
  `border`,
  [`margin`](https://cssreference.io/property/margin/),
  [`padding`](https://cssreference.io/property/padding/)).

### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa el
  [`selector del DOM querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

  - [ ] La aplicación usa el
  [`selector del DOM getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `keyup` del `<textarea>` para actualizar las métricas
  cuando se haga escriba en el cuadro de texto.

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `click` del `<button>` que limpia el contenido de la
  caja de texto.

* **Manipulación dinámica del DOM**
  - [ ] La aplicación actualiza el atributo
  [`textContent`](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  o
  [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  de los `<li>` que mostrar las métricas del texto.

### JavaScript

* **Tipos de datos primitivos**

  - [ ] La aplicación convierte valores tipo `string` a tipo `number`.

* **Strings (cadenas de caracteres)**

  - [ ] La aplicación usa métodos para manipular strings como
  [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split),
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
  o
  [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con
  [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  y
  [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

  - [ ] La aplicación NO declara variables con  `var`.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
  [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  para evaluar condiciones.

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement
  [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  para crear un bucle.

* **Funciones (params, args, return)**

  - [ ] El objeto `analyzer` contiene un método `getWordCount` para calcular el
  recuento de palabras de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCount` para calcular
  el recuento de caracteres de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces`
  para calcular el recuento de caracteres excluyendo espacios y signos de
  puntuación de un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersCount` para contar
  cúantos números hay en un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersSum` para la suma
  longitud media de los números en un texto.

  - [ ] El objeto `analyzer` contiene un método `getAverageWordLength` para
  calcular la longitud media de las palabras en un texto.

* **Pruebas unitarias (unit tests)**

  - [ ] Se pasan todas las pruebas unitarias.

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usan
  [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  y
  [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  para importar y exportar valores desde un modulo JavaScript.

* **Uso de linter (ESLINT)**

  - [ ] Al ejecutar el linter no se muestran errores de formato y estilo.

* **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  - [ ] En el código se utilizan identificadores descriptivos para variables
  y funciones.

### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  - [ ] La estudiante creó una cuenta en Github.

  - [ ] La estudiante configuró su cuenta de Github con una llave SSH.

* **Git: Control de versiones con git (clone, add, commit, push)**

  - [ ] La estudiante creó un _fork_ para su proyecto.

  - [ ] La estudiante clonó su repositorio usando una llave SSH.

  - [ ] La estudiante creó _commits_ y los guardó en Github.

* **GitHub: Despliegue con GitHub Pages**

  - [ ] La aplicación está desplegada en Github Pages.

### Centrado en el usuario

* **Diseñar y desarrollar un producto o servicio poniendo a las
usuarias en el centro**

### Diseño de producto

* **Diseñar en distintos niveles de fidelidad**

  - [ ] La estudiante creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

* **Seguir los principios básicos de diseño visual**

  - [ ] Se tuvieron en cuenta las reglas básica del
  [diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
  para diseñar la UI (interfáz gráfica)

## 6. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de aceptación.

### Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En otras palabras, se prueba cada unidad de código por
separado para asegurarse de que cumpla con los requisitos y especificaciones.

Las pruebas unitarias de este proyecto ejecutarán los métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` y `getAverageWordLength` con diferentes argumentos y se
confirmará que los valores retornados sean los esperados.

Puedes ejecutar estas pruebas con el comando `npm run test` como se muestra
en la siguiente imagen:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas unitarias cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y
las [reglas recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Pruebas de criterios mínimos de aceptación

Estas pruebas analizarán tus archivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
y
[`style.css`](src/style.css)
para verificar que cumples con los
[criterios minimos de aceptacion](#5-objetivos-de-aprendizaje-y-criterios-de-aceptación-mínimos-del-proyecto).
Cada criterio esta relacionado con un objetivo de aprendizaje.

Puedes ejecutar todas estas pruebas con el comando `npm run test:oas`
como se muestra en la siguiente imagen:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de
manera individual con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción del usuario con la aplicación, para asegurarse de que todas las
partes del sistema funcionan correctamente en conjunto.

Puedes ejecutar estas pruebas con el comando `npm run test:e2e` como se muestra
en la siguiente imagen:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### Github actions

Este repositorio usa una GitHub Action para ejecutar automáticamente
las pruebas unitarias, pruebas de criterios mínimos de aceptación y
y pruebas end-to-end cada vez que se hagas un _push_ en la rama
_main_ de tu repositorio.

Puedes consultar el resultado de esta Github Action
en la pestaña _Actions_ de tu repositorio en Github
como se muestra en la siguiente imagen:

![Github Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "Github Action")

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
