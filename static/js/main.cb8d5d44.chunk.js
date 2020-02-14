(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(3),s=n.n(i),c=(n(14),n(15),n(1)),u=n(4),l=n(5),o=n(7),m=n(6),p=n(8),d=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(o.a)(this,Object(m.a)(e).call(this))).startTimer=function(){if(!t.state.isStartAlarm||t.state.inputHourErr||t.state.inputMinuteErr||t.state.inputSecondErr)alert("Please set your timer first.");else if("clear"===t.state.timerState){t.handleInterval(0,0,0)}else if("stop"===t.state.timerState){var e=parseInt(t.state.hour),n=parseInt(t.state.minute),a=parseInt(t.state.second);t.handleInterval(e,n,a)}},t.handleInterval=function(e,n,a){t.interval=setInterval((function(){++a>59&&(a=0,n++),n>59&&(n=0,e++),"".concat(parseInt(t.state.inputHour)>9?t.state.inputHour:"0"+t.state.inputHour,"-").concat(parseInt(t.state.inputMinute)>9?t.state.inputMinute:"0"+t.state.inputMinute,"-").concat(parseInt(t.state.inputSecond)>9?t.state.inputSecond:"0"+t.state.inputSecond)==="".concat(t.state.hour,"-").concat(t.state.minute,"-").concat(t.state.second)?(t.stopTimer(),t.playMusic()):t.setState(Object(c.a)({},t.state,{hour:e>9?e.toString():"0".concat(e),minute:n>9?n.toString():"0".concat(n),second:a>9?a.toString():"0".concat(a),timerState:"working"}))}),5)},t.stopTimer=function(){clearInterval(t.interval),document.getElementById("music").pause(),t.setState(Object(c.a)({},t.state,{timerState:"stop"}))},t.resetTimer=function(){clearInterval(t.interval),document.getElementById("music").pause(),t.setState({hour:"00",minute:"00",second:"00",timerState:"clear",inputHour:0,inputHourErr:!1,inputMinuteErr:!1,inputSecondErr:!1,inputMinute:0,inputSecond:0,isStartAlarm:!1})},t.getTime=function(e,n){switch(e||(e=0),e=parseInt(e),n){case"hour":t.setState(Object(c.a)({},t.state,{inputHour:e,isStartAlarm:!0,inputHourErr:e<0||e>59}));break;case"minute":t.setState(Object(c.a)({},t.state,{inputMinute:e,isStartAlarm:!0,inputMinuteErr:e<0||e>59}));break;case"second":t.setState(Object(c.a)({},t.state,{inputSecond:e,isStartAlarm:!0,inputSecondErr:e<0||e>59}));break;default:console.log("setting time")}},t.playMusic=function(){document.getElementById("music").play()},t.interval=null,t.state={hour:"00",minute:"00",second:"00",timerState:"clear",inputHour:0,inputMinute:0,inputSecond:0,inputHourErr:!1,inputMinuteErr:!1,inputSecondErr:!1,isStartAlarm:!1},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"timer-input mb-3"},r.a.createElement("h3",null,"Wake me up after: "),r.a.createElement("label",{htmlFor:""},"Hours: "),r.a.createElement("input",{type:"text",min:"0",value:this.state.inputHour,placeholder:"Enter Hours",className:"ml-2",onChange:function(e){t.getTime(e.target.value,"hour")}}),this.state.inputHourErr&&r.a.createElement("small",{className:"errMsg"},"Enter integer greater than 0 and less than 60"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Minutes: "),r.a.createElement("input",{type:"text",min:"0",value:this.state.inputMinute,placeholder:"Enter Minutes",className:"ml-2",onChange:function(e){t.getTime(e.target.value,"minute")}}),this.state.inputMinuteErr&&r.a.createElement("small",{className:"errMsg"},"Enter integer greater than 0 and less than 60"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Seconds: "),r.a.createElement("input",{type:"text",min:"0",value:this.state.inputSecond,placeholder:"Enter Seconds",className:"ml-2",onChange:function(e){t.getTime(e.target.value,"second")}}),this.state.inputSecondErr&&r.a.createElement("small",{className:"errMsg"},"Enter integer greater than 0 and less than 60")),r.a.createElement("div",{className:"timer-display"},r.a.createElement("h3",null,"My Timer"),r.a.createElement("div",{className:"timer-text"},r.a.createElement("span",{className:"text-success"},this.state.hour,":"),r.a.createElement("span",{className:"text-success"},this.state.minute,":"),r.a.createElement("span",{className:"text-success"},this.state.second)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn m-2 ".concat(this.state.inputHourErr||this.state.inputMinuteErr||this.state.inputSecondErr?"disabled":"btn-primary"),onClick:function(){return t.startTimer()}},"Start Timer"),r.a.createElement("button",{className:"btn btn-danger m-2",onClick:function(){return t.stopTimer()}},"Stop Timer"),r.a.createElement("button",{className:"btn btn-warning m-2",onClick:function(){return t.resetTimer()}},"Reset Timer"))),r.a.createElement("audio",{controls:!0,id:"music",onClick:function(){t.playMusic()},className:"alarm"},r.a.createElement("source",{src:"analog-watch-alarm_daniel-simion.mp3",type:"audio/mpeg"})))}}]),e}(a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cb8d5d44.chunk.js.map