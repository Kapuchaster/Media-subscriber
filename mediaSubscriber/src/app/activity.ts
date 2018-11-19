import Entity from 'src/app/entity';

export default class Activity {
    entity: Entity;
    title: string;
    interval: number;

    constructor(title, entity, interval) {
        this.title = title;
        this.entity = entity;
        this.interval = interval;
    }
}
