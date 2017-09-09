/// <reference path="ZooAnimals.ts" />
namespace Zoo {
    export class Reptile implements Animal {
        public skinType: string = "scales";
        public isMammal(): boolean {
            return false;
        }
    }
}