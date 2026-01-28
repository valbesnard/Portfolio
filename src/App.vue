<script setup>
// Layout
import Header from "@/components/layout/Header.vue";
import Nav from "@/components/layout/Nav.vue";
import Footer from "@/components/layout/Footer.vue";
// Main
import AboutMe from "@/components/main/AboutMe.vue";
import Projects from "@/components/main/Projects.vue";
import Skills from "@/components/main/Skills.vue";
import Experiences from "@/components/main/Experiences.vue";
</script>

<template>
    <Header />

    <div id="app-container">
        <Nav />

        <main>
            <AboutMe />

            <Projects />

            <Skills />

            <Experiences />
        </main>
    </div>
    
    <Footer />
</template>

<style scoped>
#app-container {
    display: flex
}

Nav2 {
    flex: 1;
}

main {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
    flex: 1;
}
</style>