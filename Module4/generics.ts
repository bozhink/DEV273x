function identity(arg: number): number {
    return arg;
}

function identity1(arg: any): any {
    return arg;
}

function identity2<T>(arg: T): T {
    return arg;
}

let output1 = identity2<string>("myString");
let output2 = identity2("myString");

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

//let myIdentity6: <T>(arg: T) => T = identity;

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity9<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity9;

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
