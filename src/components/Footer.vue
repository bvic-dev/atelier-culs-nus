<script setup lang="ts">
// No specific functionality needed for the footer
</script>

<template>
  <footer class="py-12 border-t border-gray-200">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Logo area -->
        <div class="flex justify-center md:justify-start">
          <div class="logo">
            <!-- Logo will be added later -->
            <div class="text-2xl font-title">Atelier Culs Nus</div>
          </div>
        </div>
        
        <!-- Site links -->
        <div>
          <h4 class="font-outreque-bold text-lg mb-5">Site</h4>
          <ul class="space-y-2">
            <li><a href="#approche" class="uppercase font-medium text-sm hover:opacity-70 transition-opacity">Approche</a></li>
            <li><a href="#prestations" class="uppercase font-medium text-sm hover:opacity-70 transition-opacity">Prestations</a></li>
            <li><a href="#a-propos" class="uppercase font-medium text-sm hover:opacity-70 transition-opacity">À propos</a></li>
            <li><a href="#infos-pratiques" class="uppercase font-medium text-sm hover:opacity-70 transition-opacity">Infos Pratiques</a></li>
          </ul>
        </div>
        
        <!-- Social links -->
        <div>
          <h4 class="font-outreque-bold text-lg mb-5">Social</h4>
          <ul class="space-y-2">
            <li><a href="#" class="uppercase font-medium text-sm hover:opacity-70 transition-opacity">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <p class="text-xs uppercase">© 2025 Atelier Culs Nus.</p>
        </div>
        
        <div class="flex gap-6">
          <a href="#" class="text-xs uppercase hover:opacity-70 transition-opacity">Politiques de confidentialités</a>
          <a href="#" class="text-xs uppercase hover:opacity-70 transition-opacity">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template> 