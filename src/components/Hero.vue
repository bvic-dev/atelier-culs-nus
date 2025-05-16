<script setup lang="ts">
import Button from './ui/Button.vue';
import Carousel from './ui/Carousel.vue';
import carouselImages from '../assets/images/carousel/carousel-1.png';

defineProps<{
  id: string;
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

const handleCTAClick = () => {
  // TODO: implement CTA logic
  void 0;
};
</script>

<template>
  <section :id="id" class="min-h-screen pt-24 pb-12 relative">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="font-title text-7xl md:text-8xl lg:text-9xl mb-10">Atelier Culs Nus</h1>
        
        <p class="font-outreque text-xl md:text-2xl mb-12 leading-relaxed">
          L'Atelier de modèle vivant où les arts se croisent,<br> 
          où chaque corps trouve sa place,<br>
          et où chacun·e s'exprime librement, avec justesse et sensibilité.
        </p>
        
        <div class="flex flex-col md:flex-row gap-5 justify-center">
          <Button 
            type="enterprise"
            label="Organiser une séance"
            :onClick="handleCTAClick"
          />
          
          <Button 
            type="individual"
            label="Participer à une séance"
            :onClick="handleCTAClick"
          />
        </div>
      </div>
      
      <div class="max-w-6xl mx-auto my-24">
        <Carousel 
          :images="images"
          auto-scroll-direction="right"
          :auto-scroll-speed="30"
        />
      </div>
      
      <div class="max-w-3xl mx-auto text-center">
        <blockquote class="font-outreque-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
          " L'essence d'un être humain n'a rien à voir avec l'anatomie.<br>
          C'est une affaire d'intuition. D'instinct.<br>
          Et le reste, est de l'imagination."
        </blockquote>
        <cite class="block mt-4 font-medium text-lg">→ Roman graphique "Peau" par Mieke Versyps et Sabien Clement</cite>
      </div>
    </div>
  </section>
</template> 