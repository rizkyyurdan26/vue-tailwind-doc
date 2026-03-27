<template>
  <footer
    id="footer"
    class="flex flex-col w-full bg-black justify-center "
  >
    <!-- Container -->

    <div
      class="flex flex-col md:flex-row w-full md:max-w-6xl p-4 mx-auto justify-between items-center"
    >
      <!-- Left -->
      <div class="text-white  flex flex-col gap-2 p-4 ">
        
        <div class="flex gap-2">
            <!-- <img src="../assets/vue.svg" class="text-lg"> -->
            <h1 class="text-2xl font-bold">RYS</h1>
        </div>
        
            <h1 class="text-xl font-semibold text-white/70">Digital <br> & Website Solution</h1>
        
      </div>

      <div class="hidden md:block w-px h-32 bg-white/30"></div>

      <!-- Middle -->
      <div class="flex flex-col text-white p-4 gap-4 items-center">
        <h1 class="text-xl font-semibold">Offers</h1>
        <ul class="list-disc pl-5 text-white/70">
            <li>Company Website</li>
            <li>Marketing Website</li>
            <li>Machine Learning</li>
            <li>Data Dashboard</li>
        </ul>
      </div>

      <div class="hidden md:block w-px h-32 bg-white/30"></div>


      <!-- Right -->
      <div class="flex flex-col items-center text-white p-4 gap-3">
        <h1 class="text-2xl font-bold">Contact</h1>
        <div class="flex flex-col gap-1 text-white/70">
            <h3>Email: <a href="">testing@gmail.com</a></h3>
            <h3>Phone: 08xx xxxx xxxx</h3>
            <h3>Address: Pekanbaru City, <br> Riau, Indonesia</h3>
        </div>
      </div>
    </div>

    <div class="flex h-px max-w-6xl w-full items-center mx-auto bg-white/30 mb-5"></div>

    <div class="text-white flex items-center justify-center mb-10">
        <p>&copy; RYS - Digital & Website 2026</p>
    </div>
  </footer>
</template>

<script setup></script>
