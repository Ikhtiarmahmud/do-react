import React from 'react';

const userOutput = (props) => {
    const style = { //stylig with inline css
        padding : '50px',
        border : '1px solid grey',
        textAlign : 'center',
        width: '30%',
        boxShadow: '0px 2px 5px grey',
        marginTop : '10px'
    }

    return (
        <div style={style}>
            <p>UserName: {props.name}</p>
            <p>This is must be overWritten!</p>
        </div>
    );
}

export default userOutput;