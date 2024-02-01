const globalVariable ="i am global";

function exampleFunction()
{
    console.log(globalVariable);
}

exampleFunction();

function exampleFunction()
{
    const localVariable ="i am local";
    console.log(localVariable);
}
exampleFunction();


function createCounter(){
    let count= 0;
    return function()
    {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();
