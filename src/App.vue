<template>
  <div id="app" class="min-h-screen flex flex-col bg-white text-blue-900">
    <nav class="bg-black text-white py-3 fixed w-full z-20">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="text-2xl font-bold">Ke.</div>
        <ul class="hidden md:flex space-x-6">
          <li>
            <a href="#" class="hover:text-blue-800">HOME</a>
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
        <button @click="toggleMenu" class="md:hidden focus:outline-none text-2xl text-white p-2 z-30">
          <span v-if="menuOpen">✖</span>
          <span v-else>☰</span>
        </button>
      </div>
      <div v-if="menuOpen" class="md:hidden absolute top-0 left-0 w-full bg-black text-white z-20 px-4 py-3">
        <ul class="flex flex-col space-y-6">
          <li>
            <a href="#home" @click="toggleMenu" class="block hover:text-blue-800">HOME</a>
          </li>
          <li>
            <a href="#about" @click="toggleMenu" class="block hover:text-blue-800">ABOUT</a>
          </li>
          <li>
            <a href="#projects" @click="toggleMenu" class="block hover:text-blue-800">PROJECTS</a>
          </li>
          <li>
            <a href="#skills" @click="toggleMenu" class="block hover:text-blue-800">SKILLS</a>
          </li>
          <li>
            <a href="#contact" @click="toggleMenu" class="block hover:text-blue-800">CONTACT</a>
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

<style scoped>
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

button {
  color: white;
}

button span {
  display: block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-color: black; 
  
}
</style>
