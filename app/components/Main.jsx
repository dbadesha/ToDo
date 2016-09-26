var React = require('react');
var Nav = require('Nav');

var Main = (props) =>{
  return(
    <div>
      <p>Main Rendered !!</p>
      <Nav/>
      {props.children}
    </div>
    );
}
module.exports = Main;
