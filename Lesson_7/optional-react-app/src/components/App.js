import React, {Component} from 'react';
import GetData from '../services/getData';

export default class App extends Component {
  GetData = new GetData();

  state = {
    bestellers: []
  }

  

  render() {  
    return (
      <div className="App">
        <p>Hello there</p>
      </div>
    );
  }
}