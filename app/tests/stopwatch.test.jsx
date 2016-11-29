var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var StopWatch = require('StopWatch');
var stopwatch = TestUtils.renderIntoDocument(<StopWatch/>)

describe('stop watch test', () =>{
	it('component should exits', () =>{
		expect(StopWatch).toExist();
	});

	describe('set handle countdown', () =>{
		it('should set state and countdown', (done)=>{
			stopwatch.handleCountDown(10);

			expect(stopwatch.state.count).toBe(10);
			expect(stopwatch.state.countdownStatus).toBe('started');

			setTimeout(()=>{
				expect(stopwatch.state.count).toBe(9);
				done();
			}, 1001)
		});

		it('should not set to negative', (done)=>{
			stopwatch.handleCountDown(1);
			setTimeout(()=>{
				expect(stopwatch.state.count).toBe(0);
				done();
			}, 3001)
		});

		it('should pause on the status paused', (done)=>{
			stopwatch.handleCountDown(10);
			stopwatch.handleStatusChange('paused');

			setTimeout(()=>{
				expect(stopwatch.state.count).toBe(10);
				expect(stopwatch.state.countdownStatus).toBe('paused');
				done();
			}, 1001)
		});

		it('should reset to zero on the status stopped', (done)=>{
			stopwatch.handleCountDown(10);
			stopwatch.handleStatusChange('stopped');

			setTimeout(()=>{
				expect(stopwatch.state.count).toBe(0);
				expect(stopwatch.state.countdownStatus).toBe('stopped');
				done();
			}, 1001)
		});
	});
});