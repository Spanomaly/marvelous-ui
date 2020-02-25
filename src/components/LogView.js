import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from 'react-moment';

function mapStateToProps(state) {
  return {
    log: state.log
  };
}

const ConnectedLogView = (props) => {
  return (
    <div className="LogView">
      <h3>Recent Activity Log</h3>
      <ul>
        {props.log.map((entry, idx) => (
          <li key={idx}>
            <Moment>{entry.createdAt}</Moment>:  {entry.activity}
          </li>
        ))}
      </ul>
      <Link to="/">Return to Add Items</Link>
    </div>
  );
}

const LogView = connect(
  mapStateToProps
)(ConnectedLogView);

export default LogView;
