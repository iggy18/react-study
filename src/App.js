import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const App = props => {
  const [personState, setPersonState] = useState({
    people: [
        {name: 'John', age: 34},
        {name: 'chad', age: 36},
        {name: 'Bob', age:42}
      ]
  });

  const switchNameHandler = () => {
    setPersonState({
      people: [
      {name: 'Bill', age: 1},
      {name: 'Choad', age: 2},
      {name: 'Billy', age:3}
      ]
    });
  };

  return (
    <div className="App">
      <h1>still working?</h1>
      <p>yup, still working</p>
      <button onClick={switchNameHandler}>Swich Name</button>
      <Person name={personState.people[0].name} age={personState.people[0].age}/>
      <Person name={personState.people[1].name} age={personState.people[1].age}>my hobby is: skiing.</Person>
      <Person name={personState.people[2].name} age={personState.people[2].age}/>
    </div>
  );
}


export default App;
