import React, {Component} from 'react';
import DisplayResult from './Components/displayResult';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      height: '',
      methodName: 'metric'
    }
    this.changeToMetric = this.changeToMetric.bind(this);
    this.changeToImperial = this.changeToImperial.bind(this);

  }

  changeToMetric() {
    this.setState({ methodName: 'metric' });
  }

  changeToImperial() {
    this.setState({ methodName: 'imperial' });
  }
  
  render() {
    return (
      <div className="bmi-converter">
        <div className="div">
          <label id="per">Weight {this.state.methodName === 'metric' ? "(kg)" : "(pounds)"}</label>
          <input name="weight" value={this.state.weight} onChange={e => this.setState({ weight: e.target.value })} />
        </div>

        <div className="div">
          <label id="per">Height {this.state.methodName === 'metric' ? "(cm)" : "(inches)"}</label>
          <input name="height" value={this.state.height} onChange={e => this.setState({ height: e.target.value })} />
        </div>
        <button id="metricbutton" onClick={this.changeToMetric}> Metric </button>
        <button id="imperialbutton" onClick={this.changeToImperial}> Imperial</button>
        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    )
  }
}

export default App
