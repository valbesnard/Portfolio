import BaseModel from "./BaseModel";

export default class Skill extends BaseModel {
    constructor(data, application) {
        super(data, application);
        this.category = data.category;
        this.idProjects = data.projects;
        this.idExperiences = data.experiences;
    }

    getCategory() {
        return this.category;
    }

    getProjects() {
        return this.application.getProjects(this.projectIds);
    }

    getExperiences() {
        return this.application.getExperiences(this.experienceIds);
    }
}