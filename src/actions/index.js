var Config = require('Config');
import toastr from 'toastr';

export function fetchItems() {
  return function(dispatch) {
    return fetch(`${Config.serverURL}/list-items`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      })
      .catch((err)=>toastr.warning(err));
  };
}
export function addItem(payload) {
  return function(dispatch) {
    return fetch(`${Config.serverURL}/list-items`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "ADD_ITEM", payload: json });
      })
      .catch(err=>toastr.warning(err));
  };
}
export function deleteItem(id) {
  return function(dispatch) {
    return fetch(`${Config.serverURL}/list-items/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "DELETE_ITEM", payload: json });
    })
    .catch(err=>toastr.warning(err));
  };
}
export function searchFor(term) {
  return function(dispatch) {
    dispatch({ type: "SEARCH_FOR", payload: term });
  };
}
