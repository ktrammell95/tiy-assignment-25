$(function() {

  var SearchBar = React.createClass({

    render: function() {
      return (
       <input type ="text" 
          value = {this.props.value} 
          onChange ={this.props.onChange} 
          placeholder="Keyword" />
      );
    },

  });

  var SearchBox = React.createClass({

    render: function() {
      return(
        <form className="search-box">
          <SearchBar value ={this.props.keyword} onChange={this.props.onChange}/>
          <input type ="submit" />  //props use state. get initial, onchange call function, reset the state,
          //on submit to form, call search function
        </form>
      );
    }

  });
  var onClick = function(e){
    e.preventDefault();
    console.log("Search:", e.target.value);
    search.setProps({keyword: e.target.value})
  }

  var search = React.render(<SearchBox  onChange={onClick} />, document.body);
});

