import {Teacher} from './teacher';
import {Student} from './student';
import {Course} from './course';


const csTeacher = new Teacher('Arisha');
const englishTeacher = new Teacher('Shahan');


const student1 = new Student('Huma');
const student2 = new Student('Zayed');
const student3 = new Student('Sajid');

csTeacher.createCourse('oop1');
englishTeacher.createCourse('english 101');
const csCourse = new Course('oop1', csTeacher);
const englishCourse = new Course('english 101', englishTeacher);


csCourse.enrollStudent(student1);
csCourse.enrollStudent(student2);
englishCourse.enrollStudent(student2);
englishCourse.enrollStudent(student3);