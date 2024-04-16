import { ReactNode } from "react";

interface Props {
    cobj: string,
   
    //myfunc: (item: string) => void
    children: ReactNode
}

function Obj({ cobj}: Props) {

    // let name: string;
    // let id: number;
    // let email: string;

    // props.name = 'alamin';
    // props.id = 1234;
    // props.email = 'alamina@aiub.edu'
    //myfunc(name);

    return (
        <>
            <div>
                <h2>Career objective: {cobj}</h2>
              
               
            </div>
        </>
    )
}

export default Obj;