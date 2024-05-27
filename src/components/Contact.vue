
<template>
  <section id="contact" class="py-20">
    <h2 class="text-4xl font-bold text-center text-blue-700">Contact</h2>
    <p class="text-center text-white mt-4">I'd love to hear from you! Fill out the form below to get in touch.</p>
    <div class="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg">
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-light mb-2">Name</label>
          <input type="text" id="name" v-model="form.name" class="w-full px-3 py-2 border rounded-lg text-gray-700" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" v-model="form.email" class="w-full px-3 py-2 border rounded-lg text-gray-900" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" v-model="form.message" class="w-full px-3 py-2 border rounded-lg text-gray-900" rows="5" required></textarea>
        </div>
        <button type="submit" class="bg-blue-700 text-white px-4 py-2 rounded-lg font-bold">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const submitForm = () => {
      alert(`Message Sent! \nName: ${form.value.name} \nEmail: ${form.value.email} \nMessage: ${form.value.message}`);
      
    };

    return {
      form,
      submitForm
    };
  }
});
</script>

<style scoped>
section {
  padding: 4rem 0;
}

input,
textarea {
  color: #000000;
  background-color: white;
}
h2 {
  border-bottom: 2px solid #1e00ff;
  display:inline-flex;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  color: #1e00ff;
}
</style>
