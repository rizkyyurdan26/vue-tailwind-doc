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

      <button @click="handleActive" :class="['md:hidden text-2xl font-bold', isScrolled ? 'text-black' : 'text-black']">≡</button>

      <ul
        :class="[
          'fixed flex flex-col md:flex-row  right-0 h-screen w-1/2 bg-gray-200/90 p-4 gap-5',
          'transform transition-transform duration-300 ease-in-out',
          isScrolled ? 'top-17' : 'top-16',
          isActive ? 'translate-x-0 text-black' : 'translate-x-full',
          'md:static md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:flex md:gap-10',
        ]"
      >
        <li><router-link to="/" @click="isActive = false" class="hover:text-violet-400 active:text-violet-400">Home</router-link></li>
        <li><a href="#about" @click="isActive = false" class="hover:text-violet-400 active:text-violet-400">About</a></li>
        <li><a href="#footer" @click="isActive = false" class="hover:text-violet-400 active:text-violet-400">Contact</a></li>
        <li><router-link to="/product" @click="isActive = false" class="hover:text-violet-400 active:text-violet-400">Products</router-link></li>
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
