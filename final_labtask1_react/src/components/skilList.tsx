import StudentSkills from "./skills";



function StudentSkillsList() {
    const std = ['Nestjs ,Typescript, Javascript, python'];

    return (
        <>
            <div>
                {
                    std.map((item) => (
                        <StudentSkills key={item} Skills={item}>
                        </StudentSkills>
                    ))
                }
            </div>
        </>
    )
}

export default StudentSkillsList;