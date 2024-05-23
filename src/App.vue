<!-- src/App.vue -->
<template>
  <div id="app" class="min-h-screen flex flex-col bg-white text-blue-900">
    <nav class="bg-black text-white py-3 fixed w-full z-20">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="text-2xl font-bold">Ke.</div>
        <ul class="hidden md:flex space-x-6">
          <li>
            <a href="#home" class="hover:text-blue-800">HOME</a>
          </li>
          <li>
            <a href="#about" class="hover:text-blue-800">ABOUT</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-blue-800">PROJECTS</a>
          </li>
          <li>
            <a href="#skills" class="hover:text-blue-800">SKILLS</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-blue-800">CONTACT</a>
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
        class="md:hidden absolute top-0 left-0 w-full bg-black text-white z-10 px-4"
      >
        <ul class="flex flex-col space-y-6 py-6">
          <li>
            <a href="#home" class="hover:text-blue-800" @click="toggleMenu">HOME</a>
          </li>
          <li>
            <a href="#about" class="hover:text-blue-800" @click="toggleMenu">ABOUT</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-blue-800" @click="toggleMenu">PROJECTS</a>
          </li>
          <li>
            <a href="#skills" class="hover:text-blue-800" @click="toggleMenu">SKILLS</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-blue-800" @click="toggleMenu">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="flex-grow pt-16"></router-view>
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
