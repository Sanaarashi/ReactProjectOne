import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import styled from 'styled-components';

const ChangedListGroup = styled(ListGroup)`
    margin-top: 50px;
`;

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        if (typeof(item) == 'object') {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
                </li>
            )
        } else {
            return null
        }
    });

    return (
        <ChangedListGroup className="app-list">
            {elements}
        </ChangedListGroup>
    )
}

export default PostList;