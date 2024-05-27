<template>
  <section id="projects" class="py-20 bg-white-100">
    <h2 class="text-4xl font-bold text-center text-blue-700">Projects</h2>
    <p class="text-center text-black mt-4 mb-12">Details about my projects...</p>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-black">{{ project.title }}</h3>
          <img :src="project.image" alt="Project image" class="w-full h-48 object-cover mb-4 rounded-lg">
          <div class="flex flex-wrap mb-4">
            <span v-for="tech in project.technologies" :key="tech" class="bg-gray-200 text-blue-700 text-xs font-bold mr-3 px-2.5 py-0.5 rounded">
              {{ tech }}
            </span>
          </div>
          <p class="mb-4 text-black">{{ project.description }}</p>
          <div class="flex items-center space-x-5">
            <a :href="project.github" target="_blank" class="text-blue-700 hover:text-black-900">
              <font-awesome-icon :icon="['fab', 'github']" class="w-6 h-6" />
            </a>
            <a :href="project.website" target="_blank" class="text-blue-700 hover:text-black-900">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Mental Health Support chatbot',
          image: project2,
          technologies: ['TypeScript', 'React JS', 'React-Router', 'Firebase'],
          description: 'Chatbot built with React, TypeScript and Firebase.',
          github: 'https://github.com/your-repo/slack-clone',
          website: 'https://yourwebsite.com/slack-clone'
        },
        {
          id: 2,
          title: 'Blog Platform',
          image: project1,
          technologies: ['React JS', 'PHP', 'TailwindCSS', 'JSON'],
          description: 'Single Page Blog Website(Frontend) built with React Hooks, Context API, Codeigniter for Backend.',
          github: 'https://github.com/your-repo/kashkart',
          website: 'https://yourwebsite.com/kashkart'
        },
        {
          id: 3,
          title: 'Crypto Money',
          image: project2,
          technologies: ['React JS', 'TypeScript', 'CSS', 'CoinGecko API'],
          description: 'Mobile Responsive Crypto Currency Tracker using React Hooks and CoinGecko API.',
          github: 'https://github.com/your-repo/crypto-money',
          website: 'https://yourwebsite.com/crypto-money'
        },
        {
          id: 4,
          title: 'Note App PWA',
          image: project2,
          technologies: ['HTML', 'CSS', 'JavaScript', 'GatsbyJS'],
          description: 'Mobile Responsive Notes Taking Website to add, edit, delete and search notes.',
          github: 'https://github.com/your-repo/power-note',
          website: 'https://yourwebsite.com/power-note'
        }
      ]
    };
  }
});
</script>

<style scoped>
section {
  padding: 4rem 0;
}
h2 {
  border-bottom: 2px solid #1e00ff;
  display: inline-block;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}
</style>
