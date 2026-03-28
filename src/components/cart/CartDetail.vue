<template>
  <div class="w-full bg-gray-300/50 p-6">
    <div
      class="flex flex-col bg-white rounded-xl max-w-2xl w-full items-center justify-center mx-auto mt-20 p-6 md:p-6 md:mt-10 mb-10"
    >
      <img :src="productId?.image" class="object-contain h-50 w-50" />

      <div class="flex flex-col gap-5">
        <div>
          <span
            class="bg-orange-700/80 text-white pl-2 pr-8 py-1 rounded-full backdrop-blur shadow-xl text-md"
          >
            ⚪{{ productId?.category }}</span
          >
        </div>

        <h1 class="font-bold text-lg">{{ productId?.title }}</h1>

        <div class="flex justify-between pr-10">
          <p class="font-semibold text-lg">${{ productId?.price }}</p>
          <p class="font-semibold">⭐{{ productId?.rating.rate }}</p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-2">Description:</h3>
          <p>{{ productId?.description }}</p>
        </div>

        <div class="flex justify-end mt-5">
          <div class="max-w-xs w-full ">
            <div class="flex justify-around">
              <button class="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">🛒 Add to cart</button>
              <button class="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">🛍️Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = ref(null);

async function getId() {
  const id = route.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  productId.value = data;
  console.log(productId.value);
}

onMounted(getId);
</script>
