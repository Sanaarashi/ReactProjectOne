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
                {label: 'Going to learn React', important: true, like: false, id: '12345678'},
                {label: 'That is so good', important: false, like: false, id: '87654321'},
                {label: 'I need a break...', important: false, like: false, id: '12348765'}
            ],
            term: '',
            filter: 'all'
        };
        this.idDataBase = ['12345678', '87654321', '12348765'];
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleState = this.onToggleState.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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

    onToggleState(id, whatState) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            let newItem;

            (whatState === 'important') ? newItem = {...old, important: !old.important} : newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.onToggleState(id, 'important');
    }

    onToggleLiked(id) {
        this.onToggleState(id, 'like');
    }


    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }
    
    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock className="app">
               <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <SearchPanelDiv className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </SearchPanelDiv>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}