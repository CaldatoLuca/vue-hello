# Vue Hello

_HTML+css(bootstrap)+js(vue js)_

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

## Soluzione

**Collego vue js al file html e js**

```html
<div id="app">{{ message }}</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Inserisco nel file html lo script (come per bootstrap)

All' interno del div con id 'app' potrò usufruire dei vantaggi di vue (id 'app' che è uguale/richiamato dalla funzione `.mount` nel file js)

```js
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");
```

Inizializzo createApp e sfrutto le sue proprietà.

In `data()` inizializzo le mie 'variabili' (message viene richiamato nell' html tramite interpolazione {{}})

Se cambio il valore di message cambia anche nel file html

**Inserisco un titolo nel file html, usando i data()**

```html
<div id="app">
  <h1>{{ message }}</h1>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

```js
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Prova titolo",
    };
  },
}).mount("#app");
```

Tramite interpolazione {{}} inserisco il valore di message nell' h1.

**Uso v-bind per dare classi al titolo**

```html
<div id="app">
  <h1 class="text-primary" :class="h1Style">{{ message }}</h1>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

```js
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Prova titolo",
      h1Style: "fw-bold mb-4",
    };
  },
}).mount("#app");
```

Il risultato di v-bind è: ` <h1 class="text-primary fw-bold mb-4">{{ message }}</h1>`

Si richiama con `v-bind:class="..."` oppure solo coi : `:class="..."`

NB

v-bind si può usare su tutti i tag

```html
<img class="img-fluid" :src="imgSrc" :alt="imgAlt" />
```

```js
createApp({
  data() {
    return {
      imgSrc: "img/img1.jpg",
      imgAlt: "Immagine Copertina",
    };
  },
}).mount("#app");
```
