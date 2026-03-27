<template>
  <section
    class="relative bg-cover h-screen bg-center flex"
    style="
      background-image: url(&quot;https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-woman-with-headphones-listening-to-music-image_2972195.jpg&quot;);
    "
  >
    <!-- Overlay -->
    <div class="absolute bg-black/20 inset-0"></div>

    <!-- Isi Hero -->
    <div
      class=" relative flex flex-col max-w-6xl w-full mx-auto my-25 px-10  justify-between"
    >
      <!-- Atas -->
      <div class="flex flex-col gap-2 text-white max-w-sm">
        <h1 class="text-4xl font-bold">
          DIGITAL & <br />
          WEBSITE SOLUTION
        </h1>
      </div>

      <!-- Bawah -->
      <div>
        <!-- Span -->
        <div class="flex flex-wrap gap-2 text-white mb-5 items-center">
          <span
            class="bg-white/40 backdrop-blur-md rounded-full px-4 py-1 text-sm"
            >Company Profile</span
          >
          <span
            class="bg-white/40 backdrop-blur-md rounded-full px-4 py-1 text-sm"
            >Marketing Website</span
          >
          
        </div>

        <div class="flex flex-col md:flex-row gap-5 justify-between items-center">
          <div class="max-w-3xl">
            <p class="text-sm text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              voluptas at, temporibus earum labore dicta dolore illum repellat
              impedit cum vitae nobis saepe recusandae commodi aliquam! Ipsum
              vel repudiandae.
            </p>
          </div>
          <button
            class="bg-violet-700 text-md text-white px-6 py-2 rounded-lg hover:bg-violet-900"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
