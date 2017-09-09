/// <reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Reptile = /** @class */ (function () {
        function Reptile() {
            this.skinType = "scales";
        }
        Reptile.prototype.isMammal = function () {
            return false;
        };
        return Reptile;
    }());
    Zoo.Reptile = Reptile;
})(Zoo || (Zoo = {}));
/// <reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feather";
        }
        Bird.prototype.isMammal = function () {
            return false;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
/// <reference path="ZooAnimals.ts" />
/// <reference path="ZooWild.ts" />
/// <reference path="ZooBirds.ts" />
var rep = Zoo.Reptile;
var lizard = new rep();
console.log(lizard.skinType);
var parrot = new Zoo.Bird();
console.log(parrot.isMammal());
