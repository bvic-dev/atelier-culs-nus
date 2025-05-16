<script setup lang="ts">
import Carousel from './ui/Carousel.vue';
import carouselImages from '../assets/images/carousel/carousel-1.png';

defineProps<{
  id?: string;
}>();

const images = [
  { id: 1, src: carouselImages, caption: 'HÉLOISE, LIEU UNIQUE', width: 279, height: 400 },
  { id: 2, src: carouselImages, caption: 'EMMA, STUDIO', width: 220, height: 300 },
  // Duplicate the images to have 10 items
  { id: 3, src: carouselImages, caption: 'LUCAS, GALERIE', width: 279, height: 400 },
  { id: 4, src: carouselImages, caption: 'MARIE, ATELIER', width: 220, height: 300 },
  { id: 5, src: carouselImages, caption: 'THOMAS, STUDIO', width: 279, height: 400 },
  { id: 6, src: carouselImages, caption: 'JULIE, LIEU UNIQUE', width: 220, height: 300 },
  { id: 7, src: carouselImages, caption: 'PAUL, GALERIE', width: 279, height: 400 },
  { id: 8, src: carouselImages, caption: 'SARAH, ATELIER', width: 220, height: 300 },
  { id: 9, src: carouselImages, caption: 'ALEX, STUDIO', width: 279, height: 400 },
  { id: 10, src: carouselImages, caption: 'CLAIRE, LIEU UNIQUE', width: 220, height: 300 },
];
</script>

<template>
  <section :id="id" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <Carousel 
          :images="images"
          auto-scroll-direction="left"
          :auto-scroll-speed="30"
        />
      </div>
    </div>
  </section>
</template> 