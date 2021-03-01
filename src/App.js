import React, { Component } from 'react';
import './App.css';
import person from './Person/person';
import Person from './Person/person';

class App extends Component {
  state = {
    people: [
      {name: 'John', age: 34},
      {name: 'chad', age: 36},
      {name: 'Bob', age:42}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
      {name: 'Bill', age: 1},
      {name: 'Choad', age: 2},
      {name: 'Billy', age:3}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
      {name: 'Bill', age: 1},
      {name: event.target.value, age: 2},
      {name: 'Billy', age:3}
      ]
    });
  }

  render(){

    const style = {
      background_color: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>still working?</h1>
        <p>yup, still working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'hello')}>Swich Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} click={this.switchNameHandler} changed={this.nameChangedHandler}>my hobby is: skiing.</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
