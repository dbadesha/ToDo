var React = require('react');

var Clock = React.createClass({

	getDefaultProps: function() {
		millisecs: 0
	},

	propTypes: {
	  millisecs: React.PropTypes.number
	},

	formatter: function (millisecs) {
		var seconds= millisecs%60;
		var mintues= Math.floor(millisecs / 60);
		if (seconds < 10 && seconds >= 0){
			seconds = '0'+seconds;
		}
		if (mintues < 10 && mintues >= 0){
			mintues = '0'+mintues;
		}
		return mintues+':'+seconds;
	},

	render: function() {
		var {millisecs} = this.props
		return(
			<div className = "clock">
				<span className = "clock-text">
				{this.formatter(millisecs)}
				</span>	
			</div>
		);
	}
});

module.exports = Clock;