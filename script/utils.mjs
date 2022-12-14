export class Xy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.size = max - min;
    }
}

export function randInt(min, max) {
    const size = max - min + 1;
    return Math.floor(Math.random() * size) + min;
}

export function randFloat(min, max) {
    if (min === max) {
        return min;
    }
    const size = max - min;
    return Math.random() * size + min;
}