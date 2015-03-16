$(function() {

  var SearchBar = React.createClass({

    render: function() {
      return (
       <input type ="text" value = {this.props.value} onChange ={this.props.onChange} placeholder="Keyword" />
      );
    },

  });

  var SearchBox = React.createClass({

    getInitialState: function() {
      return {keywordValue: ""};
    },

    onSubmit: function(e) {
      e.preventDefault();
      this.props.onKeywordValue(this.state.keywordValue)
    },

    onChange: function(e) {
      this.setState({keywordValue: e.target.value});
    },

    render: function() {
      return(
        <form className="search-box" onSubmit={this.onSubmit}>
          <SearchBar value ={this.state.keywordValue} onChange={this.onChange}/>
          <input type ="submit" />  
        </form>
      );
    }

  });

  var setKey = function(keywordValue){
    console.log("Search:", keywordValue);
  }

  React.render(<SearchBox onKeywordValue={setKey}/>, document.body);
});
// instead of props use state, 
// get initialState, 
// onchange call function
// reset the state,
// on submit to form, call search function
