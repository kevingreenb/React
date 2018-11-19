import React, { Component } from "react";
console.log("App.js is running!");

class App extends Component {
  state = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (e.target.elements.option.value) {
      const option = this.state.options;
      option.push(e.target.elements.option.value);
      e.target.elements.option.value = "";
      this.setState(prevState => ({
        options: option
      }));
    }
  };

  onRemoveAll = () => {
    this.setState(prevState => ({
      options: []
    }));
  };

  onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subtitle}</p>
        <p>{this.state.options.length > 0 ? "Here are your options" : ""}</p>
        <ol>
          {this.state.options.map(each => {
            return <li key={each}>{each}</li>;
          })}
          <button disabled={this.state.options.length != 0} onClick={this.onMakeDecision}>What should I do?</button>
          <button onClick={this.onRemoveAll}>Remove All</button>
        </ol>

        <form onSubmit={this.onSubmitForm}>
          <input type="text" name="option" />
          <button>Add Button</button>
        </form>
      </div>
    );
  }
}

export default App;
