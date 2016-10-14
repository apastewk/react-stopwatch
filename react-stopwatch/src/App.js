import React from 'react';
import Numbers from './Number.js';

var timerId = '';
var App = React.createClass({
    getInitialState : function(){
      return {seconds: 0, minutes: 0, hours: 0};
    },
    startWatch : function(){
      console.log('start');
      timerId = setInterval(this.updateTime, 1000);
    },
    stopWatch : function(){
        console.log('stop');
        clearInterval(timerId);  
    },
    clearWatch : function(){
        console.log('clear');
        this.displayNewTime(0, 0, 0);
        clearInterval(timerId);
    },
    updateTime : function(){
      var newSeconds = this.state.seconds;
      var newMinutes = this.state.minutes;
      var newHours = this.state.hours;
      newSeconds++;
      if(newSeconds >= 60){
        newSeconds = 0;
        newMinutes++;
        if(newMinutes >=60){
          newMinutes = 0;
          newHours++;
        }
      }
      console.log(newSeconds);
      this.displayNewTime(newHours, newMinutes, newSeconds);
    },
    displayNewTime : function(hours, minutes, seconds){
      this.setState({hours : hours, minutes : minutes, seconds : seconds});
      console.log('displaying new time');

    },
  
    render : function(){
      return  <div>
                <div className="stopwatch">
                  <Numbers number={this.state.hours}/>:
                  <Numbers number={this.state.minutes}/>:
                  <Numbers number={this.state.seconds}/>
                </div>
                <div className="buttons">
                  <button id="start" onClick={this.startWatch}>Start</button>
                  <button id="stop" onClick={this.stopWatch}>Stop</button>
                  <button id="clear" onClick={this.clearWatch}>Clear</button>
                </div>
              </div>
    }
});


export default App;
