import React from "react";
import "App.css";
import { link } from "fs";
import { ReducerPattern } from "pages/reducerPattern";

interface ICounter1 {
  initialValue: number;
}

interface ICounter1State {
  value: number;
}

interface IFruitsList {
  fruits: string[];
}

class Counter1 extends React.Component<ICounter1, ICounter1State> {
  state = {
    value: this.props.initialValue,
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        counter : {value}
        <button
          onClick={() => {
            this.setState({ value: value + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState((prev) => {
              const { value } = prev;
              return { value: value + 1 };
            });
            this.setState((prev) => {
              const { value } = prev;
              return { value: value + 1 };
            });
            this.setState((prev) => {
              const { value } = prev;
              return { value: value + 1 };
            });
          }}
        >
          +3
        </button>
      </div>
    );
  }
}

class FruitsList extends React.Component<IFruitsList> {
  render() {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {this.props.fruits.map((fruit, idx) => (
            <li key={idx}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function App() {
  const fruitsArr = ["blueBerry", "StrawBerry", "waterMelon"];
  return (
    <div>
      Hello, World!
      <Counter1 initialValue={10} />
      <FruitsList fruits={fruitsArr} />
      <ReducerPattern />
    </div>
  );
}

export default App;
