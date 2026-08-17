<script setup>
import Timeline from 'primevue/timeline';

import ExperienceCard from '../cards/ExperienceCard.vue';

import { professionalExperiences } from '@/data/professionalExperiences';
import { formations } from '@/data/formations';
import activeSection from '@/scripts/useActiveSection.js';

document.addEventListener('DOMContentLoaded', async () => {
    activeSection.addSection("Experiences");
});
</script>

<template>
    <section id="Experiences">
        <div id="ProfessionnalExperiences">
            <h2>Expériences Professionnelles</h2>
            
            <div class="professionalExperiences-list">
                <Timeline :value="professionalExperiences" align="left" class="timeline-custom">
                    
                    <template #marker="slotProps" class="separator-custom">
                        <span class="marker-custom">
                            <img src="/images/icons/work.png" alt="Work Icon" class="timeline-icon" />
                        </span>
                    </template>

                    <template #opposite="slotProps">
                        {{ slotProps.item.date }}
                    </template>

                    <template #content="slotProps">
                        <ExperienceCard :key="slotProps.item.id" :id="slotProps.item.id"
                            :title="slotProps.item.title" :context="slotProps.item.context" :date="slotProps.item.date"
                            :description="slotProps.item.description" :projects="slotProps.item.projects" :skills="slotProps.item.skills" />
                    </template>
                </Timeline>
            </div>
        </div>

        <div id="Formations">
            <h2>Formations</h2>
            <div class="formations-list">
                <Timeline :value="formations" align="left">
                    <template #marker="slotProps" class="separator-custom">
                        <span class="marker-custom">
                            <img src="/images/icons/education.png" alt="Work Icon" class="timeline-icon" />
                        </span>
                    </template>

                    <template #opposite="slotProps">
                        {{ slotProps.item.date }}
                    </template>

                    <template #content="slotProps">
                        <ExperienceCard :key="slotProps.item.id" :id="slotProps.item.id"
                            :title="slotProps.item.title" :context="slotProps.item.context" :date="slotProps.item.date"
                            :description="slotProps.item.description" :projects="slotProps.item.projects" :skills="slotProps.item.skills" />
                    </template>
                </Timeline>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .timeline-custom {
        --p-timeline-event-connector-color: var(--alt-color);
        --p-timeline-event-connector-size: 2px; /* si thème supporte */
    }

    .marker-custom {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--alt-color);
    } 

    :deep(.p-timeline-event-separator) {
        margin-right: 1.5rem;
        margin-left: 1.5rem; /* vertical timeline : espace horizontal */
    }

    :deep(.p-timeline-event-content) {
        margin: 0.5rem 0;   /* un petit padding vertical */
    }

    :deep(.p-timeline-event-connector) {
        background-color: black;
    }

    section {
        display: flex;
        gap: 2rem;
    }

    section > div {
        flex: 1;
    }
</style>