
<template>
  <div class="home flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
    <h1 class="text-4xl mb-2">HI THERE 👋, I'M</h1>
    <h2 class="text-6xl mb-2 font-bold">kehinde.</h2>
    <p class="text-lg mb-4 font-bold">SOFTWARE DEVELOPER</p>
    <p class="text-sm mb-6">I'm a design minded front-end developer based in Lagos, Nigeria.</p>
    <button
      class="bg-blue-800 text-white px-6 py-2 text-lg font-semibold rounded"
      v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }"
    >
      HIRE ME
    </button>

    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

<script lang="ts">
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Skills,
    Contact,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
