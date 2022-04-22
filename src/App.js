import Nav from './Nav';
import MainDisplay from './MainDisplay';
import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      toggleValues : [true, false]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    let state = this.state;
    for (let index = 0; index < state.toggleValues.length; index++) {
        state.toggleValues[index] = false;
    }
    state.currentPage = index;
    state.toggleValues[index] = true;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <Nav toggleValues={this.state.toggleValues} handleClick={this.handleClick}/>
        <MainDisplay currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default App;
