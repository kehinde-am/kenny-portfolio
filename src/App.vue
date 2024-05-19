<!-- src/App.vue -->
<template>
  <div id="app" class="container">
      <header>
          <div class="logo">kehinde</div>
      </header>
      <main>
          <h1>HI THERE 👋, I'M</h1>
          <h2>kenny.</h2>
          <p class="title">DESIGNER + DEVELOPER</p>
          <p>I'm a design minded front-end developer based in Lagos, Nigeria.</p>
          <button class="hire-me">HIRE ME</button>
      </main>
      <aside class="sidebar">
          <div class="decorative-lines"></div>
      </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
  color: #3e03ff;
  font-family: 'Poppins', sans-serif;
}

header .logo {
  color: rgb(26, 1, 252);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

main h1 {
  font-size: 1.2rem;
  margin: 0;
}

main h2 {
  font-size: 3rem;
  margin: 0.5rem 0;
}

.title {
  color: #3e03ff;
  font-size: 1rem;
  margin: 1rem 0;
}

.hire-me {
  background-color: #3e03ff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
