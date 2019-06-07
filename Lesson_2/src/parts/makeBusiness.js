import Employees from './employees';
import Sponsors from './money';

export default class Business {
    constructor({owner = 'Sam', CEO = 'Victor', money, employees} = {}) {
        this.owner = owner;
        this.CEO = CEO;
        this.money = money;
        this.employees = employees;
    }
    makeEmployees() {
        let emp = new Employees(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
        emp.makeNamesCorrect();
        this.employees = emp.names;
    }
    makeMoney() {
        let someCash = new Sponsors({
            cash: [40000, 5000, 30400, 12000],
            eu: ['SRL', 'PLO', 'J&K'],
            rus: ['RusAuto', 'SBO']
        });
        someCash.getMoneyLebowski();
        this.money = someCash.money;
        const {eu, rus, eu: [untrusted]} = someCash;
        this.sumSponsors = [...eu,  ...rus, 'unexpected sponsor'].join(' ');
        this.untrusted = untrusted;
    }
    makeBusiness() {
        this.makeEmployees();
        this.makeMoney();
        console.log(`We have a business. Owner: ${this.owner}, CEO: ${this.CEO}. Our budget: ${this.money}. And our employees: ${this.employees}`);
        console.log(`And we have a sponsors: \n${this.sumSponsors}`);
        console.log(`Note. Be careful with ${this.untrusted}. It's a huge risk.`);
    }
}