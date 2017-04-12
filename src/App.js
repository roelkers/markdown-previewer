import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `**bold**

heading
============

*italic*`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div id="appContainer">
        <h1 style={{fontFamily:"Inconsolata"}}>React Markdown Editor</h1>
        <div className="container">
          <textarea  type="text"
           className="input"
           value={this.state.input}
           onChange={this.handleChange} />
          <div className="markdown">
            <ReactMarkdown source={this.state.input} />
          </div>
        </div>
     </div>
    );
  }
};

export default App;
