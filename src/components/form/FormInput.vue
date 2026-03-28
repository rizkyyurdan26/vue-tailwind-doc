<template>
  <form @submit.prevent="submitForm" class="flex w-full my-10">
    <div
      class="flex flex-col gap-5 max-w-3xl w-full justify-center p-10 bg-blue-100 mx-auto shadow-xl rounded-xl"
    >
      <h1 class="font-semibold text-2xl">Input Your Data</h1>
      <hr class="border-black/15 mb-3" />
      <div class="flex flex-col">
        <label class="">Fullname</label>
        <input
          type="text"
          placeholder="Input Your Name"
          v-model="fullname"
          class="border border-gray-300 rounded-lg p-2 md:w-84"
        />
      </div>
      <div class="flex flex-col">
        <label class="">Email :</label>
        <input
          type="email"
          placeholder="Input Email"
          v-model="email"
          class="border border-gray-300 rounded-lg p-2 md:w-84"
        />
      </div>
      <div class="flex items-center gap-2">
        <label class="w-32">Phone :</label>
        <input
          type="text"
          v-model="phoneNumber"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex items-center gap-2">
        <label class="w-32">Gender :</label>

        <select v-model="gender" class="border border-gray-300 rounded p-2">
          <option disabled value="">Select</option>
          <option v-for="i in genderList" :key="i" :value="i">{{ i }}</option>
        </select>
      </div>

      <div class="flex gap-3 justify-center mt-5">
        <input type="checkbox" class="w-5" v-model="isActive" />
        <p>Menyetujui semua syarat dan ketentuan</p>
      </div>

      <div class="flex justify-center w-full">
        <button
          :disabled="!isActive"
          type="submit"
          class="bg-blue-500 text-white text-lg px-16 md:px-24 py-3 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const fullname = ref("");
const phoneNumber = ref("+62");
const email = ref("");
const gender = ref("");
const genderList = ["Laki-laki", "Perempuan"];

const isActive = ref(false);

function submitForm() {

  if (!fullname.value.trim() || !phoneNumber.value.trim() || !email.value.trim() || !gender.value.trim()){
    alert('Harap isi semua field dengan benar')
  } else{
    console.log(fullname.value);
    console.log(phoneNumber.value);
    console.log(gender.value);  
  }

  fullname.value = "";
  email.value = "";
  phoneNumber.value = "+62";
  gender.value = "";
}
</script>
