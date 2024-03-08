import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {time: 25, isStarted: false, seconds: 0}
  }

  decreaseTime = () => {
    const {isStarted} = this.state
    return (
      isStarted === false &&
      this.setState(prevState => ({time: prevState.time - 1}))
    )
  }

  increaseTime = () => {
    const {isStarted} = this.state
    return (
      isStarted === false &&
      this.setState(prevState => ({time: prevState.time + 1}))
    )
  }

  startTime = () => {
    const {isStarted} = this.state
    this.setState({isStarted: !isStarted})
  }

  onRestTimer = () => {
    this.setState({isStarted: false})
  }

  render() {
    const {time, isStarted} = this.state

    const iconImage = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const iconAltText = isStarted ? 'pause icon' : 'play icon'

    const text = isStarted ? 'Pause' : 'Start'

    const timerStatusText = isStarted ? 'Running' : 'Paused'

    return (
      <div className="main-container">
        <h1>Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="timer-container">
            <p className="time">{`${time}:00`}</p>
            <span className="text">{timerStatusText}</span>
          </div>
          <div className="controls-container">
            <div className="controls">
              <div className="pause-restart-container">
                <img
                  src={iconImage}
                  alt={iconAltText}
                  onClick={this.startTime}
                />
                <p>{text}</p>
              </div>
              <div className="rest-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset"
                  onClick={this.onRestTimer}
                />
                <p>Reset</p>
              </div>
            </div>
            <div className="set-timer-container">
              <p>Set Timer limit</p>
              <div className="adjust-time-container">
                <button
                  type="button"
                  className="minus-button"
                  onClick={this.decreaseTime}
                >
                  -
                </button>
                <button type="button" className="time-button">
                  {time}
                </button>
                <button
                  type="button"
                  className="plus-button"
                  onClick={this.increaseTime}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
