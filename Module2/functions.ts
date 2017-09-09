function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; }

function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

buildName("Bob");
buildName("Bob", "Adams");
// buildName("Bob", "Adams", "Sr.");

function buildName1(firstName: string, lastName: string = "Smith"): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

buildName1("Bob");
buildName1("Bob", "Adams");
// buildName("Bob", "Adams", "Sr.");

// Rest parameters
function buildName2(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

let buildNameFn: (firstName: string, ...rest: string[]) => string = buildName2;
