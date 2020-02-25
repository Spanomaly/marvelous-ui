import React from 'react';
import { connect } from "react-redux";
import { searchFor } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    searchFor: term => dispatch(searchFor(term)),
  };
}

class ConnectedSearch extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.searchFor(event.target.value);
  }
  render(){
    return (
      <label className="SearchLabel">
        <p>SEARCH AN ITEM</p>
        <input
          className="Search"
          onChange={this.handleChange}
          placeholder="SEARCH"
        />
      </label>
    );
  }
}

const Search = connect(
  null,
  mapDispatchToProps
)(ConnectedSearch);

export default Search;
