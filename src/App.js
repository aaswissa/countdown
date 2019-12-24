import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Counter from './comps/counter';
import UserInput from './comps/userinput';



class App extends Component {
  state = {myDate:'2022-05-05'}

  changeDateByDad = (_val) => {
    // this.state.myDate = '2075-01-01';
    // this.forceUpdate(); not good for mem
    this.setState({myDate:_val});
  }
  
  render(){
    return (  
      <div className="App">
        
        <Counter myAppDate={this.state.myDate}></Counter>
        <UserInput changeDateByChild={this.changeDateByDad}></UserInput>
      </div>
  
  
    );
  }

}

export default App;
