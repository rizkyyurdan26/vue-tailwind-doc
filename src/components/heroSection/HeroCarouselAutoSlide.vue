<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "https://i.pinimg.com/736x/ea/7a/30/ea7a300c2990158aea798402e5739c81.jpg",
  "https://img.lazcdn.com/g/p/cae20f9d943a66951f607424573a80e4.jpg_720x720q80.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-landscape-wallpapers-image_2700406.jpg",
];

const currentIndex = ref(0);

function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}

let interval;

onMounted(() => {
  interval = setInterval(next, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="relative w-full h-screen">
    <img
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      class="absolute w-full h-full object-cover transition-opacity duration-1000"
      :class="i === currentIndex ? 'opacity-100' : 'opacity-0'"
    />
  </div>
</template>
