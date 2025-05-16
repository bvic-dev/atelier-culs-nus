<script setup lang="ts">
import { ref } from 'vue';
import Button from './ui/Button.vue';

defineProps<{
  id: string;
}>();

// This will be replaced with actual images later
const images = [
  { id: 1, src: '/placeholder.jpg', caption: 'HÉLOISE, LIEU UNIQUE' },
  { id: 2, src: '/placeholder.jpg', caption: 'EMMA, STUDIO' },
  { id: 3, src: '/placeholder.jpg', caption: 'LUCAS, GALERIE' },
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
      
      <div class="max-w-3xl mx-auto mt-24 text-center">
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