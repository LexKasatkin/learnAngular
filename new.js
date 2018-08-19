"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var object1 = {
    foo: 1,
    too: 2,
    value: {
        root: "string"
    }
};
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
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.getSquare = function (radius) {
        return this.PI * radius * radius;
    };
    Operation.PI = 3.14;
    return Operation;
}());
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
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.prototype.getArea = function () {
        console.log("not implemented");
    };
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Triangle.prototype.getArea = function () {
        console.log("Площадь прямоугольного треугольника: " + (this.a * this.b) / 2);
    };
    return Triangle;
}(Figure));
var Car = /** @class */ (function () {
    // public speed: number;
    function Car(path, time) {
        this.path = path;
        this.time = time;
        this.path = path;
        this.time = time;
    }
    Car.prototype.getSpeed = function () {
        return this.path / this.time;
    };
    return Car;
}());
var employee = {
    id: 1,
    name: "Alice",
    age: 23
};
var manager = {
    id: 3, age: 4, name: "Prerjek"
};
console.log(manager);
var simplefunction = function (name, numbers) {
    return;
};
simplefunction("kdjflsd", 4);
var phones;
phones = ["Iphone7", "Samsung5"];
console.log(phones[1]);
function getString(arg) {
    var result = "";
    for (var i = 0; i < arg.length; i++) {
        result += arg[i];
    }
    console.log(result);
    return result;
}
getString([1, 2, 55, 67, 7]);
getString(['kdjfl', 'kldksf;s']);
