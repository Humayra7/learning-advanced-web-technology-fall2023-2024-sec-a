interface Props {
    ssc: string,
    hsc: string,
    bsc: string


}

function StudentEducation({ ssc, hsc, bsc }: Props) {
    return (
        <>
            <div>
                <h2>Education Qualifications:</h2>
                <h2>SSC: {ssc}</h2>
                <h2>HSC: {hsc}</h2>
                <h2>BSC: {bsc}</h2>
            </div>
        </>
    )
}

export default StudentEducation;