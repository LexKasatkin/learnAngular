"use strict";
var object1 = {
    foo: 1,
    too: 2,
    value: {
        root: "string"
    }
};
console.log(object1.value);
object1.value.root = "52422";
console.log(object1.value);
object1.foo = 4;
Object.freeze(object1);
object1.foo = 5;
console.log(object1);
Object.freeze(object1.value);
object1.value.root = "number";
object1.foo = 5;
console.log(object1);
