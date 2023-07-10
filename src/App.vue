<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <body>
      <RouterView />
  </body>
</div>
</template>

<style scoped>
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>