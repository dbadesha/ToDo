
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');



describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });

  it('should call the handle method, when valid text passed', () =>{
  	//setup
  	var todoText = "check mail in box";
  	var spy = expect.createSpy();
  	var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
  	var $el = $(ReactDOM.findDOMNode(addTodo));

  	// user actions
  	addTodo.refs.todoText.value=todoText;
  	TestUtils.Simulate.submit($el.find('form')[0]);

  	// asserts
  	expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should NOT call the handle method, when INVALID text passed', () =>{
  	var todoText = "";
  	var spy = expect.createSpy();
  	var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
  	var $el = $(ReactDOM.findDOMNode(addTodo));

  	addTodo.refs.todoText.value=todoText;
  	TestUtils.Simulate.submit($el.find('form')[0]);

  	expect(spy).toNotHaveBeenCalled();
  });


});
