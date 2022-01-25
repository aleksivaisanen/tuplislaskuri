import React from 'react';
import './App.css';
import { Progress } from 'reactstrap'
import Countdown from 'react-countdown-now'

const Completionist = () => <p>TAAS MENNÄÄN!</p>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date('January 1, 2022 12:00:00'),
      currentDate: new Date(),
      endDate: new Date('March 18, 2022 12:00:00'),
      width: 0
    };
  }

  componentDidMount() {
    var styles = [
      'background: linear-gradient(#D33106, #571402)'
      , 'border: 1px solid #3E0E02'
      , 'color: white'
      , 'display: block'
      , 'font-size: 32px'
      , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
      , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
      , 'line-height: 40px'
      , 'text-align: center'
      , 'font-weight: bold'
    ].join(';');

    console.log("%c TITEENIT! ", styles)

    this.interval = setInterval(() => {
      this.leftToCruise()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  leftToCruise = () => {
    const totalTime = this.state.endDate - this.state.startDate;
    const timeLeft = this.state.endDate - this.state.currentDate;
    if (timeLeft <= 0) {
      this.setState({
        width: 100
      })
    } else {
      this.setState({
        width: 100 - Math.floor(timeLeft / totalTime * 100)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="bg-image"></div>
        <div className="countdown-container">
          <h1>COUNTDOWN TO TITEENIT</h1>
          <Countdown
            date={this.state.endDate}
          >
            <Completionist />
          </Countdown>
          <Progress animated color="success" value={this.state.width} />  
        </div>
      </div>
    );
  }
}

export default App;
