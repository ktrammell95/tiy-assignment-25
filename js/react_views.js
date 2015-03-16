$(function() {

  var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
      return (
       React.createElement("input", {type: "text", value: this.props.value, onChange: this.props.onChange, placeholder: "Keyword"})
      );
    },

  });

  var SearchBox = React.createClass({displayName: "SearchBox",

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
        React.createElement("form", {className: "search-box", onSubmit: this.onSubmit}, 
          React.createElement(SearchBar, {value: this.state.keywordValue, onChange: this.onChange}), 
          React.createElement("input", {type: "submit"})
        )
      );
    }

  });

  var setKey = function(keywordValue){
    console.log("Search:", keywordValue);
  }

  React.render(React.createElement(SearchBox, {onKeywordValue: setKey}), document.body);
});
// instead of props use state, 
// get initialState, 
// onchange call function
// reset the state,
// on submit to form, call search function
