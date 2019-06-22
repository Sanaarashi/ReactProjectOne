import React, { Component } from 'react';
import GetData from '../services/getData';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E1A170;
  width: 500px;
  img {
    width: 100%;
    height: 85%;
  }
  div {
    font-size: bold; 
  }
  
`;

export default class Goods extends Component {
    getData = new GetData();

    state = {
      goods: []
    }
  
    componentDidMount() {
      this.getItems();
    }
  
    setItems = (goods) => {
      this.setState({
        goods
      })
    }
  
    getItems = () => {
      this.getData.getGoods()
        .then(this.setItems)
    }
  
    renderItems = (data) => {
      return data.map(item => {
        const {name, url, price} = item;
        const length = 8;
        const allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const allSymbolsLength = allSymbols.length;
        let newId = '';
  
        for ( var i = 0; i < length; i++ ) {
            newId += allSymbols.charAt(Math.floor(Math.random() * allSymbolsLength));
        }
  
        return (
            <Block key={newId}>
              <img src={url} alt="something there"/>
              <div>{name}</div>
              <div>{price}</div>
            </Block>
        )
      })
    }
  
    render() {  
      const {goods} = this.state;

      return (
        this.renderItems(goods)
      );
    }
}