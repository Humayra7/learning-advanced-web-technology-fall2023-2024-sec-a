interface Props {
    Skills: string,


}

function StudentSkills({ Skills }: Props) {
    return (
        <>
            <div>
                <h2> Skills: {Skills}</h2>
            </div>
        </>
    )
}

export default StudentSkills;