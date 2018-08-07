import React, { Component } from 'react';
import text from './data/tmwwt.json';
import Titlepage from './Titlepage.js';
import Sidebar from './Sidebar.js';
import Section from './Section.js';
import Prevnext from './Prevnext.js';
import './App.css';
  
// FEATURES TO ADD:
// progress bar, bookmarkability, highlightability, notability, sharability.

const sections = text.book.sections;

const initialState = {
  position: 0,
  sections: sections,
  showSidebar: true,
  showProgress: false
};
  class App extends Component {
    state={ ...initialState };
    
    goToSection = (newPosition) => {
      this.setState({
        position: newPosition
      })
    };

    previousChapter = (currPosition) => {
        this.setState({
          position: (currPosition - 1)
        })
        window.scrollTo(0,0);
    }

    nextChapter = (currPosition) => {
      this.setState({
        position: (currPosition + 1)
      })
      window.scrollTo(0,0);
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titlepage 
            myText={text.book.content[this.state.position].heading}
            currPosition={this.state.position}
          />
        </header>
        <Sidebar
          myText={text}
          onClick={this.goToSection}
        />
        <Section
          myText={text}
          currPosition={this.state.position}
        />
        <Prevnext
            totalSections = {this.state.sections}
            currPosition = {this.state.position}
            prevClick = {this.previousChapter}
            nextClick = {this.nextChapter}
        />
      </div>
    );
  }
}

export default App;
