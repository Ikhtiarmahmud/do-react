import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Character/Character';

class App extends Component {

  state = {
    userInput : '',
  }

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  removeCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updateText = text.join('');
      this.setState({ userInput : updateText })
  }
  
  render() {

    const char = this.state.userInput.split('').map((ch, index) => {
           return <Char letter={ch} 
                        key={index} 
                        click={() => this.removeCharHandler(index)} />
    })

    return(
      <div>
         <input type="text" onChange={this.userInputHandler} value={this.state.userInput}/>
         <p>{this.state.userInput}</p>
         <Validation inputLength={this.state.userInput.length} />
         {char}
      </div>
    );
  }

}

export default App;
