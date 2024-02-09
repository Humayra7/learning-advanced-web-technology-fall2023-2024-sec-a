import {Teacher} from './teacher';
import {Student} from './student';

export class Course {
    private name: string;
    private teacher: Teacher;
    private students: Student[]=[];

    constructor(courseName: string, teacher: Teacher) {
       
        this.name = courseName;
        this.teacher = teacher;
    }

    enrollStudent(student: Student): void {
        this.students.push(student);
        console.log(`${student.name} enrolled in "${this.name}".`);
    }
}

