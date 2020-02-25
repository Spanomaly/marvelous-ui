import React from 'react';
import { connect } from "react-redux";
var closeIcon = require("../../public/close.svg");
import { deleteItem } from "../actions/index";


function mapDispatchToProps(dispatch) {
  return {
    deleteItem: item => dispatch(deleteItem(item)),
  };
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

class ConnectedList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete( id) {
    this.props.deleteItem(id);
  }
  render(){
    const {items, col, searchTerm} = this.props;
    let list = items.filter((li) => li.col == col);
    if(searchTerm) {
      list = list.filter((li) => li.name.includes(searchTerm));
    }

    return (
      <div className="List">
        <div className="ListTitle">
          <h3>COLUMN {col}</h3>
        </div>
        <div className="ULWrap">
          <ul>
            {list.map((item, idx) => (
              <li key={idx}>
                {item.name}
                <button onClick={()=>{this.handleDelete(item.id)}} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
