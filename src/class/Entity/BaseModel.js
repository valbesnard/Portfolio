export default class BaseModel {
    constructor(data, application) {
        this.id = data.id;
        this.title = data.title;
        this.application = application;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getApplication() {
        return this.application;
    }
}