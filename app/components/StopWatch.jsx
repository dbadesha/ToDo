var React = require('react');
var Clock = require('Clock');

var StopWatch = ()=>{
  return(
    <div>
    	<Clock millisecs = {120}/>
    </div>
  )};

module.exports = StopWatch;
