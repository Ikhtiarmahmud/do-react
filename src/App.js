import React, { useState } from 'react';
import './App.css';
import Person  from './Person/Person';

const App = props => {
 
  const [personState, setPersonState] = useState({
    person : [
      { name: "mitul", age: "21" },
      { name: "abir", age: "15" },
      { name: "arafat", age: "26" }
    ]
  })

  const switchNameHandler = (newName) => {
    setPersonState({
      person: [
         { name : 'john', age: "21"},
         { name : "abir", age: "15"},
         { name : "arafat", age: "30 "}
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      person: [
         { name : 'john', age: "21"},
         { name : event.target.value, age: "15"},
         { name : "arafat", age: "30 "}
      ]
    })
  }
 
  //it's class based components
  /*state = {
    person : [
      { name: "mitul", age: "21" },
      { name: "abir", age: "15" },
      { name: "arafat", age: "26" }
    ]
  }

  switchNameHandler = () => {
      this.setState({
        person: [
           { name : "max", age: "21"},
           { name : "abir", age: "15"},
           { name : "arafat", age: "30 "}
        ]
      })
  } */


    return (
      <div className="App">
          {/* change name by pass parameter with binding. It's an efficient way*/}
          <button onClick={switchNameHandler.bind(this, 'john')}>Switch Name</button>

          {/* change name by pass parameter with arrow function */}
          {/* <button onClick={() => switchNameHandler('kobir')}>Switch Name</button> */}
          <Person 
            name={personState.person[0].name} 
            age={personState.person[0].age}/>
          <Person 
            name={personState.person[1].name} 
            age={personState.person[1].age}
            click={switchNameHandler} //pass method referance in child component
            changed={nameChangeHandler}
            >I love movie</Person>
          <Person 
            name={personState.person[2].name} 
            age={personState.person[2].age}/>

          {/* it's for class based-components */}
          {/* <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}>I love movie</Person>
          <Person name={this.state.person[2].name} age={this.state.person[2].age}/> */}
      </div>
    );
}

export default App;
