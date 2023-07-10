# sakura-tarot

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# sakura-tarot

CÓDIGO SAKURA TAROT 

TarotServices.js

Se define una función llamada tarotServices que realiza una solicitud HTTP a una API y devuelve los datos obtenidos. Aquí está el desglose paso a paso:

1. Se exporta la función tarotServices como la exportación predeterminada. Esto significa que puedes importar esta función en otros archivos utilizando import tarotServices from '../services/TarotServices.js'.

2. La función tarotServices está definida como asíncrona, lo que indica que contiene operaciones asincrónicas que se manejarán utilizando await.

3. Dentro del bloque try, se realiza una solicitud HTTP a la URL 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/' utilizando la función fetch. La función fetch devuelve una promesa que se resuelve con la respuesta HTTP.

4. La respuesta HTTP se almacena en la constante response.

5. A continuación, se utiliza await para esperar a que la respuesta se convierta en formato JSON utilizando el método response.json(). Esto también devuelve una promesa que se resuelve con los datos JSON obtenidos.

6. Los datos JSON obtenidos se almacenan en la constante data.

7. Finalmente, se devuelve data como el resultado de la función tarotServices.

8. Si se produce un error durante la solicitud HTTP o el análisis del JSON, se captura el error en el bloque catch. El error se muestra en la consola utilizando console.log().

En resumen, este código define una función asincrónica tarotServices que realiza una solicitud HTTP a una URL y devuelve los datos obtenidos de la respuesta JSON. Si se produce algún error, se muestra en la consola.


Componente CardTarot,vue - JS

1. Se importan las funciones ref y onMounted desde el módulo vue. Estas funciones son parte del sistema reactivo de Vue y se utilizarán para crear referencias reactivas y ejecutar código cuando el componente se monte en el DOM.

2. Se importa la función tarotServices desde el archivo TarotServices.js. Esta función es la que realiza la solicitud HTTP a la API y devuelve los datos del tarot.
“se crea una consta ref que solicita Http a la API”

3. Se crea una referencia reactiva llamada state y se inicializa como una matriz vacía [ ]. Esta referencia se utilizará para almacenar los datos del tarot una vez que se obtengan de la API.
“ALMACENA LOS DATOS”

4. Se crea una referencia reactiva llamada selectedCards y se inicializa como una matriz vacía [ ]. Esta referencia se utilizará para almacenar las cartas seleccionadas por el usuario.
“ESTA CONST ALMACENA LOS DATOS SELECCIONADOS”

5. Se crea una referencia reactiva llamada showResetButton y se inicializa como false. Esta referencia se utilizará para controlar la visibilidad del botón de reinicio.
“SE UTILIZA ESTA COSNT PARA  EL BOTOS DE REINICIO”

6. Se utiliza el hook onMounted para ejecutar el código dentro de su callback cuando el componente se monte en el DOM. Dentro de este callback, se realiza lo siguiente:

	•	Se llama a la función tarotServices utilizando await para esperar a que la función se resuelva y devuelva los datos del tarot.
	•	
	•	Los datos del tarot se asignan a la referencia reactiva state.value. Antes de asignarlos, se utiliza el método map para agregar una propiedad isRevealed a cada objeto de carta y se establece inicialmente en false. Esto se hace para controlar si una carta está revelada o no.
	•	
	•	Se muestra en la consola los datos del tarot utilizando console.log().

7. Se define la función revelarCarta que toma una carta como parámetro. Esta función se ejecutará cuando el usuario haga clic en una carta para revelarla. Dentro de la función se realizan las siguientes comprobaciones:

	•	Se verifica si la carta no está revelada (!card.isRevealed) y si el número de cartas seleccionadas es menor a 3 (selectedCards.value.length < 3).
	•	
	•	Si ambas condiciones se cumplen, se establece la propiedad isRevealed de la carta en true para revelarla.
	•	
	•	La carta se agrega a la matriz selectedCards.value para almacenarla como una carta seleccionada.
	•	
	•	Si el número de cartas seleccionadas es igual a 3 (selectedCards.value.length === 3), se establece la propiedad showResetButton.value en true para mostrar el botón de reinicio.

8. Se define la función reset que se ejecutará cuando el usuario haga clic en el botón de reinicio. Dentro de la función se realiza lo siguiente:

	•	Se recorre cada carta en la matriz state.value y se establece la propiedad isRevealed en false para ocultar todas las cartas.
	•	
	•	Se vacía la matriz selectedCards.value para eliminar todas las cartas seleccionadas.
	•	
	•	Se establece la propiedad showResetButton.value en false para ocultar el botón de reinicio.

En resumen, este código del componente CardTarot inicializa las referencias reactivas y realiza una solicitud HTTP para obtener los datos del tarot. Permite al usuario revelar hasta tres cartas y muestra un botón de reinicio cuando se han seleccionado tres cartas. La función reset permite al usuario reiniciar el estado del componente, ocultando las cartas reveladas y vaciando la selección de cartas.


Componente CardTarot,vue - HTML

<div>: El componente está envuelto en un contenedor principal.

<div class="selected-cards" v-if="selectedCards.length === 3">: Este bloque se muestra solo cuando se han seleccionado tres cartas (selectedCards.length === 3). Contiene tres secciones de carta que representan el pasado, el presente y el futuro.

<div class="selected-card">: Cada sección de carta seleccionada contiene un título (<h3>) que indica el periodo de tiempo al que se refiere (pasado, presente o futuro), una imagen de la carta seleccionada y una descripción o significado de la carta.

<img :src="selectedCards[X].sakuraCard" :alt="selectedCards[X].image" />: Muestra la imagen de la carta seleccionada. X representa el índice de la carta en el array selectedCards. La propiedad sakuraCard es la URL de la imagen de la carta y la propiedad image es el texto alternativo de la imagen.

<div class="meaning">{{ selectedCards[X].meaning }}</div>: Muestra el significado de la carta seleccionada. X representa el índice de la carta en el array selectedCards.

<div class="card-container">: Este bloque contiene todas las cartas disponibles para seleccionar.

<div v-for="card in state" :key="card.id" @click="revelarCarta(card)" class="card">: Itera sobre cada objeto card en el array state y crea un elemento <div> con la clase "card" para representar cada carta. Se utiliza v-for para iterar dinámicamente sobre las cartas.

<div v-if="!card.isRevealed">: Dentro de cada carta, muestra una imagen de reverso de carta cuando la propiedad isRevealed de la carta es false.

<div v-else>: Dentro de cada carta, muestra la imagen de la carta seleccionada cuando la propiedad isRevealed de la carta es true.

<img :src="card.sakuraCard" :alt="card.image" />: Muestra la imagen de la carta cuando está revelada. card.sakuraCard es la URL de la imagen de la carta y card.image es el texto alternativo de la imagen.

<div class="reset-button" v-if="showResetButton">: Muestra un botón de reinicio solo cuando la propiedad showResetButton es true.

<button @click="reset">Reset</button>: El botón de reinicio que ejecuta la función reset cuando se hace clic en él.
Funciones y operaciones asíncronas

Una función asíncrona es aquella que puede ejecutar operaciones de forma asíncrona, lo que significa que no bloquea la ejecución del programa mientras espera que se completen ciertas tareas.

Normalmente, en JavaScript, las funciones se ejecutan de forma sincrónica, lo que significa que cada instrucción se ejecuta en orden, una tras otra, y el programa espera a que cada instrucción se complete antes de pasar a la siguiente. Sin embargo, hay situaciones en las que es necesario realizar tareas que llevan tiempo, como hacer una solicitud a una API o esperar la respuesta de una base de datos, y en esas situaciones las funciones asíncronas son útiles.

Una función asíncrona se define utilizando la palabra clave async antes de la declaración de la función. Esto indica que la función contiene operaciones asíncronas y puede utilizar la palabra clave await para esperar a que se completen esas operaciones antes de continuar con el resto del código.

El operador await se utiliza dentro de una función asíncrona para indicarle al programa que espere a que una operación asíncrona se complete antes de continuar. Cuando se encuentra la expresión await, la ejecución de la función se pausa y se espera a que la operación asíncrona se complete y devuelva un resultado. Una vez que se obtiene el resultado, la función continúa su ejecución.

Las operaciones asíncronas más comunes en JavaScript son las solicitudes HTTP a servidores, la lectura y escritura de archivos, el acceso a bases de datos y el uso de temporizadores (como setTimeout o setInterval). Al utilizar funciones y operaciones asíncronas, se puede lograr un mejor rendimiento y una mejor experiencia de usuario al evitar bloqueos y permitir que el programa continúe realizando otras tareas mientras espera que se completen las operaciones asíncronas.


Referencias reactivas

Las referencias reactivas en Vue 3 son un concepto fundamental dentro del sistema de reactividad de Vue. Permiten crear variables reactivas que pueden ser rastreadas por Vue y actualizar automáticamente los componentes que las utilizan cuando cambian sus valores.

Antes de Vue 3, se utilizaba el objeto data en los componentes para definir las propiedades reactivas. Sin embargo, en Vue 3 se introdujo una nueva forma de declarar variables reactivas utilizando la función ref.

Una referencia reactiva se crea utilizando la función ref(valorInicial). El argumento valorInicial es el valor inicial de la referencia reactiva. El valor inicial puede ser cualquier tipo de dato: un número, una cadena, un objeto, un arreglo, etc.

La función ref devuelve un objeto especial llamado "ref object" que tiene dos propiedades importantes: value y _rawValue. La propiedad value contiene el valor actual de la referencia reactiva, mientras que la propiedad _rawValue contiene el valor actual sin envolver (raw value), que es el valor real sin la envoltura especial que proporciona Vue.
La magia de las referencias reactivas ocurre cuando se accede o se actualiza la propiedad value de la referencia reactiva. Cuando se accede a value, Vue registra la dependencia entre el componente y la referencia reactiva. Esto significa que si el valor de la referencia reactiva cambia en el futuro, Vue sabrá que el componente debe actualizarse para reflejar ese cambio.

Para actualizar el valor de una referencia reactiva, se puede simplemente asignar un nuevo valor a su propiedad value. Cuando se hace esto, Vue se encarga de actualizar automáticamente los componentes que utilizan esa referencia reactiva.

Las referencias reactivas son especialmente útiles cuando se necesita realizar un seguimiento de variables que pueden cambiar con el tiempo, como el estado de un formulario, los datos obtenidos de una API o cualquier otra información que necesite ser reactiva en el contexto de un componente de Vue.


Hook onMounted

El hook onMounted en Vue 3 es una función que se utiliza para ejecutar un código específico cuando un componente se monta en el DOM.

En Vue, el proceso de montaje ocurre cuando un componente se inicializa y se adjunta al DOM, lo que significa que está listo para ser visualizado y interactuar con él. Durante el montaje, Vue realiza diversas tareas, como crear instancias del componente, renderizar su plantilla en el DOM y establecer las referencias reactivas.

El hook onMounted permite ejecutar código en el momento adecuado durante el ciclo de vida del componente. Se utiliza dentro del bloque <script setup> y se le proporciona una función de callback. Esta función se ejecutará automáticamente una vez que el componente se haya montado en el DOM.

Ejemplo de cómo se utiliza el hook onMounted:

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Código a ejecutar cuando el componente se monte en el DOM
  console.log('El componente se ha montado en el DOM');
});
</script>

En este ejemplo, la función de callback dentro de onMounted se ejecutará una vez que el componente se haya montado en el DOM. Puedes utilizar este hook para realizar diversas tareas relacionadas con el montaje, como inicializar datos, hacer solicitudes HTTP, suscribirte a eventos o cualquier otra operación que necesites realizar cuando el componente esté listo para interactuar con el DOM.

Es importante destacar que el hook onMounted solo se ejecuta una vez durante el ciclo de vida del componente, específicamente después de que el componente se haya montado en el DOM. Si necesitas ejecutar código cada vez que el componente se actualice, puedes utilizar otros hooks como onUpdated o watch.

VER “( LINEA 11 EN CardTarot.vue => ({ ...card, isRevealed: false })
Su nombre es “spread operator”  investigar
El mismo objeto modificado me haces un array nuevo.
hacer dos objetos y practicar.
Se usa el mismo array y se queda en otro objeto en memoria. 
https://keepcoding.io/blog/como-funciona-el-spread-operator-de-javascript/#:~:text=Con%20el%20s%C3%ADmbolo%20de%20tres,se%20parece%20al%20m%C3%A9todo%20object.
