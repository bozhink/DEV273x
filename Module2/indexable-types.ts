interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

// console.log(myStr);

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// interface NotOkay {
//     [x:number]:Animal;
//     [x:string]:Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     name: string;
// }

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let readonlyStringArray: ReadonlyStringArray = ["Alice", "Bob"];
// readonlyStringArray[2] = "Mallory";
