<script setup>
import { projects as projectsList } from "@/data/projects.js";
import { professionalExperiences as experiencesList } from "@/data/professionalExperiences.js";
import { formations as formationsList } from "@/data/formations.js";
import { useOverlay } from "@/composables/useOverlay";
import { useIdToTitle } from "@/composables/useIdToTitle";

const { isOverlay, showOverlay, hideOverlay } = useOverlay();
const { idToTitleExperiences, idToTitleProjects, _ } = useIdToTitle();

const props = defineProps({
    id: String,
    title: String,
    category: String,
    experiences: Array,
    projects: Array
})
</script>

<template>
    <a href="" :id="id" @click.prevent="showOverlay" :class="category.split(' ', 1) + '-element' + ' skill-name'"> {{
        title }}</a>

    <div v-if="isOverlay" class="back-overlay">
        <div class="overlay">
            <div class="top">
                <h3>{{ title }}</h3>
                <a href="" @click.prevent="hideOverlay">Fermer</a>
            </div>

            <div>
                <h4>Projets</h4>
                <ul>
                    <li v-for="project in projectsList.filter(p => projects.includes(p.id))" :key="project.id">
                        <a :href="'#' + project.id" @click="hideOverlay">
                            {{
                                idToTitleProjects(project.id)
                            }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Contextes d'applications</h4>
                <ul>
                    <li v-for="experience in experiencesList.filter(e => experiences.includes(e.id))"
                        :key="experience.id">
                        <a :href="'#' + experience.id" @click="hideOverlay"> {{
                            idToTitleExperiences(experience.id) }}</a>
                    </li>
                    <li v-for="formation in formationsList.filter(e => experiences.includes(e.id))"
                        :key="formation.id">
                        <a :href="'#' + formation.id" @click="hideOverlay"> {{
                            idToTitleExperiences(formation.id) }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    color: rgb(0, 0, 238);
}
</style>