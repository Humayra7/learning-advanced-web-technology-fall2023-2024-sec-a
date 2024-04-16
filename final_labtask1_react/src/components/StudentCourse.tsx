interface Props {
    courses: string,


}

function StudentCourses({ courses }: Props) {
    return (
        <>
            <div>
                <h2>Major courses: {courses}</h2>
            </div>
        </>
    )
}

export default StudentCourses;