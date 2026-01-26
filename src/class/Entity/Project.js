import Card from "./Card";

export default class Project extends Card {
    constructor(data, application) {
        super(data, application);
        this.links = data.links;
        this.images = data.images;
        this.idExperiences = data.experiences;
        this.idSkills = data.skills;
    }

    getLinks() {
        return this.links;
    }

    getImages() {
        return this.images;
    }
    
    getExperiences() {
        return this.application.getExperiences(this.experienceIds);
    }

    getSkills() {
        return this.application.getSkills(this.skillIds);
    }
}