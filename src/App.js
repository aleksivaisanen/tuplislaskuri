import React from 'react';
import './App.css';
import { Progress } from 'reactstrap'
import Countdown from 'react-countdown-now'

const Completionist = () => <a href="https://www.youtube.com/watch?v=xBZLVcZhhFk">Nu ska vi kryssa!</a>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date('September 9, 2019 12:00:00'),
      currentDate: new Date(),
      endDate: new Date('January 28, 2019 20:00:00'),
      width: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.width)
      this.leftToCruise()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  leftToCruise = () => {
    const totalTime = this.state.endDate - this.state.startDate;
    const timeLeft = this.state.endDate - this.state.currentDate;
    console.log("totalTime", totalTime)
    console.log("timeLeft", timeLeft)
    console.log("math floor", 100 - Math.floor(timeLeft / totalTime * 100))
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
          <h1>COUNTDOWN TO TUPLIS VOL 3.</h1>
          <Countdown
            date={this.state.endDate}
          >
            <Completionist />
          </Countdown>
          <Progress animated color="success" value={this.state.width} />
          <br />
          <p>TAAS MENNÄÄN!</p>
        </div>
      </div>
    );
  }
}

export default App;
