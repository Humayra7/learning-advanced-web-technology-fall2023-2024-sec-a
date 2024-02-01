function fetchData(callback)
{
    setTimeout(()=>{
        const data ="hello, world!";
        callback(data);
    }, 2000);
}

function process(data)
{
    console.log("Data received:", data);
}

console.log("start");
fetchData(process);
console.log("end");

function fetchData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=true ;
            if (success)
            {
                const data ="hello, world";
                resolve(data);
            }
            else{
                const error ="failed to fetch data";
                reject(error);
            }
            
        }, 2000);

    })
    
}

console.log("start");
fetchData()
.then( data=>{
    console.log("data received:", data);
})
.catch(error=>{
    console.error("error:", error);
})
.finally(()=>{
    console.log("operation complete");
});

console.log("end");