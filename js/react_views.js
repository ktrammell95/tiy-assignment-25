$(function() {

  var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
      return (
       React.createElement("input", {type: "text", 
          value: this.props.value, 
          onChange: this.props.onChange, 
          placeholder: "Keyword"})
      );
    },

  });

  var SearchBox = React.createClass({displayName: "SearchBox",

    render: function() {
      return(
        React.createElement("form", {className: "search-box"}, 
          React.createElement(SearchBar, {value: this.props.keyword, onChange: this.props.onChange}), 
          React.createElement("input", {type: "submit"}), "  //props use state. get initial, onchange call function, reset the state," + ' ' +
          "//on submit to form, call search function"
        )
      );
    }

  });
  var onClick = function(e){
    e.preventDefault();
    console.log("Search:", e.target.value);
    search.setProps({keyword: e.target.value})
  }

  var search = React.render(React.createElement(SearchBox, {onChange: onClick}), document.body);
});

