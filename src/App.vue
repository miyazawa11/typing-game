<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header>

  </header>
  <main>
    <RouterView class="game"/>
  </main>
  <footer>

  </footer>
</template>

<style scoped>
header{
  width: 100%;
  height: 150px;
}
main{
  width: 100%;
  margin: 0 auto;
}
.game{
  display: inline;
  margin: 0 auto;
  text-align: center;
}
footer{
  width: 100%;
  height: 150px;
}
</style>
