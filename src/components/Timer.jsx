import React, { Component } from 'react'

export default class Timer extends Component {
  constructor() {
    super()
    this.interval = null;
    this.state = {
      hour: '00',
      minute: '00',
      second: '00',
      timerState: 'clear',
      inputHour: 0,
      inputMinute: 0,
      inputSecond: 0,
      inputHourErr: false,
      inputMinuteErr: false,
      inputSecondErr: false,
      isStartAlarm: false
    }
  }

  startTimer = () => {
    if (!this.state.isStartAlarm || (this.state.inputHourErr || this.state.inputMinuteErr || this.state.inputSecondErr)) {
      alert('Please set your timer first.')
    }
    else {
      if (this.state.timerState === 'clear') {
        let h = 0;
        let m = 0;
        let s = 0;
        this.handleInterval(h, m, s);
      }
      else if (this.state.timerState === 'stop') {
        let h = parseInt(this.state.hour);
        let m = parseInt(this.state.minute);
        let s = parseInt(this.state.second);
        this.handleInterval(h, m, s);
      }
    }
  }

  handleInterval = (h, m, s) => {
    this.interval = setInterval(() => {
      s++;
      if (s > 59) {
        s = 0;
        m++;
      }
      if (m > 59) {
        m = 0;
        h++;
      }
      let setTime = `${parseInt(this.state.inputHour) > 9 ? this.state.inputHour : '0' + this.state.inputHour}-${parseInt(this.state.inputMinute) > 9 ? this.state.inputMinute : '0' + this.state.inputMinute}-${parseInt(this.state.inputSecond) > 9 ? this.state.inputSecond : '0' + this.state.inputSecond}`;
      let currentTime = `${this.state.hour}-${this.state.minute}-${this.state.second}`;
      if (setTime === currentTime) {
        this.stopTimer();
        this.playMusic();
      }
      else {
        this.setState({
          ...this.state,
          hour: h > 9 ? h.toString() : `0${h}`,
          minute: m > 9 ? m.toString() : `0${m}`,
          second: s > 9 ? s.toString() : `0${s}`,
          timerState: "working"
        })
      }
    }, 5);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    document.getElementById('music').pause();
    this.setState({ ...this.state, timerState: 'stop' })
  }

  resetTimer = () => {
    clearInterval(this.interval);
    document.getElementById('music').pause();
    this.setState({
      hour: '00',
      minute: '00',
      second: '00',
      timerState: 'clear',
      inputHour: 0,
      inputHourErr: false,
      inputMinuteErr: false,
      inputSecondErr: false,
      inputMinute: 0,
      inputSecond: 0,
      isStartAlarm: false,

    })
  }

  getTime = (e, type) => {
    if (!e) {
      e = 0;
    }
    e = parseInt(e);
    switch (type) {
      case 'hour':
        this.setState({ ...this.state, inputHour: e, isStartAlarm: true, inputHourErr: (e < 0 || e > 59) });
        break;
      case 'minute':
        this.setState({ ...this.state, inputMinute: e, isStartAlarm: true, inputMinuteErr: (e < 0 || e > 59) });
        break;
      case 'second':
        this.setState({ ...this.state, inputSecond: e, isStartAlarm: true, inputSecondErr: (e < 0 || e > 59) });
        break;
      default:
        console.log('setting time')
    }
  }

  playMusic = () => {
    document.getElementById('music').play();
  }

  render() {
    return (
      <div className='container mt-5'>
        <h3>Wake me up after: </h3>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Hour:</span>
          </div>
          <input type="text" className="form-control" placeholder="Enter Hours" aria-label="Hours" aria-describedby="basic-addon1"
            value={this.state.inputHour} onChange={(e) => { this.getTime(e.target.value, 'hour') }} />
          {this.state.inputHourErr && <small className='errMsg'>Enter integer greater than 0 and less than 60</small>}
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Mins:</span>
          </div>
          <input type="text" value={this.state.inputMinute} className="form-control" placeholder="Enter Minute" aria-label="Hours" aria-describedby="basic-addon1"
            onChange={(e) => { this.getTime(e.target.value, 'minute') }} />
          {this.state.inputMinuteErr && <small className='errMsg'>Enter integer greater than 0 and less than 60</small>}
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secs:</span>
          </div>
          <input type="text" className="form-control" placeholder="Enter Seconds" aria-label="Hours" aria-describedby="basic-addon1"
            value={this.state.inputSecond} onChange={(e) => { this.getTime(e.target.value, 'second') }} />
          {this.state.inputSecondErr && <small className='errMsg'>Enter integer greater than 0 and less than 60</small>}
        </div>


        <div className='timer-display'>
          <h3>My Timer</h3>
          <div className='timer-text'>
            <span className='text-success'>{this.state.hour}:</span>
            <span className='text-success'>{this.state.minute}:</span>
            <span className='text-success'>{this.state.second}</span>
          </div>
          <div>
            <button className={`btn m-2 ${!this.state.inputHourErr && !this.state.inputMinuteErr && !this.state.inputSecondErr ? 'btn-primary' : 'disabled'}`}
              onClick={() => this.startTimer()}>
              Start Timer
            </button>
            <button className='btn btn-danger m-2' onClick={() => this.stopTimer()}>Stop Timer</button>
            <button className='btn btn-warning m-2' onClick={() => this.resetTimer()}>Reset Timer</button>
          </div>
        </div>
        <audio controls id="music" onClick={() => { this.playMusic() }} className='alarm'>
          <source src="analog-watch-alarm_daniel-simion.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}
