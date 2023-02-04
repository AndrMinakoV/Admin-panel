import React from "react";
import Header from "./components/Header";





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helpText: "Help text",
    }
  }


  helpText = "Help text"
  render() {
    return (
        <div className="name">
              <h1><Header title="Панель управления"/></h1>
          <h1>{this.state.helpText}</h1>
          <input
            placeholder={this.state.helpText}
            onClick={this.inputClick}
            onMouseEnter={this.mouseOver}
          />
          <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
        </div>
      );
  }



  inputClick() {
    this.helpText = "Changed"
    console.log("Clicked");}
  mouseOver() {console.log("Mouse Over")}
}

export default App