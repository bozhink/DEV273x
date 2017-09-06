interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
p = new Person();

let y = { name: "Alice", location: "Seattle" };
p = y;

function greet(n: Named) {
    console.log("Hello, " + n.name);
}

greet(y);

let f1 = (a: number) => 0;
let f2 = (b: number, s: string) => 0;

f2 = f1;
// f1 = f2;

let items = [1, 2, 3];
items.forEach((item, index, array) => console.log(item));
items.forEach(item => console.log(item));

let g1 = () => ({ name: "Alice" });
let g2 = () => ({ name: "Alice", location: "Seattle" });

g1 = g2;
// g2 = g1;

// Enums are not compatible
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let s = Status.Ready;
// s = Color.Green;

class Animal1 {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size1 {
    feet: number;
    constructor(numFeet: number) { }
}

let a1: Animal1;
let s1: Size1;

a1 = s1;  //OK
s1 = a1;  //OK

