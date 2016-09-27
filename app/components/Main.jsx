var React = require('react');
var Nav = require('Nav');

var Main = (props) =>{
  return(
    <div>
      <Nav/>
      {props.children}
      <p>Main Rendered !!</p>
    </div>
    );
}
module.exports = Main;
