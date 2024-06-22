
<template>
  <section id="about" class="py-20 bg-white text-blue-700">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8 text-blue-700">About Me</h2>
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <div class="md:w-2/3 text-black">
          <p class="mb-4">
            I am Kehinde Amusa, a recent Computer Science Masters graduate eager to make my mark in the tech industry. With a strong foundation in both frontend and backend development, I am passionate about creating innovative and efficient solutions through code.
          </p>
          <p class="mb-4">
            During my studies, I dedicated myself to designing graphics, building web applications, and mastering algorithms. My goal is to leverage these skills to deliver unique and effective solutions to complex problems.
          </p>
          <p class="mb-4">
            If my portfolio interests you, or you need an enthusiastic developer on your team, I am <a href="mailto:kennyamusa@gmail.com" class="text-blue-600 underline">available for hire</a>.
          </p>
          <p class="text-sm mt-8">
            DO YOU HAVE A COOL WEBSITE OR APPLICATION IN MIND?<br>
            I WOULD LOVE TO <a href="#contact" class="text-blue-600 underline">HEAR ABOUT IT</a>
          </p>
        </div>
        <div class="md:w-1/3 mt-8 md:mt-0 md:ml-8">
          <img src="../assets/munchi.jpg" alt="Profile Picture" class="rounded-lg shadow-lg w-full h-auto max-w-xs">
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
  border-bottom: 2px solid #1e00ff;
  display: inline-block;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  color: #1e00ff;
}
p, ul {
  color: #000;
}
a {
  color: #1e00ff;
}
</style>
