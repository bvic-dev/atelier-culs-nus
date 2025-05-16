<script setup lang="ts">
import Button from './ui/Button.vue';

defineProps<{
  id: string;
}>();

const handleCTAClick = () => {
  // TODO: implement CTA logic
  void 0;
};
</script>

<template>
  <section :id="id" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="font-title text-6xl md:text-7xl mb-16 text-center uppercase">Préstations</h2>
      
      <!-- Enterprise section -->
      <div class="grid md:grid-cols-2 gap-16 mb-24">
        <div class="order-2 md:order-1">
          <h3 class="uppercase font-semibold text-base mb-5">Entreprises</h3>
          
          <div class="mb-6">
            <h4 class="font-title text-5xl md:text-6xl leading-none mb-2">Offrez une</h4>
            <span class="inline-block bg-primary text-secondary font-title text-5xl md:text-6xl px-2 leading-none">expérience</span>
            <h4 class="font-title text-5xl md:text-6xl leading-none">à vos salariés</h4>
          </div>
          
          <p class="font-outreque mb-6">
            Au-delà de la simple activité artistique, ces ateliers favorisent la concentration, la confiance en soi et l'ouverture à l'autre, tout en offrant un cadre bienveillant et respectueux. Une expérience inspirante, idéale pour sublimer vos événement et séminaires en des lieux d'exception.
          </p>
          
          <Button 
            type="enterprise"
            label="Organiser une séance"
            :onClick="handleCTAClick"
          />
        </div>
        
        <div class="order-1 md:order-2">
          <div class="w-full aspect-square mb-8 flex items-center justify-center">
            <img src="/src/assets/images/prestations.svg" alt="Prestations entreprises" />
          </div>
          
          <ul class="space-y-6">
            <li class="flex items-center gap-4 border-t border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Stimule la créativité et la détente des collaborateurs</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Inclusif et accessible à tous, peu importe le niveau artistique.</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Une pause artistique et créative pour sortir de la routine professionnelle.</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Un cadre bienveillant pour dessiner, explorer et s'inspirer.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Particuliers section -->
      <div class="grid md:grid-cols-2 gap-16">
        <div>
          <div class="w-full aspect-square mb-8 flex items-center justify-center">
            <img src="/src/assets/images/prestations.svg" alt="Prestations particuliers" />
          </div>
          
          <ul class="space-y-6">
            <li class="flex items-center gap-4 border-t border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Accessibles à tous les niveaux, débutant·e ou confirmé·e.</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Chaque atelier se déroule dans des espaces uniques.</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Un cadre unique favorisant les échanges avec des créateurs passionnés.</p>
            </li>
            <li class="flex items-center gap-4 border-b border-gray-300 py-3">
              <div class="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
              <p class="font-outreque-medium">Modèles aux univers pluriels : Créateurs·trices de mode, drag, danseurs·seuses, ...)</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="uppercase font-semibold text-base mb-5">Particuliers</h3>
          
          <div class="mb-6">
            <h4 class="font-title text-5xl md:text-6xl leading-none mb-2">Des séances</h4>
            <span class="inline-block bg-primary text-secondary font-title text-5xl md:text-6xl px-2 leading-none">ouvertes</span>
            <h4 class="font-title text-5xl md:text-6xl leading-none">à tous</h4>
          </div>
          
          <p class="font-outreque mb-6">
            Que vous soyez débutant·e ou confirmé·e, explorez votre créativité dans un cadre bienveillant. Chaque atelier propose des modèles aux univers variés : créateurs·trices de mode, drag, danseurs·seuses, acteurs·trices… Un moment de partage, d'inspiration et d'expression libre.
          </p>
          
          <Button 
            type="individual"
            label="Participer à une séance"
            :onClick="handleCTAClick"
          />
        </div>
      </div>
    </div>
  </section>
</template> 