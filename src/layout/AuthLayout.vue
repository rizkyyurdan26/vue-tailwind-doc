<template>
    <div>
        <!-- Header -->
             <NavbarComponent/>

        <!-- Body -->
        <main>
            <HeroMixComplete/>
            <router-view/>
        </main>

        <!-- Footer -->
             <FooterComponent/>

    </div>
</template>

<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeroMixComplete from '../components/heroSection/HeroMixComplete.vue';
import NavbarComponent from '../components/NavbarComponent.vue';


</script>
