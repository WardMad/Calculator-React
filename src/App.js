import React, { Component } from "react";
import "./App.css";
import data from "./Component/data";
import Properties from "./Component/Properties";
import { plus, multiply, divide, decimal } from "./functions";

class App extends Component {
  state = {
    calc: data,
    initialValue: [0],
    nextValue: [],
    boolean: ""
  };

  handleReset = () => {
    this.setState({
      initialValue: [0],
      nextValue: [],
      boolean: ""
    });
  };

  handleClick = el => {
    let newState = Object.assign([], this.state.initialValue);
    let showItem = newState
      .concat(el.description)
      .join("")
      .replace(/^0+/, "");

    this.setState({ initialValue: decimal(showItem) });
  };

  handleMath = e => {
    const value=this.state.initialValue;
    if (e.target.id === "add") {
      this.state.nextValue.push(value);
      this.setState({ initialValue: "+" });
    } else if (e.target.id === "substract") {
      this.state.nextValue.push(value);
      this.setState({ initialValue: "-" });
    } else if (e.target.id === "multiply") {
      this.state.nextValue.push(value);

      this.setState({ initialValue: "", boolean: true });
    } else if (e.target.id === "divide") {
      this.state.nextValue.push(value);
      this.setState({ initialValue: "", boolean: false });
    } else {
      alert("Something went wrong, please refresh the page");
    }
  };

  handleResult = () => {
    let a = this.state.initialValue;
    let b = this.state.nextValue;

    if (this.state.boolean === true) {
      this.setState({ initialValue: multiply(a, b) });
    } else if (this.state.boolean === false) {
      this.setState({ initialValue: divide(b, a) });
    } else 
    this.setState({ initialValue: plus(a, b) });
  };

  render() {
    const newData = this.state.calc.map(el => (
      <Properties
        key={el.id}
        id={el.id}
        description={el.description}
        handleClick={() => this.handleClick(el)}
      />
    ));

    return (
      <div className="App">
        <div id="container">

<input type="text" className="calc-screen"  value={this.state.initialValue} disabled/>

<button id='clear' type='submit'    onClick={this.handleReset} >AC</button>
<button id='add' type='submit'   onClick ={this.handleMath}  >+</button>
<button id='substract' type='submit'   onClick ={this.handleMath} >-</button>
<button id='multiply' type='submit'   onClick ={this.handleMath}  >*</button>
<button id='divide' type='submit'   onClick ={this.handleMath} >/</button>
{newData}
<button id='equals' type='submit' onClick ={this.handleResult} >=</button>
        </div>
      </div>
    );
  }
}

export default App;
