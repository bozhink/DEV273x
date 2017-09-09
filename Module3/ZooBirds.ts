/// <reference path="ZooAnimals.ts" />
namespace Zoo {
    export class Bird implements Animal {
        public skinType: string = "feather";
        public isMammal(): boolean {
            return false;
        }
    }
}
