var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var StopWatchForm = require('StopWatchForm');


describe('StopWatch Form Tests',()=>{
	it('stopwatch form component should exist', ()=>{
		expect(StopWatchForm).toExist();
	});

	it('should call onSetCountDown method', ()=>{
		var spy = expect.createSpy();
		var stopwatchform = TestUtils.renderIntoDocument(<StopWatchForm onSetCountDown={spy}/>);

		var $el = $(ReactDOM.findDOMNode(stopwatchform));
		stopwatchform.refs.seconds.value = '120';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalled('120');
	});

		it('should NOT call onSetCountDown method', ()=>{
		var spy = expect.createSpy();
		var stopwatchform = TestUtils.renderIntoDocument(<StopWatchForm onSetCountDown={spy}/>);

		var $el = $(ReactDOM.findDOMNode(stopwatchform));
		stopwatchform.refs.seconds.value = 'AB';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled(['Alphabets is not valid value']);
	});
});