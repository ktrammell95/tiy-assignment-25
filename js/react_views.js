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
          React.createElement(SearchBar, {value: this.props.keyword}), 
          React.createElement("input", {type: "submit", onChange: this.props.onChange})
        )
      );
    }

  });
  var onClick = function(e){
    // console.log("keyword:" keyword);
    search.setProps({keyword: e.target.value})
  }

  var search = React.render(React.createElement(SearchBox, {keyword: "keyword", onChange: onClick}), document.body);
});

