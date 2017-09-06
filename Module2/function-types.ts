interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source: string, subString: string): boolean {
    let result: number = source.search(subString);
    return result > -1;
}

let mySearch1: SearchFunc = function (src: string, sub: string): boolean {
    let result: number = src.search(sub);
    return result > -1;
}

let mySearch2: SearchFunc = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}