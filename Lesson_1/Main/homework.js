'use strict';

let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    employersNames = [];

employersNames = employers
    .filter(item => {return item !='';})
    .map(item => {return item.toLowerCase().trim();});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0) => {
    let total = own;
    total = cash.reduce((a, b) => a + b);
    return total;
}

const {cash, eu, rus, eu: [untrusted]} = sponsors;

let money = calcCash(cash);

const makeBusiness = (cash, owner = 'Sam', CEO = 'Victor', ...emp) => {
    const sumSponsors = [...eu,  ...rus, 'unexpected sponsor'].join(' ');
    console.log(`We have a business. Owner: ${owner}, CEO: ${CEO}. Our budget: ${cash}. And our employees: ${emp}`);
    console.log(`And we have a sponsors: \n${sumSponsors}`);
    console.log(`Note. Be careful with ${untrusted}. It's a huge risk.`);
}

makeBusiness(money, undefined, undefined, employersNames);