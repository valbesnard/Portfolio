class Application {
    constructor() {
        this.mapSkills = new Map();
        this.mapExperiences = new Map();
        this.mapProjects = new Map();
    }

    /** Skills */
    addSkills(skills) {
        skills.forEach(skill => {
            this.mapSkills.set(skill.id, skill);
        });
    }

    getSkills(ids) {
        if (Array.isArray(ids)) {
            return ids
                .map(id => this.mapSkills.get(id))
                .filter(Boolean);
        }
        return this.mapSkills.get(ids);
    }

    /** Experiences */
    addExperiences(experiences) {
        experiences.forEach(exp => {
            this.mapExperiences.set(exp.id, exp);
        });
    }

    getExperiences(ids) {
        if (Array.isArray(ids)) {
            return ids
                .map(id => this.mapExperiences.get(id))
                .filter(Boolean);
        }
        return this.mapExperiences.get(ids);
    }

    /** Projects */
    addProjects(projects) {
        projects.forEach(project => {
            this.mapProjects.set(project.id, project);
        });
    }

    getProjects(ids) {
        if (Array.isArray(ids)) {
            return ids
                .map(id => this.mapProjects.get(id))
                .filter(Boolean);
        }
        return this.mapProjects.get(ids);
    }
}
