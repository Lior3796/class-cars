class Car {
    constructor(wheelAmount, engineCC, color) {
        this.wheelAmount = wheelAmount;
        this.engineCC = engineCC;
        this.color = color;
    }

    toString() {
       
        return `
        ${this.wheelAmount}
        ${this.engineCC}
        ${this.color}
        `;
    }

    static getBiggestEngine(cars) {
        const sortedCars = cars.sort((car1, car2) => {
       
            return car1.engineCC - car2.engineCC;
       
        });
        return sortedCars[sortedCars.length - 1];
    }
}

class Mazda extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    toString() {
        return `
        ${super.toString()}
        ${this._name}
        `;
    }
}

class Toyota extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    toString() {
        return `
        ${super.toString()}
        ${this._name}
        `;
    }
}

class BMW extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    toString() {
        return `
        ${super.toString()}
        ${this._name}
        `;
    }
}
