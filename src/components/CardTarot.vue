<script setup>
import { ref, onMounted } from 'vue';

const flipped = ref(false);
const randomCardIndex = Math.floor(Math.random() * 55) + 1;
const randomCardImage = ref(`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${randomCardIndex}.jpg`);

const flipCard = () => {
  flipped.value = !flipped.value;
};

onMounted(() => {
  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('card-flipped', { detail: flipped.value }));
  }, 0);
});

</script>

<template>
  <div 
    class="card" 
    :class="{ 'card-flipped': flipped }" 
    @click="flipCard">

    <div class="card-front">
      <img :src="randomCardImage" alt="Carta de Tarot Sakura"/>
    </div>
    <div class="card-back">
      <img src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt="Reverso carta de Tarot Sakura"/>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 160px;
  height: 280px;
  perspective: 1000px;
  cursor: pointer;
  margin: 2px;
}

.card-flipped .card-front {
  transform: rotateY(180deg);
}

.card-flipped .card-back {
  transform: rotateY(0deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.card-front {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.card-back {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back img {
  max-width: 100%;
  max-height: 100%;
}
</style>