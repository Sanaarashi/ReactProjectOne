import React, {Component} from 'react';
import styled from 'styled-components';
import Bestellers from './bestseller';
import Goods from './goods';
import Coffee from './coffee';

import './app.css';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export default class App extends Component {

  render() {  
    return (
      <Container className="App">
      <Bestellers/>
      <Goods/>
      <Coffee/>
      </Container>
    );
  }
}