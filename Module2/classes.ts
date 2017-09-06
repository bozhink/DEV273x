class Greeter {
    static standardGreeting: string = "Hello, ";
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return Greeter.standardGreeting + this.greeting;
    }
}

let greeter = new Greeter("world");

class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}

class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

// new Animal1("Cat").name

class Rhino1 extends Animal1 {
    constructor() { super("Rhino"); }
}

class Employee1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal1("Goat");
let rhino = new Rhino1();
let employee = new Employee1("Bob");

animal = rhino;
// animal = employee;

class Person {
    protected name: string;
    protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);
// let john = new Person("John");

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Octopus1 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) { }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";

class Employee2 {
    fullName: string;
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}

let passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}


class Grid {
    static origin = { x: 0, y: 0 };

    constructor(public scale: number) { }

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));


abstract class Animal2 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Department {
    constructor(public name: string) { }

    printName(): void {
        console.log("Department ma,e: " + this.name);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10AM.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();


let greeter1 = new Greeter("1");
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker("2");
console.log(greeter2.greet());

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
