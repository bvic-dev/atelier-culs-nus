<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface CarouselImage {
  id: number;
  src: string;
  caption: string;
  width: number;
  height: number;
}

const props = defineProps<{
  images: CarouselImage[];
  autoScrollDirection?: 'left' | 'right';
  autoScrollSpeed?: number; // pixels per second
}>();

const containerRef = ref<HTMLDivElement | null>(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const animationFrameId = ref<number | null>(null);

const setupInfiniteScroll = () => {
  if (!containerRef.value) return;
  const scrollAmount = props.autoScrollDirection === 'left' ? -1 : 1;
  const speed = props.autoScrollSpeed || 50; // default 50px/s
  const scroll = () => {
    if (!containerRef.value || isDragging.value) return;
    containerRef.value.scrollLeft += (scrollAmount * speed) / 60;
    const totalWidth = containerRef.value.scrollWidth / 3;
    if (containerRef.value.scrollLeft >= totalWidth * 2) {
      containerRef.value.scrollLeft -= totalWidth;
    } else if (containerRef.value.scrollLeft <= 0) {
      containerRef.value.scrollLeft += totalWidth;
    }
    animationFrameId.value = requestAnimationFrame(scroll);
  };
  animationFrameId.value = requestAnimationFrame(scroll);
};

const startDragging = (e: MouseEvent) => {
  isDragging.value = true;
  if (!containerRef.value) return;
  startX.value = e.pageX - containerRef.value.offsetLeft;
  scrollLeft.value = containerRef.value.scrollLeft;
};

const stopDragging = () => {
  isDragging.value = false;
};

const drag = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return;
  e.preventDefault();
  const x = e.pageX - containerRef.value.offsetLeft;
  const walk = (x - startX.value) * 2;
  containerRef.value.scrollLeft = scrollLeft.value - walk;
};

onMounted(() => {
  // Centrer le scroll sur le 2e groupe d'images au montage
  nextTick(() => {
    if (containerRef.value) {
      const totalWidth = containerRef.value.scrollWidth / 3;
      containerRef.value.scrollLeft = totalWidth;
    }
    setupInfiniteScroll();
    containerRef.value?.addEventListener('scroll', handleScroll);
  });
});

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
  containerRef.value?.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (!containerRef.value || isDragging.value) return;
  const container = containerRef.value;
  const totalWidth = container.scrollWidth / 3;
  // Si on dépasse à droite
  if (container.scrollLeft >= totalWidth * 2) {
    container.scrollLeft -= totalWidth;
  }
  // Si on dépasse à gauche
  else if (container.scrollLeft <= 0) {
    container.scrollLeft += totalWidth;
  }
};
</script>

<template>
  <div class="relative w-full">
    <div
      ref="containerRef"
      class="flex items-end gap-8 scroll-smooth overflow-x-auto scrollbar-hide"
      :class="{ 'cursor-grabbing': isDragging, 'cursor-grab': !isDragging }"
      @mousedown="startDragging"
      @mousemove="drag"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      <div v-for="(image, index) in [...images, ...images, ...images]" 
           :key="`${image.id}-${index}`"
           class="flex-none relative" 
           :style="{ width: `${image.width}px`, height: `400px` }">
        <div class="absolute bottom-0">
          <img :src="image.src" :alt="image.caption" :width="image.width" :height="image.height" class="object-cover"
            draggable="false" />
        </div>
        <div class="absolute bottom-0 left-0 mb-0 mr-0">
          <div class="px-4 py-2 bg-black text-white text-xs uppercase font-mono tracking-wider"
            style="border-radius:0;">
            {{ image.caption }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Cache la scrollbar sur Webkit (Chrome, Safari, etc) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>