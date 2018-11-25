import Activity from 'src/app/activity';

export class User {
    id: string;
    name: string;
    activities: Activity[];

    constructor(name) {
        this.id = name.split(' ').join('_');
        this.name = name;
    }

    setActivities(activities: Activity[]) {
        this.activities = activities;
    }

    addActivity(activity: Activity) {
        this.activities.push(activity);
    }
}
