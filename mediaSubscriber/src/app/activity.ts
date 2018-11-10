import Entity from 'src/app/entity';

export default class Activity {
    title: string;
    entity: Entity;

    constructor(title, entity) {
        this.title = title;
        this.entity = entity;
    }
}
