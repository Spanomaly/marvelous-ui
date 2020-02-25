import React from 'react';
import Select from 'react-select';
import { connect } from "react-redux";
import { addItem } from "../actions/index";
import { reactSelectStyle } from "../style/react-select";
import toastr from 'toastr';

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
  };
}

const DropdownIndicator = (props) => {
  let dropDownClass = "DropdownIndicator";
  if(props.selectProps.menuIsOpen){
    dropDownClass += " menuIsOpen";
  }
  return (<div className={dropDownClass}></div>);
}

class ConnectedItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      col: "",
      selectLabel: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.colOptions = [
      { value: '1', label: 'COLUMN 1' },
      { value: '2', label: 'COLUMN 2' }
    ];
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSelectChange(event) {
    this.setState({ "col": event.value, "selectLabel": event.label });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, col } = this.state;
    if(name && col){
      this.props.addItem({ name, col });
      this.setState({ name: "", col: null });
    } else {
      toastr.warning("Please enter an item name and column");
    }
  }
  render(){

    const { col, selectLabel, name } = this.state;
    const selectValue = (col) ? {value:col, label:selectLabel} : null;
    return (
      <div className="ItemForm">
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="ENTER ITEM"
            onChange={this.handleChange}
          />
          <Select
            components={{ DropdownIndicator }}
            onChange={this.handleSelectChange}
            options={this.colOptions}
            value={selectValue}
            placeholder="CHOOSE COLUMN"
            isSearchable={false}
            styles={reactSelectStyle}
          />
          <button type="submit">ADD ITEM</button>
        </form>
      </div>
    );
  }
}

const ItemForm = connect(
  null,
  mapDispatchToProps
)(ConnectedItemForm);

export default ItemForm;
