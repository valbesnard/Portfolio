import Card from "./Card";

export default class Experience extends Card {
    constructor(data, application) {
        super(data, application);
        this.type = data.type;
        this.projectIds = data.projects ?? [];
        this.skillIds = data.skills ?? [];
    }

    getType() {
        return this.type;
    }

    getProjects() {
        return this.application.getProjects(this.projectIds);
    }

    getSkills() {
        return this.application.getSkills(this.skillIds);
    }
}