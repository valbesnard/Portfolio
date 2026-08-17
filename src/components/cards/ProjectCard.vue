<script setup>
import { skills as skillsList } from '@/data/skills.js';
import { professionalExperiences } from '@/data/professionalExperiences.js';
import { useOverlay } from "@/composables/useOverlay";
import { useIdToTitle } from "@/composables/useIdToTitle";
import { useSlide } from "@/composables/useSlide";

import ChevronLeft from '@primeicons/vue/chevron-left';
import ChevronRight from '@primeicons/vue/chevron-right';
import Carousel from 'primevue/carousel'

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
        <!-- <div v-if="images.length" class="top">
            <img :src="images[0].link" alt="Image" />
        </div> -->
        <h3>{{ title }}</h3>
        <div class="center">
            <p><b>Cadre :</b> <a :href="'#' + experience"> {{ idToTitleExperiences(experience) }} </a></p>
            <p><b>Temporalité :</b> {{ date }}</p>
            <p><b>Contexte :</b> {{ context }}</p>
            <p><b>Résumé</b></p>
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
                <p><b>Cadre :</b> <a :href="'#' + experience" @click="hideOverlay"> {{ idToTitleExperiences(experience) }}
                    </a></p>
                <p><b>Temporalité :</b> {{ date }}</p>
                <p><b>Contexte :</b> {{ context }}</p>
                <p><b>Description</b></p>
                <p>{{ description }}</p>
            </div>

            <div>
                <p><b>Liens supplémentaire</b></p>
                <ul>
                    <li v-if="links.length == 0">Aucun lien supplémentaire</li>
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.link" target=" _blank" rel="noopener noreferrer" :class="link.type + ' icons'">
                            {{ link.title }}
                        </a>
                    </li>
                </ul>
                <p><b>Compétences acquises</b></p>
                <ul class="skills-list">
                    <li v-for="skill in skillsList.filter(s => skills.includes(s.id))">
                        <a href="#Skills" :class="getSkillData(skill.id).category.split(' ', 1) + '-element'"
                            @click="hideOverlay"> {{
                                idToTitleSkills(skill.id) }}</a>
                    </li>
                </ul>
            </div>
            <div v-if="images.length">
                <!-- <p><b>Images</b></p>
                <div class="carouselle-image">
                    <a v-if="images.length > 1" href="#" @click.prevent="previous(images)">Précédent</a>
                    <figure>
                        <figcaption> <em>{{ images[index].title }}</em></figcaption>
                        <img :src="images[index].link" alt="Image" />
                    </figure>
                    <a v-if="images.length > 1" href="#" @click.prevent="next(images)">Suivant</a>
                </div> -->

                <Carousel
                    :value="images"
                    :numVisible="1"
                    :numScroll="1"
                    circular
                    class="carousel"
                >
                    <template #item="{ data }">
                        <figure class="carousel-item">
                            <figcaption>
                                <em>{{ data.title }}</em>
                            </figcaption>

                            <img
                                :src="data.link"
                                :alt="data.title"
                                :draggable="false"
                            />
                        </figure>
                    </template>
                </Carousel>
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
a {
    box-sizing:border-box;
    margin-bottom: var(--margin-contents);
    color: rgb(0, 0, 238);
}

.project-card:target{
    background-color: rgb(249, 249, 249);
}

.carousel {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.carousel-item {
    width: 100%;
    height: 500px;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.carousel-item figcaption {
    margin-bottom: 1rem;
    text-align: center;
}

.carousel-item img {
    display: block;

    width: 100%;
    height: 450px;

    object-fit: contain;

    border-radius: 20px;

    user-select: none;
    -webkit-user-drag: none;
}

.caption {
    margin-bottom: 1rem;
    text-align: center;
}

.image {
    width: 100%;
    max-height: 450px;

    object-fit: contain;

    border-radius: 20px;

    user-select: none;
    -webkit-user-drag: none;
}

 figcaption {
    padding-bottom: 10px;
    text-align: center;
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