<!-- src/components/About.vue -->
<template>
  <section id="about" class="py-20 bg-white text-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">About Me</h2>
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <div class="md:w-2/3">
          <p class="mb-4">
            I am Okoye Charles, a frontend/backend developer based in Nigeria. I spend most of my time designing graphics, coding up things for the web, and learning algorithms.
          </p>
          <p class="mb-4">
            My goal is to deliver—through code—unique, and innovative solutions to complex problems.
          </p>
          <p class="mb-4">
            If my portfolio interests you, or you need an enthusiastic developer on your team, I am <a href="#" class="text-blue-600 underline">available for hire</a>.
          </p>
          <p class="text-sm mt-8">
            DO YOU HAVE A COOL WEBSITE OR APPLICATION IN MIND?<br>
            I WOULD LOVE TO <a href="#" class="text-blue-600 underline">HEAR ABOUT IT</a>
          </p>
        </div>
        <div class="md:w-1/3 mt-8 md:mt-0 md:ml-8">
          <img src="../assets/munchi.JPG" alt="Profile Picture" class="rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'About',
};
</script>

<style scoped>
section {
  padding: 4rem 0;
}
h2 {
  border-bottom: 2px solid #00f;
  display: inline-block;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
}
</style>
