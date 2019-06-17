export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`There has been an error in fetching ${url}, receiving an error ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters() {
        return this.getResources('/characters');
    }

    getAllBooks() {
        return this.getResources('/books');
    }

    getAllHouses() {
        return this.getResources('/houses');
    }

    getACharacter(id) {
        return this.getResources(`/characters/${id}`);
    }
}