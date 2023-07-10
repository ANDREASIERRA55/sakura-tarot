<script setup>
import CardTarot from "../components/CardTarot.vue";
</script>

<template>
  <body>
    <div>
      <h1>TAROT SAKURA</h1>
      <h2>* Elige 3 cartas PASADO, PRESENTE, FUTURO para ver tu mensaje *</h2>
      <CardTarot />
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

body {
  background-color: #080202;
}

h1 {
  display: flex;
  margin-top: 0.5rem;
  font-size: 45px;
  font-weight: bold;
  color: #101013;
  text-align: center;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 3px #cf137180;
  -webkit-text-fill-color: #cf137180;
  text-shadow: 2px 2px 5px #cf137180;
}

h2 {
  display: flex;
  margin-top: 0.5rem;
  font-size: 35px;
  font-weight: bolder;
  color: #ab226780;
  -webkit-text-fill-color: #b90e6380;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>