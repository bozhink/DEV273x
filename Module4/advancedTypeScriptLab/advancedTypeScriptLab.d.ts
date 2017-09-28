declare class genericClass<T> {
    private val;
    setVal(val: T): void;
    getVal(): T;
}
declare let element1: genericClass<Element>;
declare let element2: genericClass<HTMLElement>;
declare let element3: genericClass<Element>;
declare let elementArray: Element[];
declare function isHTMLElement(x: any): x is HTMLElement;
declare function convertElement(elem: Element | HTMLElement): HTMLElement;
declare function standardizeElements(elemArray: Array<any>): Array<HTMLElement>;
declare let standardElements: HTMLElement[];
declare class Rotater {
    rotate(elem: HTMLElement): void;
    rotateBack(elem: HTMLElement): void;
}
declare class Mover {
    move(elem: HTMLElement): void;
    moveBack(elem: HTMLElement): void;
}
declare class movingElement implements Rotater, Mover {
    rotate: (elem: HTMLElement) => any;
    move: (elem: HTMLElement) => any;
    moveBack: (elem: HTMLElement) => any;
    rotateBack: (elem: HTMLElement) => any;
    element: HTMLElement;
    constructor(elem: HTMLElement);
}
declare function applyMixins(derivedClass: any, baseClasses: any[]): void;
