import StudentCourses from "./StudentCourse";


function StudentCoursesList() {
    const std = ['Advanced web ,Machine learning, Data science'];

    return (
        <>
            <div>
                {
                    std.map((item) => (
                        <StudentCourses key={item} courses={item}>
                        </StudentCourses>
                    ))
                }
            </div>
        </>
    )
}

export default StudentCoursesList;