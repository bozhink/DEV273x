enum RolledValue {
    One = 0,
    Two = 1,
    Three = 2,
    Four = 3,
    Five = 4,
    Six = 5
}

class Die {
    value: RolledValue;
    length: number;
    width: number;
    border: number;
    color: string;
    constructor(value: RolledValue, length: number, width: number, border: number, color: string) {
        this.value = value;
        this.length = length || 100;
        this.width = width || 100;
        this.border = border || 5;
        this.color = color || "black";
    }

    create(): Element {
        let div: HTMLElement = document.createElement("div");
        div.textContent = this.value.toString();
        div.style.width = this.width + "px";
        div.style.height = this.width + "px";
        div.style.borderWidth = this.border + "px";
        div.style.borderColor = this.color;
        return div;
    }
}
