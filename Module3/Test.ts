import validator from "./ZipCodeValidatorWithDefault";

let myValidator = new validator();
myValidator.isAcceptable("12332");


import validate from "./StaticZipCodeValidator";

let strings = ["Hello", "98052", "101"];

strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
})