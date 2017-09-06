interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) { }
}

interface ClockInterface1 {
    tick();
}

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface1;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface1 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface1 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface1 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital: ClockInterface1 = createClock(DigitalClock, 12, 17);
let analog: ClockInterface1 = createClock(AnalogClock, 7, 32);
