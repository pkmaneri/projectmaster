import React, { Component } from "react"
import './App.css';
import Master from './components/Master';

class App extends Component {
  state = {
    inputText: ""
  }
  componentDidMount() {
    let inputText = localStorage.getItem("inputText");
    this.setState({
      inputText
    })
  }
  handleInputType(e) {
    const inputText = e.target.value
    this.setState({
      inputText
    })
  }
  onClickSave() {
    localStorage.setItem("inputText", this.state.inputText)

  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="col">
              <a className="navbar-brand">{this.state.inputText}</a>
            </div>
            <div className="col">
              <input className="form-control me-2" type="search"
                placeholder="Who are you" aria-label="Search"
                onChange={this.handleInputType.bind(this)} value={this.state.inputText} />
              <button className="btn btn-outline-success" type="submit" onClick={this.onClickSave.bind(this)}>Save</button>
            </div>
          </div>
        </nav>
        <br></br>
        <Master />
      </div>
    );
  }

}

export default App;
