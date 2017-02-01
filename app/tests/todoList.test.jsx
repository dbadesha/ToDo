
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList', () => {
  it('should exists', () => {
    expect(TodoList).toExist();
  });

  it('should render correct number of todos', () =>{
  	var todos = [
  		{
	  		id: 1,
	  		text: "hello"
  		},{
  			id: 2,
  			text: "world"
  		}
  	]

  	var todoList = TestUtils.renderIntoDocument(<TodoList todos= {todos}/>);
  	var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  	expect(todoComponents.length).toBe(todos.length);
  });
});