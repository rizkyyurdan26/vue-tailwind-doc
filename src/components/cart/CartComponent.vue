<template>
  <div class="flex flex-col gap-4 shadow-lg p-6 rounded-xl bg-gray-100  duration-200 hover:scale-105">
    <div class="w-full mx-auto flex justify-center mb-2">
      <img :src="products.image" alt="" class="h-50" />
    </div>

    <div>
     <span
        class="bg-orange-700/80 text-white px-2 py-1 rounded-xl backdrop-blur shadow-xl text-xs"
        >
        ⚪{{ products.category }}</span
      >
    </div>
    <h1 class="font-semibold line-clamp-2">{{ products.title }}</h1>
    <p class="line-clamp-3">{{ products.description }}</p>

    <div class="flex w-full justify-between items-center"> 
        <router-link :to="`/product/${products.id}`"><button class="bg-green-700 hover:bg-green-900 text-white  px-3 py-1 rounded">Show More</button></router-link>
        <p class="font-semibold ">${{ products.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: Object,
});
</script>

