
export class Teacher {
    private courses: string[] = [];

    constructor(private name: string) {}

    createCourse(courseName: string): void {
        this.courses.push(courseName);
        console.log(`Course "${courseName}" created by ${this.name}.`);
    }
}

