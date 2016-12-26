var React = require('react');
var ReactDOM = require('react-dom');
var Todo = require('Todo');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css and Scss
require('style!css!sass!AppStyles')


ReactDOM.render(
      <Todo/>,
      document.getElementById('app')
  );
