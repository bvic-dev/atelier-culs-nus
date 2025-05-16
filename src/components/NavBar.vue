<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <header :class="['fixed w-full top-0 z-50 transition-all duration-300', isScrolled ? 'bg-white bg-opacity-95 shadow-md py-2' : 'py-4']">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="Atelier Culs Nus" class="h-12" />
      </div>
      
      <nav class="flex space-x-6">
        <a href="#approche" class="uppercase font-hanken font-semibold text-sm hover:opacity-70 transition-opacity">Approche</a>
        <a href="#prestations" class="uppercase font-hanken font-semibold text-sm hover:opacity-70 transition-opacity">Prestations</a>
        <a href="#a-propos" class="uppercase font-hanken font-semibold text-sm hover:opacity-70 transition-opacity">À Propos</a>
        <a href="#infos-pratiques" class="uppercase font-hanken font-semibold text-sm hover:opacity-70 transition-opacity">Infos Pratiques</a>
      </nav>
    </div>
  </header>
</template> 