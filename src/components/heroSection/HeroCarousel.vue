<template>
  <div class="relative flex w-full h-screen mx-auto">
    <img :src="images[currIdx]" class="w-full object-cover" />

    <!-- Button Right -->
     <button @click="nextImage" class="absolute text-3xl right-2 top-1/2 ">➡️</button>

     <!-- Button Left -->
     <button @click="prevImage" class="absolute text-3xl left-2 top-1/2 ">⬅️</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
    "https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg",
    "https://t4.ftcdn.net/jpg/01/05/90/77/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg",
    "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png",
];

const currIdx = ref(0);

function nextImage() {
    currIdx.value = (currIdx.value+1) % images.length
}

function prevImage(){
    currIdx.value = (currIdx.value - 1 + images.length) % images.length
}
</script>
