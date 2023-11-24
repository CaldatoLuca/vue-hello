"use script";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Prova titolo",
      containerStyle:
        "d-flex flex-column justify-content-center align-items-center vh-100",
      h1Style: "fw-bold mb-4",
      imgSrc: "img/img1.jpg",
      imgAlt: "Immagine Copertina",
    };
  },
}).mount("#app");
