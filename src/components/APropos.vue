<script setup lang="ts">
import Button from './ui/Button.vue';

defineProps<{
  id: string;
}>();

const handleSocialClick = (type: 'atelier' | 'personal') => {
  // TODO: Implement social links
  void 0;
};
</script>

<template>
  <section :id="id" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="font-title text-6xl md:text-7xl mb-16 text-center uppercase">À Propos</h2>
      
      <div class="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div class="w-full aspect-square mb-8 flex items-center justify-center">
            <img src="/src/assets/images/prestations.svg" alt="Prestations entreprises" />
          </div>
        
        <div>
          <h3 class="font-title text-4xl md:text-5xl mb-8 leading-tight uppercase">
            Lucile, le visage<br>
            de l'atelier
          </h3>
          
          <p class="font-outreque mb-12">
            À l'origine de l'atelier : une artiste passionnée par les corps, les gestes et les rencontres. Nourrie par les univers de la mode, du spectacle et du dessin, elle imagine ces ateliers comme des espaces d'expression libre, inclusifs et bienveillants. L'envie : créer des moments où chacun·e peut explorer sa créativité, hors des cadres habituels, au contact de modèles singuliers et inspirants.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <Button 
              label="Suivre l'Atelier"
              :onClick="() => handleSocialClick('atelier')"
            />
            
            <Button 
              label="Suivre son travail"
              :onClick="() => handleSocialClick('personal')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 