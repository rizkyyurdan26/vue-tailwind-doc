<template>
  <header
    :class="[
      'fixed top-0 z-50 left-0  w-full px-10 transition-all duration-200',
      isScrolled
        ? 'bg-white/90 shadow-md text-black'
        : 'bg-transparent text-white',
    ]"
  >
    <nav class="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <img src="../assets/vue.svg" alt="Logo" />

      <button @click="handleActive" :class="['md:hidden text-2xl font-bold', isScrolled ? 'text-black' : 'text-white']">≡</button>

      <ul
        :class="[
          'fixed flex flex-col md:flex-row top-16 right-0 h-screen w-1/2 bg-gray-200 p-4 gap-5',
          'transform transition-transform duration-300 ease-in-out',
          isActive ? 'translate-x-0 text-black' : 'translate-x-full',
          'md:static md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:flex md:gap-10',
        ]"
      >
        <li><a href="#" class="hover:text-violet-400 active:text-violet-400">Home</a></li>
        <li><a href="#about" class="hover:text-violet-400 active:text-violet-400">About</a></li>
        <li><a href="#footer" class="hover:text-violet-400 active:text-violet-400">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isScrolled = ref(false);
const isActive = ref(false);

const handleActive = () => {
  isActive.value = !isActive.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
