<script setup>
import { skills as skillsList } from "@/data/skills.js";
import { projects as projectsList } from "@/data/projects.js";
import { useIdToTitle } from "@/composables/useIdToTitle";

import { useOverlay } from "@/composables/useOverlay";
const { _, idToTitleProjects, idToTitleSkills } = useIdToTitle();

const { isOverlay, showOverlay, hideOverlay } = useOverlay();

const props = defineProps({
    id: String,
    title: String,
    context: String,
    date: String,
    description: String,
    skills: Array,
    projects: Array
})

function getSkillData(id) {
    return skillsList.find(i => i.id == id)
}
</script>

<template>
    <div :id="id" class="experience-card">
        <h3>{{ title }}</h3>
        <p><b>Contexte :</b> {{ context }}</p>
        <p><b>Description</b></p>
        <p>{{ description }}</p>
        <a href="#" @click.prevent="showOverlay">Voir plus</a>
    </div>

    <div v-if="isOverlay" class="back-overlay">
        <div class="overlay">
            <div class="top">
                <h3>{{ title }}</h3>
                <a href="" @click.prevent="hideOverlay">Fermer</a>
            </div>
            <div>
                <p><b>Contexte :</b> {{ context }}</p>
                <p><b>Temporalité :</b> {{ date }}</p>
                <p><b>Description</b></p>
                <p>{{ description }}</p>
            </div>
            <div>
                <p><b>Projets réalisés</b></p>
                <ul>
                    <li v-for="project in projectsList.filter(p => projects.includes(p.id))">
                        <a :href="'#' + project.id" @click="hideOverlay"> {{ idToTitleProjects(project.id)
                            }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <p><b>Compétences acquises</b></p>
                <ul class="skills-list">
                    <li v-for="skill in skillsList.filter(s => skills.includes(s.id))">
                        <a href="#Skills" @click="hideOverlay"
                            :class="getSkillData(skill.id).category.split(' ', 1) + '-element'"> {{
                                idToTitleSkills(skill.id) }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style scoped>
    h3 {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 0.25em;
    }
</style>