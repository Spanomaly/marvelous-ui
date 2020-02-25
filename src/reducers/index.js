const initialState = {
  items: [],
  log: [],
  remoteItems: [],
  searchTerm: ""
};

function rootReducer(state = initialState, action) {
  if(action.type === 'ADD_ITEM') {
    let activity = state.log.slice(0, 9);
    activity.unshift(action.payload.log);
    return Object.assign({}, state, {
      remoteItems: state.remoteItems.concat(action.payload.item),
      log: activity
    });
  }
  if (action.type === 'DATA_LOADED') {
    return Object.assign({}, state, {
      remoteItems: action.payload.items,
      log: state.log.concat(action.payload.log)
    });
  }
  if (action.type === 'DELETE_ITEM') {
    console.log(action.payload);
    return Object.assign({}, state, {
      remoteItems: state.remoteItems.filter(item => item.id !== action.payload.deleted),
      log: state.log.concat(action.payload.log)
    });
  }
  if (action.type === 'SEARCH_FOR') {
    return Object.assign({}, state, {
      searchTerm: action.payload
    });
  }

  return state;
};

export default rootReducer;
