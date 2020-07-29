// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function TransactionListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TRANSACTION_SUCCESS:
      return { ...state, transaction: action.payload };
    case types.LIST_TRANSACTION_SUCCESS:
      return { ...state, listTransaction: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}