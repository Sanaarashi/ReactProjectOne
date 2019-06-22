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
    height: 70%;
  }
  div {
    font-size: bold; 
  }
  
`;

export default class Coffee extends Component {
    getData = new GetData();

    state = {
      coffee: []
    }
  
    componentDidMount() {
      this.getItems();
    }
  
    setItems = (coffee) => {
      this.setState({
        coffee
      })
    }
  
    getItems = () => {
      this.getData.getCoffee()
        .then(this.setItems)
    }
  
    renderItems = (data) => {
      return data.map(item => {
        const {name, url, price, description, country} = item;
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
              <div>{description}</div>
              <div>{country}</div>
              <div>{price}</div>
            </Block>
        )
      })
    }
  
    render() {  
      const {coffee} = this.state;

      return (
        this.renderItems(coffee)
      );
    }
}