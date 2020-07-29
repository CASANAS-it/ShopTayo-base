// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function BuyerListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BUYER_SUCCESS:
      return { ...state, buyer: action.payload };
    case types.LIST_BUYER_SUCCESS:
      return { ...state, listBuyer: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}