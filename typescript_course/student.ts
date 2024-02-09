
export class Student {
    private enrolledCourses: string[] = [];

    name: string;
    constructor( name: string) {
        this.name = name;
    }

    enroll(courseName: string): void {
        this.enrolledCourses.push(courseName);
        console.log(`${this.name} enrolled in "${courseName}".`);
    }
}
