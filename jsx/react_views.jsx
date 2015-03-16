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
          <SearchBar value ={this.props.keyword} />
          <input type ="submit" onChange={this.props.onChange}/> 
        </form>
      );
    }

  });
  var onClick = function(e){
    // console.log("keyword:" keyword);
    search.setProps({keyword: e.target.value})
  }

  var search = React.render(<SearchBox keyword="keyword" onChange={onClick} />, document.body);
});

