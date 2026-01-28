<script setup>
import { aboutMe } from "@/data/aboutMe.js";
import activeSection from '@/scripts/useActiveSection.js';

document.addEventListener('DOMContentLoaded', async () => {
    activeSection.addSection("AboutMe");
});
</script>

<template>
    <section id="AboutMe">
        <img src="/profil.jpg" alt="Image de moi">
        <section>
            <h2>À propos de moi</h2>
            <p v-for="p in aboutMe.paragraphe" :id="p.id"> {{ p }}</p>
        </section>
    </section>
</template>

<style scoped>
p {
    text-indent: 2rem;
    padding-left: 1rem;
    padding-right: 5rem;
}

#AboutMe {
    display: flex;
    gap: 10px;
}

img {
    border-radius: 25px;
    height: 400px;
}
</style>