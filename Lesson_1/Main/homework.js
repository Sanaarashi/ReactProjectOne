'use strict';

let employees = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

employees = employees
    .filter(item => {return item !='';})
    .map(item => {return item.toLowerCase().trim();});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus, eu: [untrusted]} = sponsors;

let money = cash.reduce((a, b) => a + b);

const makeBusiness = (owner = 'Sam', CEO = 'Victor', money = 0, ...employees) => {
    const sumSponsors = [...eu,  ...rus, 'unexpected sponsor'].join(' ');
    console.log(`We have a business. Owner: ${owner}, CEO: ${CEO}. Our budget: ${money}. And our employees: ${employees}`);
    console.log(`And we have a sponsors: \n${sumSponsors}`);
    console.log(`Note. Be careful with ${untrusted}. It's a huge risk.`);
}
makeBusiness('Sam', 'Victor', money, employees);