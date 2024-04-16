import StudentEducation from "./StudentEducation";

function StudentEducationList() {
    const std = ['Humaira'];


    return (
        <>
            <div>
                {
                    std.map((item) => (
                        <StudentEducation key={item} ssc="GPA-5" hsc="GPA-5" bsc="3.7">
                        </StudentEducation>
                    ))
                }
            </div>
        </>
    )
}

export default StudentEducationList;