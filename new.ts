
let object1={
    foo:1,
    too: 2,
    value: {
        root:"string"
    }
}

// console.log(object1.value);
// object1.value.root="52422";
// console.log(object1.value);
// object1.foo=4;
// Object.freeze(object1);
// object1.foo=5;
// console.log(object1);
// Object.freeze(object1.value);
// object1.value.root="number";
// object1.foo=5;
// console.log(object1);

 // let anyobject:any = "dkflsdkfjlsd";
 // console.log(anyobject);
 // console.log((<string>anyobject).length);



//  function getName(firstName:string="Aleksey", lastName?:string="Kasatkin"):string{
//      if(lastName){
//          return firstName+" "+lastName;
//      }else{
//          return firstName;
//      }
//  }
//
//  console.log(getName("Vasya"));
// console.log(getName("Vasya", "Pupkin"));
// console.log(getName());
//
// function sum(...numbers : number[]):number;
// function sum(...strings: string[]):string;
// function sum(...anys: any[]):any{
//     let result;
//     if (typeof anys[0] ==="number") {
//         result = 0;
//     }else if (typeof anys[0]==="string"){
//         result=""
//     }else{
//         return false;
//     }
//     for(let i=0; i<anys.length;i++){
//         result+=anys[i];
//     }
//     return result;
// }
// let i:number=sum(1,4);
// console.log(i);
// let i:string=sum("kdjflsd","jkfsjldf");
// console.log(i);
// let i:string=sum(true, false);
// console.log(i);

// interface IUser {
//     getName(id:number):string;
// }

// class User implements IUser{
//     // getName(id: number):string{
//     //     if(id==this.id&&this._name) {
//     //         return this._name;
//     //     }else {
//     //         return "";
//     //     }
//     //
//     // }
//     constructor(private id: number, private name?: string){
//         this.id=id;
//         this.name=name;
//     }
//     getInfo(): string {
//         if(this.name)
//             return "id:" + this.id + " name:" + this.name;
//         else
//             return "id:"+this.id;
//     }
//
//     getId():number{
//       return this.id;
//     }
//     setId(id:number):void{
//         this.id=id;
//     }
//
//
//     getName(): string {
//         if(this.name)
//             return this.name;
//         else
//             return "";
//     }
//
//     setName(value: string) {
//         this.name = value;
//     }
// }

// let user: User=new User(1);
// console.log(user.getInfo());
// let user1: User=new User(1, "Aleksey");
// console.log(user1.getName());

class Operation{
    static PI: number=3.14;

    static getSquare(radius: number): number{
        return this.PI*radius*radius;
    }
}

// console.log(Operation.getSquare(2));

// class Employee extends User{
//     constructor(id: number, private company:string, userName?:string){
//         super(id, userName);
//         this.company=company;
//     }
//
//     getName(){
//         return super.getName();
//     }
//
//     getId(){return super.getId()}
//
//     getCompany(){
//         return this.company;
//     }
//
//     getInfo(){
//         return this.getName()+" "+this.getCompany();
//     }
//
// }

// let employee:User=new Employee(1, "Uragan", "Fedya");
// console.log(employee);
// console.log(employee.getInfo());
// console.log(typeof employee);

abstract class Figure{
    getArea():void{
        console.log("not implemented");
    }
}

class Triangle extends Figure{
    constructor(private a: number, private b: number) {
        super();
        this.a=a;
        this.b=b;
    }

    getArea() {
        console.log("Площадь прямоугольного треугольника: "+(this.a*this.b)/2);
    }
}

// let triangle: Figure=new Triangle(3,4);
// triangle.getArea();


interface Movable {
    readonly path: number;
    readonly time: number;
    getSpeed():number;
}

class Car implements  Movable{
    // public speed: number;

    constructor(public path:number, public time: number){
        this.path=path;
        this.time=time;
    }
    getSpeed(): number {
        return this.path/this.time;
    }
}

// let car:Movable=new Car(28,2);
// console.log(car.getSpeed());
// car.time=4;
// console.log(car);

interface IUser {
    id: number;
    name: string;
    age?: number;
}
let employee: IUser = {

    id: 1,
    name: "Alice",
    age: 23
}
let manager: IUser ={
    id:3, age:4,name:"Prerjek"
}

console.log(manager);


interface SimpleFunction{
    (name:string, numbers:number):void;
}

let simplefunction:SimpleFunction=function(name:string, numbers:number):void {
    return;
}

simplefunction("kdjflsd",4);

interface StringArray {
    [index:number]:string;
}

let phones:StringArray;
phones=["Iphone7", "Samsung5"];
console.log(phones[1]);