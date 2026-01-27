import { professionalExperiences } from "@/data/professionalExperiences.js";
import { projects } from "@/data/projects.js";
import { skills } from "@/data/skills.js";

export function useIdToTitle() {
    /**
         * Retourne le titre de l'expérience à partir de son id.
         */
    function idToTitleExperiences(id) {
        const found = professionalExperiences.find(item => item.id === id);
        return found ? found.title : id;
    }

    /**
         * Retourne le titre du projet à partir de son id.
         */
    function idToTitleProjects(id) {
        const found = projects.find(item => item.id === id);
        return found ? found.title : id;
    }

    /**
         * Retourne le titre de la compétence à partir de son id.
         */
    function idToTitleSkills(id) {
        const found = skills.find(item => item.id === id);
        return found ? found.title : id;
    }

    return {
        idToTitleExperiences,
        idToTitleProjects,
        idToTitleSkills
    };
}
