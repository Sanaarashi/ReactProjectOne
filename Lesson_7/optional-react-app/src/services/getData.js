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
        const res = await this.getEverything('bestsellers');
        return res.map(this._transformThree);
    }

    async getCoffee() {
        const res = await this.getEverything('coffee');
        return res.map(this._transformFive);
    }

    async getGoods() {
        const res = await this.getEverything('goods');
        return res.map(this._transformThree);
    }

    _transformThree(data) {
        return {
            name: data.name,
            url: data.url,
            price: data.price
        }
    }

    _transformFive(data) {
        return {
            name: data.name,
            url: data.url,
            price: data.price,
            country: data.country,
            description: data.description
        }
    }
}