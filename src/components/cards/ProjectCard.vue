<script setup>
import { skills as skillsList } from '@/data/skills.js';
import { professionalExperiences } from '@/data/professionalExperiences.js';
import { useOverlay } from "@/composables/useOverlay";
import { useIdToTitle } from "@/composables/useIdToTitle";
import { useSlide } from "@/composables/useSlide";

const props = defineProps({
    id: String,
    title: String,
    experience: String,
    context: String,
    date: String,
    resume: String,
    description: String,
    links: Array,
    skills: Array,
    images: Array,
});

const { isOverlay, showOverlay, hideOverlay } = useOverlay();
const { idToTitleExperiences, _, idToTitleSkills } = useIdToTitle();
const { index, previous, next } = useSlide();;

function getSkillData(id) {
    return skillsList.find(i => i.id == id)
}
</script>

<template>
    <div :id='id' class="project-card">
        <div v-if="images.length" class="top">
            <img :src="images[0].link" alt="Image" />
        </div>
        <h3>{{ title }}</h3>
        <div class="center">
            <h4>Cadre : <a :href="'#' + experience"> {{ idToTitleExperiences(experience) }} </a></h4>
            <h4>Temporalité : {{ date }}</h4>
            <h4>Contexte : {{ context }}</h4>
            <h4>Résumé</h4>
            <p>{{ resume }}</p>
            <a href="#" @click.prevent="showOverlay">Voir plus</a>
        </div>
    </div>

    <div v-if="isOverlay" class="back-overlay">
        <div class="overlay">
            <div class="top">
                <h3>{{ title }}</h3>
                <a href="" @click.prevent="hideOverlay">Fermer</a>
            </div>
            <div>
                <h4>Cadre : <a :href="'#' + experience" @click="hideOverlay"> {{ idToTitleExperiences(experience) }}
                    </a></h4>
                <h4>Temporalité : {{ date }}</h4>
                <h4>Contexte : {{ context }}</h4>
                <h4>Description</h4>
                <p>{{ description }}</p>
            </div>

            <div>
                <h4>Liens supplémentaire</h4>
                <ul>
                    <li v-if="links.length == 0">Aucun lien supplémentaire</li>
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.link" target=" _blank" rel="noopener noreferrer" :class="link.type + ' icons'">
                            {{ link.title }}
                        </a>
                    </li>
                </ul>
                <h4>Compétences acquises</h4>
                <ul class="skills-list">
                    <li v-for="skill in skillsList.filter(s => skills.includes(s.id))">
                        <a href="#Skills" :class="getSkillData(skill.id).category.split(' ', 1) + '-element'"
                            @click="hideOverlay"> {{
                                idToTitleSkills(skill.id) }}</a>
                    </li>
                </ul>
            </div>
            <div v-if="images.length">
                <h4>Images</h4>
                <div class="carouselle-image">
                    <a v-if="images.length > 1" href="#" @click.prevent="previous(images)">Précédent</a>
                    <figure>
                        <figcaption> <em>{{ images[index].title }}</em></figcaption>
                        <img :src="images[index].link" alt="Image" />
                    </figure>
                    <a v-if="images.length > 1" href="#" @click.prevent="next(images)">Suivant</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            overlayVisible: false,
        };
    },
}
</script>

<style scoped>
.carouselle-image {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.carouselle-image figure {
    width: 50%;
    height: auto;
    margin: 0;
}

figcaption {
    padding-bottom: 10px;
    text-align: center;
}

.carouselle-image img {
    width: 100%;
    height: auto;
    border-radius: 25px;
}

h3 {
    text-align: center;
}

.center {
    margin: 10px;
}

.project-card .top {
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 26px;
}

.project-card .top img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}
</style>