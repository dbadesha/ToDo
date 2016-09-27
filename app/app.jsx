var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var StopWatch = require('StopWatch');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css and Scss
require('style!css!sass!AppStyles')


ReactDOM.render(
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Timer}/>
          <Route path='StopWatch' component={StopWatch}/>
        </Route>
      </Router>,
      document.getElementById('app')
  );
