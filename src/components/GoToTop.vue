<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <div 
    v-show="isVisible" 
    class="fixed bottom-6 right-6 z-50 bg-primary text-secondary px-4 py-2 uppercase text-xs font-medium cursor-pointer shadow-md hover:bg-primary/80 transition-all duration-300"
    @click="scrollToTop"
  >
    Go to Top
  </div>
</template> 