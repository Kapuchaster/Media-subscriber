export class User {
    name: string;
    id: string;

    constructor(name) {
        this.name = name;
        this.id = name.split(' ').join('_');
    }
}
