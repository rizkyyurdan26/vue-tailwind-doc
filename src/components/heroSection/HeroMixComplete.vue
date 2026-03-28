<template>
  <div class="relative w-full h-64 md:h-screen top-16 md:top-0">
    <img
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      class="absolute w-full h-full  object-cover transition-opacity duration-1000"
      :class="i === currIdx ? 'opacity-100' : 'opacity-0'"
    />

    <!-- Right Button -->
    <button
      @click="nextImg"
      class="absolute right-5 top-1/2 text-black/50 text-xl md:text-5xl font-bold bg-blue-500/20 px-2 rounded-full hover:bg-blue-500/50 hover:text-white"
    >
      >
    </button>

    <!-- Left Button -->
    <button
      @click="prevImg"
      class="absolute left-5 top-1/2 text-black/50 text-xl md:text-5xl font-bold bg-blue-500/20 px-2 rounded-full hover:bg-blue-500/50 hover:text-white"
    >
      <
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const images = [
  "https://redflagalerts.com/wp-content/uploads/2021/08/Landscape20Shopping20Mall20Design.png",
  "https://redflagalerts.com/wp-content/uploads/2021/08/Use20The20Right20Shopping20Mall20Landscape20Enhancements.png",
  "https://greenspired.eu/wp-content/uploads/2022/08/how-to-design-relax-space-in-a-shopping-mall-landscape.jpg",
];

const currIdx = ref(0);

function nextImg() {
  currIdx.value = (currIdx.value + 1) % images.length;
}

function prevImg() {
  currIdx.value = (currIdx.value - 1 + images.length) % images.length;
}

let interval

onMounted(() => {
    interval = setInterval(nextImg, 3000)
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>
