class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

const day1 = new Temperature(28);
console.log(day1.fahrenheit);
console.log(day1.celsius);

const day2 = Temperature.fromFahrenheit(77);
console.log(day2.fahrenheit);
console.log(day2.celsius);
