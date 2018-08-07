import React from 'react';
import './App.css';

const Titlepage = ({myText}) => {
    //const chapter = myText.book.content[currPosition];

    return(
        <h1 className="App-title">{myText}</h1>
    )
}

export default Titlepage