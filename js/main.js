"use script";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Prova titolo",
      h1Style: "fw-bold text-center",
    };
  },
}).mount("#app");
