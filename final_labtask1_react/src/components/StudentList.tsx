import Student from "./Student";

function StudentList() {
    const std = ['syeda humaira'];


    return (
        <>
        <div style={{ display: "flex" }}>

<div style={{ width: "30%", padding: "20px" }}>
    <img src="src/pic.jpg" alt="face" style={{ maxWidth: "100%" }} />
</div>
            <div>
                {
                    std.map((item) => (
                        <Student key={item} name={item} id="21 - 45044 - 2" email="humaira@aiub.edu">
                            <h2>CGPA=3.7</h2>
                        </Student>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default StudentList;