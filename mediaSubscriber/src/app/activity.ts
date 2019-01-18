import Entity from 'src/app/entity';
import { Subject } from 'rxjs';

export default class Activity {
    entity: Entity;
    title: string;
    interval: number;
    counter: number;
    getNextContent: Subject<any> = new Subject<any>();

    constructor(title?: any, entity?: any, interval?: any) {
        this.title = title;
        this.entity = entity;
        this.interval = interval;
        this.counter = interval;

        const self = this;
        setInterval( function() {
            if (self.counter === 0) {
                self.getNextContent.next(self.getContent());
                self.counter = self.interval;
            } else {
                self.counter--;
            }
        }, 1000);
    }

    getContent() {
        return 'blabla';
    }

}
