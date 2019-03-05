import React, {Component} from 'react';
import DisplayResult from './Components/displayResult';
import Header from './header.js'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  handleChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }
  
  render() {
    const methodList = ["metric", "imperial"]
    return (
      <div className="mainComponent">
        <div>
          <Header/>
          <label>Weight in {this.state.method === "metric" ? "kg" : "lbs"}</label>
          <input
            name="weight"
            value={this.state.weight}
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <label>Height in {this.state.method === "metric" ? "cm" : "inch"}</label>
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange.bind(this)}/>
           <p>
            <select onChange={this.handleChange.bind(this)} name="method" id="methodSelect" >
              {methodList.map(method => (
                <option  value={method}>{method}</option>
              ))}
            </select>
          </p>
        </div>
        <DisplayResult 
        weight={this.state.weight} 
        height={this.state.height} 
        method={this.state.method}
        />
      </div>
    );
  }
}

export default App