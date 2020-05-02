import React from 'react';
import './UserInput.css'; //stylihg with separate css class

const userInput = (props) => {
    return <input className="UserInput" type="text" onChange={props.changed} value={props.name}/>
}

export default userInput;