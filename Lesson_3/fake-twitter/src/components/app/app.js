import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const SearchPanelDiv = styled.div`
    display: flex;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, edit: false, id: '12345678'},
                {label: 'That is so good', important: false, edit: false, id: '87654321'},
                {label: 'I need a break...', important: false, edit: false, id: '12348765'}
            ]
        };
        this.idDataBase = ['12345678', '87654321', '12348765'];
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    makeId() {
        const length = 8;
        const allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const allSymbolsLength = allSymbols.length;
        let newId = '';

        for ( var i = 0; i < length; i++ ) {
            newId += allSymbols.charAt(Math.floor(Math.random() * allSymbolsLength));
        }

        let uniqueId = this.idDataBase.includes(newId);

        if (uniqueId === false) {
            this.idDataBase.push(newId);
            return newId;
        } else {
            this.makeId();
        }
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            this.idDataBase = [...this.idDataBase.slice(0, index), ...this.idDataBase.slice(index + 1)]
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.makeId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock className="app">
               <AppHeader/>
                <SearchPanelDiv className="search-panel">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelDiv>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}