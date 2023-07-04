<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Card from "../components/CardTarot.vue";

const router = useRouter();
const cards = ref([]);

const fetchCards = async () => {
  try {
    const response = await fetch(
      "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"
    );
    const data = await response.json();
    cards.value = data;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

onMounted(fetchCards);

const handleCardFlipped = (card) => {
  card.flipped = true;
  const flippedCards = cards.value.filter((c) => c.flipped);
  if (flippedCards.length === 3) {
    const message = generateMessage(flippedCards);
    router.push({ name: "Message", params: { message } });
  }
};

const generateMessage = () => {
  // Lógica para generar el mensaje basado en las cartas seleccionadas
  return "Mensaje de las 3 cartas seleccionadas";
};
</script>

<template>
  <body>
    <div>
      <h1>TAROT SAKURA</h1>
      <h2>* Elige 3 cartas PASADO, PRESENTE, FUTURO para ver tu mensaje *</h2>
      <div class="card-container">
        <Card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @card-flipped="handleCardFlipped(card)"
        />
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #0a0909;
}
h1{
  display: flex;
  margin-top: 0.5rem;
  font-size: 45px;
  font-weight: bold;
  color: #101013;
  text-align: center;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 3px #b90e6380;
  -webkit-text-fill-color: #b90e6380;
  text-shadow: 2px 2px 5px #b90e6380;
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

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 3px;
}
</style>