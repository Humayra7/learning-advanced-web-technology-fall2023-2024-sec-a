interface IEmployee{
    id: number;
    name: string;
    display(): void;
}
class Employee2 implements IEmployee{
    id: number;
    name: string;
    constructor(id: number, name:string)
    {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(`ID = ${this.id}, name = ${this.name}`);
    }
}
let emp3 = new Employee2(1,"steve");
emp3.display();