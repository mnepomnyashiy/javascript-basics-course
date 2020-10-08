class Goods {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    show() {
        return console.log(`title ${this.title}, price ${this.price}`);
    }
}

const goodsOne = new Goods('bred', 14);
const goodsTwo = new Goods('milk', 36);
goodsOne.show();
goodsTwo.show();

class Phone extends Goods {
    constructor(title, price, type) {
        super(title, price);
        this.type = type;
    }

    ring() {
        console.log(`hello ${this.type}`);
    }
}

const phoneOne = new Phone('iPhone', 10000, 'smartphone');
const phoneTwo = new Phone('Xiaomi', 8000, 'simple mobile');

phoneOne.ring();
phoneOne.show();
phoneTwo.ring();
phoneTwo.show();
