export default class Employees {
    constructor(names) {
        this.names = names;
    }
    makeNamesCorrect() {
        this.names = this.names
            .filter(item => {return item !='';})
            .map(item => {return item.toLowerCase().trim();});
    }
}