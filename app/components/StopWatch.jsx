var React = require('react');
var Clock = require('Clock');
var StopWatchForm = require('StopWatchForm');
var Controls = require('Controls');

var StopWatch = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: "stopped"
		};
	},

	componentDidUpdate: function(prevProps, prevState){
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count:0});
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	},

	startTimer: function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		}, 1000);
	},

	handleCountDown: function(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},

	handleStatusChange: function(newStatus){
		this.setState({countdownStatus:newStatus});
	},

	render: function(){
		var {count, countdownStatus} = this.state;
		var renderControls = ()=>{
			if (countdownStatus !== 'stopped'){
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
			} else {
				return <StopWatchForm onSetCountDown={this.handleCountDown}/>;
			}
		};

		return (
		    <div>
		    	<Clock millisecs={count}/>
		    	{renderControls()}
		    </div>
		);
	}   
});

module.exports = StopWatch;
