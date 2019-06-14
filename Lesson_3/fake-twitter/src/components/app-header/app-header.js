import React from 'react';
import styled from 'styled-components';

const TheHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }   
    h2 {
        font-size: 1.2rem;
        color: grey;
    } 
`;

const AppHeader = ({liked, allPosts}) => {
    let test = "" + allPosts;
    test = +test.slice(-1);
    let temp;
    switch(test) {
        case 1:
            temp = 'ь';
            break;
        case 2:
        case 3:
        case 4:
            temp = 'и';
            break;
        default:
            temp = 'ей'
    }

    let test2 = "" + allPosts;
    test2 = +test2.slice(-2);
    switch(test2) {
        case 11:
        case 12:
        case 13:
        case 14:
            temp = 'ей';
            break;
        default:
            break;
    }
    
    return (
        <TheHeader className="app-header d-flex">
            <h1>Dmitry Zharikov</h1>
            <h2>{allPosts} запис{temp}, из них понравилось {liked}</h2>
        </TheHeader>
    )
}

export default AppHeader;