import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, edit: false, id: 'qwqw'},
        {label: 'That is so good', important: false, edit: false, id: 'werr'},
        {label: 'I need a break...', important: false, edit: false, id: 'fdfdf'}
    ];

    return (
        <div>
           <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;