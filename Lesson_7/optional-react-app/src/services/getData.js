export default class GetData {
    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }

    async getEverything(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`An error ${res.status}`);
        }

        return res.json();
    }

    async getBestsellers() {
        const res = await this.getEverything('bestsellers/');
        return res
    }
}