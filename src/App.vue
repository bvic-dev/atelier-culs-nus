<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Approche from './components/Approche.vue';
import Prestations from './components/Prestations.vue';
import APropos from './components/APropos.vue';
import InfosPratiques from './components/InfosPratiques.vue';
import Footer from './components/Footer.vue';
import GoToTop from './components/GoToTop.vue';

// For smooth scrolling functionality
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  // Handle navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href')?.replace('#', '');
      if (target) {
        scrollToSection(target);
      }
    });
  });
});
</script>

<template>
  <div class="app bg-secondary text-primary">
    <NavBar />
    <main>
      <Hero id="hero" />
      <Approche id="approche" />
      <Prestations id="prestations" />
      <APropos id="a-propos" />
      <InfosPratiques id="infos-pratiques" />
    </main>
    <Footer />
    <GoToTop />
  </div>
</template>
