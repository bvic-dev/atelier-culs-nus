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
  <section :id="id" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="font-title text-6xl md:text-7xl mb-16 text-center uppercase">Approche</h2>
      
      <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
        <!-- HORS-CADRE -->
        <div class="flex flex-col gap-8">
          <div class="w-full aspect-square mb-4 flex items-center justify-center">
            <img src="../assets/images/approche-1.svg" alt="Hors-cadre" class="w-1/2" />
          </div>
          <div>
            <div class="flex">
              <h3 class="font-title text-4xl md:text-5xl tracking-tight -mx-3">
                <span class="inline-block">H</span>
                <span class="inline-block">O</span>
                <span class="inline-block">R</span>
                <span class="inline-block">S</span>
                <span class="inline-block">-</span>
                <span class="inline-block">C</span>
                <span class="inline-block">A</span>
                <span class="inline-block">D</span>
                <span class="inline-block">R</span>
                <span class="inline-block">E</span>
              </h3>
            </div>
            <p class="font-outreque mt-4">
              Un espace pour créer librement, pour expérimenter sans chercher la perfection. Juste l'élan, le geste, l'expression sincère.
            </p>
          </div>
        </div>
        
        <!-- ARTISTIQUE -->
        <div class="flex flex-col gap-8">
          <div class="w-full aspect-square mb-4 flex items-center justify-center">
            <img src="../assets/images/approche-2.svg" alt="Artistique" class="w-1/2" />
          </div>
          <div>
            <div class="flex">
              <h3 class="font-title text-4xl md:text-5xl tracking-tight -mx-3">
                <span class="inline-block">A</span>
                <span class="inline-block">R</span>
                <span class="inline-block">T</span>
                <span class="inline-block">I</span>
                <span class="inline-block">S</span>
                <span class="inline-block">T</span>
                <span class="inline-block">I</span>
                <span class="inline-block">Q</span>
                <span class="inline-block">U</span>
                <span class="inline-block">E</span>
              </h3>
            </div>
            <p class="font-outreque mt-4">
              Pratiques croisées, univers pluriels, musique, danse, mode, drag…<br> 
              Les imaginaires se frôlent, les inspirations se répondent.
            </p>
          </div>
        </div>
        
        <!-- CONVIVIAL -->
        <div class="flex flex-col gap-8">
          <div class="w-full aspect-square mb-4 flex items-center justify-center">
            <img src="../assets/images/approche-3.svg" alt="Convivial" class="w-1/2" />
          </div>
          <div>
            <div class="flex">
              <h3 class="font-title text-4xl md:text-5xl tracking-tight -mx-3">
                <span class="inline-block">C</span>
                <span class="inline-block">O</span>
                <span class="inline-block">N</span>
                <span class="inline-block">V</span>
                <span class="inline-block">I</span>
                <span class="inline-block">V</span>
                <span class="inline-block">I</span>
                <span class="inline-block">A</span>
                <span class="inline-block">L</span>
              </h3>
            </div>
            <p class="font-outreque mt-4">
              Un espace bienveillant où les corps se dévoilent sans jugement, où les regards s'exercent dans le respect, et où les échanges nourrissent autant que les traits.
            </p>
          </div>
        </div>
      </div>
      
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
  </section>
</template> 