let a: number= 10;
let b: "hello";
let c: boolean = true;

function add(a: number, b: number): number{
    return a + b;
}
console.log(add(10,20));

type Person ={ id: number, name: string};
let p: Person ={id: 1, name: "john"};
console.log(p);

let y: number | string;
y =10;
console.log(y);

let z: "Red" | "Green" | "Blue";
z= "Red";
console.log(z);

