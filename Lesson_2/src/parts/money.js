export default class Sponsors {
    constructor({cash, eu, rus}={}) {
        this.cash = cash;
        this.eu = eu;
        this.rus = rus;
        this.money = 0;
    }
    getMoneyLebowski() {
        this.money = this.cash.reduce((a, b) => a + b);
    }
}