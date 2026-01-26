import BaseModel from "./BaseModel";

export default class Card extends BaseModel {
    constructor(data, application) {
        super(data, application);
        this.context = data.context;
        this.date = data.date;
        this.description = data.description;
    }

    getContext() {
        return this.context;
    }

    getDate() {
        return this.date;
    }

    getDescription() {
        return this.description;
    }
}