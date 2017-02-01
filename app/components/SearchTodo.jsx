var React = require('react');

var SearchTodo = React.createClass({

  handleSearch: function(){
  	var showCompleted=this.refs.showCompleted.checked;
  	var searchText=this.refs.searchText.value;

  	this.props.onSearch(showCompleted, searchText);
  },

  render: function () {
    return (
      <div>
       	<div>
       		<input type="search" ref="searchText" onChange={this.handleSearch} placeholder="search your todos here."/>
       	</div>
       	<div>
       		<label>
       			<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
       			show completed todo's
       		</label>
       	</div>
      </div>
    )
  }
});

module.exports = SearchTodo;