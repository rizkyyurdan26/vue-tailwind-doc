<template>
  <div class="relative w-full h-screen">
    <img
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      class="absolute w-full h-full object-cover transition-opacity duration-1000"
      :class="i === currIdx ? 'opacity-100' : 'opacity-0'"
    />

    <
    <!-- Right Button -->
    <button
      @click="nextImg"
      class="absolute right-5 top-1/2 text-black/50 text-5xl font-bold bg-blue-500/20 px-2 rounded-full hover:bg-blue-500/50 hover:text-white"
    >
      >
    </button>

    <!-- Left Button -->
    <button
      @click="prevImg"
      class="absolute left-5 top-1/2 text-black/50 text-5xl font-bold bg-blue-500/20 px-2 rounded-full hover:bg-blue-500/50 hover:text-white"
    >
      <
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const images = [
  "https://i.pinimg.com/736x/ea/7a/30/ea7a300c2990158aea798402e5739c81.jpg",
  "https://img.lazcdn.com/g/p/cae20f9d943a66951f607424573a80e4.jpg_720x720q80.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-landscape-wallpapers-image_2700406.jpg",
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
