<script setup lang="ts">
defineProps<{
  primary?: boolean;
  label: string;
  type?: 'enterprise' | 'individual' | 'single';
  onClick?: () => void;
}>();
</script>

<template>
  <button 
    class="bg-primary text-secondary rounded-[50px] px-6 py-3 min-w-52 flex flex-col items-center justify-center transition-all hover:bg-opacity-90"
    @click="onClick"
  >
    <template v-if="type === 'enterprise'">
      <span class="block text-[10px] font-medium leading-[1.21] text-center">Entreprise</span>
      <span class="block text-[18px] font-semibold leading-[1.21] text-center mt-[5px]">{{ label }}</span>
    </template>
    
    <template v-else-if="type === 'individual'">
      <span class="block text-[10px] font-medium leading-[1.21] text-center">Particulier</span>
      <span class="block text-[18px] font-semibold leading-[1.21] text-center mt-[5px]">{{ label }}</span>
    </template>
    
    <template v-else>
      <span class="block text-[18px] font-semibold leading-[1.21] text-center">{{ label }}</span>
    </template>
  </button>
</template> 