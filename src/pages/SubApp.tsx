import React from "react";

class SubApp extends React.Component {
  state = {
    myquery: "",
    secondquery: "",
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.name");
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <input name="myquery" onChange={this.onChange} />
        <input name="secondquery" onChange={this.onChange} />
        <hr />
        {JSON.stringify(this.state)}
      </React.Fragment>
    );
  }
}

export default SubApp;
