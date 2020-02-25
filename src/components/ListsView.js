import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import List from './List';

function mapStateToProps(state) {
  return {
    items: state.remoteItems
  };
}

export const ListsView = (props) => {
  const {items} = props;

  return (
    <div className="Lists">
      <div className="InnerLists clearfix">
        <div className="ListWrap" id="Col1Wrap">
          <List
            col="1"
            items={items}
          />
        </div>
        <div className="ListWrap" id="Col2Wrap">
          <List
            col="2"
            items={items}
          />
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  { fetchItems }
)(ListsView);
