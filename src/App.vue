<!-- src/App.vue -->
<template>
  <div id="app" class="min-h-screen flex flex-col bg-gradient-to-r from-purple-800 via-pink-800 to-red-800">
    <nav class="bg-black text-white py-3 fixed w-full z-20">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">Ke.</div>
        <ul class="hidden md:flex space-x-6">
          <li>
            <a href="#" class="hover:text-blue-800" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">HOME</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">ABOUT</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">PROJECTS</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">SKILLS</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">CONTACT</a>
          </li>
        </ul>
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="menuOpen"
        v-motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }"
        class="md:hidden absolute top-0 left-0 w-full bg-black text-white z-10"
      >
        <ul class="flex flex-col space-y-6 p-6">
          <li>
            <a href="#" class="hover:text-blue-800" @click="toggleMenu" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">HOME</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" @click="toggleMenu" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">ABOUT</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" @click="toggleMenu" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">PROJECTS</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" @click="toggleMenu" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">SKILLS</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-800" @click="toggleMenu" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex-grow flex items-center justify-center relative">
      <div class="text-left text-white relative z-10">
        <h1 class="text-3xl mb-2">HI THERE 👋, I'M</h1>
        <h2 class="text-6xl mb-2 font-bold">kehinde.</h2>
        <p class="text-white-800 text-lg mb-4 font-bold">SOFTWARE DEVELOPER</p>
        <p class="text-sm mb-6">I'm a design minded front-end developer based in Lagos, Nigeria.</p>
        <button
          class="bg-blue-800 text-white px-6 py-2 text-lg font-semibold rounded"
          v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }"
        >
          HIRE ME
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return {
      menuOpen,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
}

nav {
  position: fixed;
  width: 100%;
  z-index: 20;
}

main {
  min-height: 100vh;
}
</style>
