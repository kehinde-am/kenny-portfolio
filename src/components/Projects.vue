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
          <div class="flex justify-between items-center">
            <a :href="project.github" target="_blank" class="text-blue-700 hover:text-black-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.77-.25.77-.55v-2.1c-3.2.7-3.88-1.45-3.88-1.45-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.94.1-.74.4-1.24.72-1.52-2.56-.3-5.26-1.28-5.26-5.7 0-1.25.44-2.27 1.16-3.07-.12-.3-.5-1.5.1-3.12 0 0 .96-.31 3.16 1.18A11.07 11.07 0 0112 6.7a11.06 11.06 0 013.16-.43c2.2-1.5 3.16-1.18 3.16-1.18.6 1.62.22 2.82.1 3.12.72.8 1.16 1.82 1.16 3.07 0 4.42-2.7 5.4-5.26 5.7.4.34.76 1 .76 2.02v2.98c0 .3.2.66.78.55C20.7 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Mental Health Support chatbot',
          image: '../assets/project2.jpg',
          technologies: ['TypeScript', 'React JS', 'React-Router', 'Firebase'],
          description: 'Chatbot built with React, TypeScript and Firebase.',
          github: 'https://github.com/your-repo/slack-clone',
          website: 'https://yourwebsite.com/slack-clone'
        },
        {
          id: 2,
          title: 'Blog Platform',
          image: '../assets/project1.jpg',
          technologies: ['React JS', 'PHP','TailwindCSS', 'JSON'],
          description: 'Single Page Blog Website(Frontend) built with React Hooks, Context API,Codeigniter for Backend.',
          github: 'https://github.com/your-repo/kashkart',
          website: 'https://yourwebsite.com/kashkart'
        },
        {
          id: 3,
          title: 'Crypto Money',
          image: '../assets/project1.jpg',
          technologies: ['React JS', 'TypeScript', 'CSS', 'CoinGecko API'],
          description: 'Mobile Responsive Crypto Currency Tracker using React Hooks and CoinGecko API.',
          github: 'https://github.com/your-repo/crypto-money',
          website: 'https://yourwebsite.com/crypto-money'
        },
        {
          id: 4,
          title: 'Power Note',
          image: '../assets/project2.jpg',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          description: 'Mobile Responsive Notes Taking Website to add, edit, delete and search notes.',
          github: 'https://github.com/your-repo/power-note',
          website: 'https://yourwebsite.com/power-note'
        }
      ]
    };
  }
};
</script>

<style scoped>
section {
  padding: 4rem 0;
}
h2{
  border-bottom: 2px solid #1e00ff;
  display: inline-block;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}
</style>
