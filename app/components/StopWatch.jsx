var React = require('react');
var Clock = require('Clock');
var StopWatchForm = require('StopWatchForm');

var StopWatch = React.createClass({
	getInitialState: function() {
		return {count: 0};
	},

	handleCountDown: function(seconds){
		this.setState({
			count: seconds
		});
	},

	render: function(){
		var {count} = this.state;
		return (
		    <div>
		    	<Clock millisecs={count}/>
		    	<StopWatchForm onSetCountDown={this.handleCountDown}/>
		    </div>
		);
	}   
});

module.exports = StopWatch;
