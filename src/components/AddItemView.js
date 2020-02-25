import React from 'react';
import ListsView from './ListsView';
import ItemForm from './ItemForm';
import Search from './Search';
import { Link } from "react-router-dom";

const AddItemView = () => {
  return (
    <div>
      <div id="SectionTitle">Add an Item</div>
      <div className="MainApp">
        <div className="FormPane">
          <ItemForm />
          <Search />
        </div>
        <ListsView />
      </div>
      <Link to="/log">View Log</Link>
    </div>
  );
}

export default AddItemView;
