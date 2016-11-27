var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Clock = require('Clock');
var clock = TestUtils.renderIntoDocument(<Clock/>);

describe('Clock',()=>{
	it('clock component should exist', ()=>{
		expect(Clock).toExist();
	});

	describe('render', ()=>{
		it('verify text of clock', ()=>{
			var clocknew = TestUtils.renderIntoDocument(<Clock millisecs = {62}/>);
			var $el = $(ReactDOM.findDOMNode(clocknew));
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatterTest', ()=>{
	it('should formatt the millisec', ()=>{
		expect(clock.formatter(615)).toBe('10:15');
		});

	it('should format number less < 10', () =>{
		expect(clock.formatter(62)).toBe('01:02');
		});
	});

	it('should format zero', ()=>{
		expect(clock.formatter(0)).toBe('00:00');
	});

	it('should format negative', ()=>{
		expect(clock.formatter(-1)).toBe('-1:-1');
	});
});

