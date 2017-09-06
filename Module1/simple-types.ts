let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName},
    I'll be ${age + 1} years old next month.`;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Declare a tuple type
let tuple: [string, number];
// Initialize it
tuple = ["hello", 10];

console.log(tuple[0].substr(1));
// Error -> console.log(tuple[1].substr(1));

enum Color { Red, Green, Blue }
//enum Color { Red = 1, Green, Blue }
//enum Color { Red = 1, Green = 2, Blue = 3 }
let c: Color = Color.Blue;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

// Type assertions
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;