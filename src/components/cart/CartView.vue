<template>
  <div class="flex flex-col items-center max-w-6xl mx-auto m-10">
    <h1 class="text-3xl font-bold mb-2">Products</h1>

    <div
      class="bg-black/20 w-full h-px mb-5"
    ></div>

    <div class="grid grid-cols-4 gap-5">
      <CartComponent
        v-for="items in products"
        :key="items.id"
        :products="items"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CartComponent from "./CartComponent.vue";

const products = ref([]);

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  products.value = data;
  console.log(products.value);
}

onMounted(getProducts);
</script>
