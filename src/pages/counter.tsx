import React from "react";

interface IProps {
  color: string;
}

interface IState {
  value: number;
  color: string;
}

type TextAlign = "left" | "center" | "right" | "justify";

type UserSelect = "auto" | "text" | "none" | "contain" | "all";

class Counter extends React.Component<IProps, IState> {
  static defaultProps = {
    color: "red",
  };

  state: IState = {
    value: 0,
    color: this.props.color,
  };

  onClick = () => {
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  onContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    this.setState(({ value }) => ({ value: value - 1 }));
  };

  render() {
    const { value, color } = this.state;
    return (
      <div
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
        style={{ ...style, backgroundColor: color }}
      >
        {value}
      </div>
    );
  }
}

const style = {
  width: "100px",
  height: "100px",
  borderRadius: "100px",
  display: "inline-block",
  lineHeight: "100px",
  textAlign: "center" as TextAlign,
  userSelect: "none" as UserSelect,
  cursor: "pointer",
  fontSize: "3rem",
  margin: "1rem",
};

export default Counter;
