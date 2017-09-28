function getAvatar_Promise(elem: HTMLElement) {
    fetch('https://uinames.com/api/').then(function (response) {
        return response.json();
    }).then(function (response) {
        alert('Hi! My name is ' + response.name);
        let avatar = 'https://robohash.org/set_set3/' + response.name + '?size=60x60'
        elem.style.backgroundImage = 'url("' + avatar + '")';
        document.body.appendChild(elem);
    })
}

class genericClass<T> {
    private val: T;
    public setVal(val: T) {
        this.val = val;
    }
    public getVal(): T {
        return this.val;
    }
}

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();

element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));

let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal()
];

function isHTMLElement(x: any): x is HTMLElement {
    return x.style !== undefined;
}

function convertElement(elem: Element | HTMLElement): HTMLElement {
    if (!isHTMLElement(elem)) {
        return elem as HTMLElement;
    } else {
        return elem;
    }
}

function standardizeElements(elemArray: Array<any>): Array<HTMLElement> {
    for (let elem of elemArray) {
        convertElement(elem);
    }

    return elemArray;
}

let standardElements = standardizeElements(elementArray);

class Rotater {
    public rotate(elem: HTMLElement): void {
        elem.style.transform = "rotate(-315deg)";
    }

    public rotateBack(elem: HTMLElement): void {
        elem.style.transform = "";
    }
}

class Mover {
    public move(elem: HTMLElement): void {
        elem.style.transform = "translateX(50px)";
    }

    public moveBack(elem: HTMLElement): void {
        elem.style.transform = "";
    }
}

// Mixin
class movingElement implements Rotater, Mover {
    rotate: (elem: HTMLElement) => any;
    move: (elem: HTMLElement) => any;
    moveBack: (elem: HTMLElement) => any;
    rotateBack: (elem: HTMLElement) => any;
    element: HTMLElement;
    constructor(elem: HTMLElement) {
        elem.onmousedown = () => {
            this.move(elem);
        }

        elem.onmouseup = () => {
            this.moveBack(elem);
        }

        elem.onmouseover = () => {
            this.rotate(elem);
        }

        elem.onmouseout = () => {
            this.rotateBack(elem);
        }

        this.element = elem;
    }
}

function applyMixins(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}

applyMixins(movingElement, [Mover, Rotater]);

for (let elem of standardElements) {
    elem.style.width = "60px"
    elem.style.height = "60px"
    elem.style.margin = "5px"
    let elemClass = new movingElement(elem);
    getAvatar_Promise(elemClass.element);
}
