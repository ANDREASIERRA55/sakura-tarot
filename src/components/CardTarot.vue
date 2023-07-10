<script setup>
import { ref, onMounted } from "vue";
import tarotServices from "../services/TarotServices.js";

const state = ref([]);
const selectedCards = ref([]);
const showResetButton = ref(false);

onMounted(async () => {
  const cardsData = await tarotServices();
  state.value = cardsData.map((card) => ({ ...card, isRevealed: false }));
  console.log(cardsData);
});

const revelarCarta = (card) => {
  if (!card.isRevealed && selectedCards.value.length < 3) {
    card.isRevealed = true;
    selectedCards.value.push(card);

    if (selectedCards.value.length === 3) {
      showResetButton.value = true;
    }
  }
};

const reset = () => {
  state.value.forEach((card) => {
    card.isRevealed = false;
  });
  selectedCards.value = [];
  showResetButton.value = false;
};
</script>

<template>
  <div>
    <div class="selected-cards" v-if="selectedCards.length === 3">
      <div class="selected-card">
        <h3>PASADO</h3>
        <img :src="selectedCards[0].sakuraCard" :alt="selectedCards[0].image" />
        <div class="meaning">{{ selectedCards[0].meaning }}</div>
      </div>
      <div class="selected-card">
        <h3>PRESENTE</h3>
        <img :src="selectedCards[1].sakuraCard" :alt="selectedCards[1].image" />
        <div class="meaning">{{ selectedCards[1].meaning }}</div>
      </div>
      <div class="selected-card">
        <h3>FUTURO</h3>
        <img :src="selectedCards[2].sakuraCard" :alt="selectedCards[2].image" />
        <div class="meaning">{{ selectedCards[2].meaning }}</div>
      </div>
      <div class="reset-button" v-if="showResetButton">
        <button @click="reset">Reset</button>
      </div>
    </div>
    <div class="card-container">
      <div
        v-for="card in state"
        :key="card.id"
        @click="revelarCarta(card)"
        class="card"
      >
        <div v-if="!card.isRevealed">
          <img
            src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
            alt="Reverso carta"
          />
        </div>
        <div v-else>
          <img :src="card.sakuraCard" :alt="card.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 3px;
}

.selected-cards {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}

.selected-card {
  text-align: center;
}
h3 {
  color: #faebd7;
  font-size: 25px;
}
.meaning {
  color: #faebd7;
  margin-top: 10px;
  font-size: 25px;
}

.reset-button {
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #cf137180;
  color: #faebd7;
  width: auto;
  align-self: center;
  display: flex;
}
</style>