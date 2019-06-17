import React, {Component} from 'react';
import GetResources from '../../services/getService';

import styled from 'styled-components';

const List = styled.ul`
li {
    cursor: pointer;
}
`;

export default class ItemList extends Component {

    testService() {
        const test = new GetResources();
        test.getACharacter(33)
            .then(res => console.log(res));
    }

    render() {
        return (
            <List className="item-list list-group">
                <li className="list-group-item"
                onClick={this.testService}>
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </List>
        );
    }
}