
<template>
  <div class="home flex flex-col items-start justify-center min-h-screen text-blue-800 px-8 bg-blue mt-10">
    <section class="intro mb-16">
      <p class="text-lg">Hi, my name is</p>
      <h1 class="text-6xl font-bold text-blue-700">Kehinde Amusa.</h1>
      <h3 class="text-5xl font-bold text-gray-800">I embrace the digital world.</h3>
      <p class="text-lg mt-4 text-blue-700">
        I can help you build a product, feature, or website. Look through my work and experience!
        <p>If you are interested and need help on a project,
         I am <a href="#" class="text-blue-800 underline">available for hire</a>.</p>
      </p>
    </section>
    <button class="bg-blue-800 text-white px-6 py-2 text-lg font-semibold rounded mb-12">
      Check my work
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
  text-align: left;
}

.intro h1 {
  color: #1e00ff; /* Custom blue color */
}

.intro h3 {
  color: #000000; /* Custom gray color */
}

.intro p {
  color: #000000; /* Custom gray color */
}
</style>
