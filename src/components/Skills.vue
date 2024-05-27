<template>
  <section id="skills" class="py-20 bg-white">
    <h2 class="text-4xl font-bold text-center text-blue-700">Skills</h2>
    <p class="text-center text-black mt-4 mb-8">Here are some of the technologies and skills I have experience with:</p>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in skillCategories" :key="category.name" class="bg-white p-6 rounded-lg">
          <h3 class="text-2xl font-bold mb-4 text-blue-700">{{ category.name }}</h3>
          <ul class="list-disc pl-5">
            <li v-for="skill in category.skills" :key="skill" class="text-black">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Skills',
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'Tailwind CSS', 'Bootstrap']
        },
        {
          name: 'Backend',
          skills: ['Node.js', 'Express.js', 'PHP', 'Laravel']
        },
        {
          name: 'Databases',
          skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite']
        },
        {
          name: 'Tools & Platforms',
          skills: ['Git', 'Docker', 'AWS', 'Netlify','Vercel']
        },
        {
          name: 'Programming Languages',
          skills: ['JavaScript', 'TypeScript', 'Python', 'PHP']
        },
        {
          name: 'Other Skills',
          skills: ['Agile Methodologies', 'Test-Driven Development (TDD)', 'Responsive Design', 'RESTful APIs', 'GraphQL']
        }
      ]
    };
  }
};
</script>

<style scoped>
section {
  padding: 4rem 0;
  background-color: #ffffff; 
}
h2 {
  border-bottom: 2px solid #1e00ff;
  display: inline-block;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  color: #1e00ff;
}

</style>

