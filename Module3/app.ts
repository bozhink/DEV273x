/// <reference path="ZooAnimals.ts" />
/// <reference path="ZooWild.ts" />
/// <reference path="ZooBirds.ts" />

import rep = Zoo.Reptile;

let lizard: rep = new rep();
console.log(lizard.skinType);

let parrot = new Zoo.Bird();
console.log(parrot.isMammal());
