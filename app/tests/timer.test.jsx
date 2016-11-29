var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');
var timer = TestUtils.renderIntoDocument(<Timer/>)

describe('Timer watch test', () =>{
	it('component should exits', () =>{
		expect(Timer).toExist();
	});

	describe('change status and count up', () =>{
		it('should set state and start counting up', (done)=>{
			timer.handleStatusChange("started");

			expect(timer.state.timerStatus).toBe("started");
			setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				done();
			}, 1001)
		});

		it('should change status to stopped', (done)=>{
			timer.handleStatusChange("stopped");

			expect(timer.state.timerStatus).toBe("stopped");
			setTimeout(()=>{
				expect(timer.state.count).toBe(0);
				done();
			}, 1001)
		});

		it('should pause and keep the count', ()=>{
			timer.handleStatusChange("paused");
			expect(timer.state.timerStatus).toBe("paused");
		});

	});
});