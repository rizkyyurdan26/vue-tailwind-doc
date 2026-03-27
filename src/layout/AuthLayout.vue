<template>
    <div>
        <!-- Header -->
             <NavbarComponent/>

        <!-- Body -->
        <main>
            <router-view/>
        </main>

        <!-- Footer -->
             <FooterComponent/>

    </div>
</template>

<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';


</script>
