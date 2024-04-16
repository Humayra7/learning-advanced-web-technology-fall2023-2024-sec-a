
import Obj from "./objective";
function ObjList() {
    const std = ['Driven web developer seeking to leverage expertise in front-end and back-end technologies to contribute creatively to dynamic projects. Dedicated to delivering user-friendly experiences while staying current with emerging trends and technologies in the ever-evolving web development landscape.'];


    return (
        <>
        
            <div>
                {
                    std.map((item) => (
                        <Obj key={item} cobj={item} children={undefined} >
                            
                        </Obj>
                    ))
                }
            </div>
           
        </>
    )
}

export default ObjList;