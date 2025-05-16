<script setup lang="ts">
import { ref } from 'vue';
import Button from './ui/Button.vue';

defineProps<{
  id: string;
}>();

// Accordion panels
const panels = ref([
  {
    id: 'lieux',
    title: 'Les Lieux',
    isOpen: true,
    content: 'Les espaces sont soigneusement choisis pour créer une expérience totale, en parfaite résonance avec l\'univers du modèle. Chaque espace devient une extension sensible de son monde intérieur, invitant le public à une immersion profonde, où le décor, l\'atmosphère et la rencontre se répondent harmonieusement.'
  },
  {
    id: 'modeles',
    title: 'Les Modèles',
    isOpen: false,
    content: '// TODO: content placeholder'
  },
  {
    id: 'tarifs',
    title: 'Tarifs',
    isOpen: false,
    content: '// TODO: content placeholder'
  },
  {
    id: 'horaires',
    title: 'Horaires',
    isOpen: false,
    content: '// TODO: content placeholder'
  },
  {
    id: 'materiels',
    title: 'Matériels',
    isOpen: false,
    content: '// TODO: content placeholder'
  }
]);

const togglePanel = (id: string) => {
  panels.value = panels.value.map(panel => ({
    ...panel,
    isOpen: panel.id === id ? !panel.isOpen : panel.isOpen
  }));
};

const handleContactClick = () => {
  // TODO: implement contact logic
  void 0;
};
</script>

<template>
  <section :id="id" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="font-title text-6xl md:text-7xl mb-16 text-center uppercase">Infos Pratiques</h2>
      
      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 class="font-title text-4xl md:text-5xl mb-10 leading-tight uppercase">
            On a la réponse<br> à toutes vos questions !
          </h3>
          
          <Button 
            label="Nous Contacter"
            :onClick="handleContactClick"
          />
        </div>
        
        <div class="accordion">
          <div v-for="panel in panels" :key="panel.id" class="mb-6">
            <div 
              class="flex justify-between items-center py-4 border-t border-primary cursor-pointer"
              @click="togglePanel(panel.id)"
            >
              <h4 class="font-outreque-black text-lg uppercase">{{ panel.title }}</h4>
              <div class="w-6 h-6 relative">
                <div class="w-full h-0.5 bg-primary absolute top-1/2 -translate-y-1/2"></div>
                <div 
                  class="w-0.5 h-full bg-primary absolute left-1/2 -translate-x-1/2 transition-transform duration-300"
                  :class="{ 'scale-0': panel.isOpen }"
                ></div>
              </div>
            </div>
            
            <div 
              v-if="panel.isOpen"
              class="py-6 font-outreque text-base"
            >
              {{ panel.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 