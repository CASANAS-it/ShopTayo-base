// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  buyer: {}
};

// Reducer
export default function BuyerEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BUYER_SUCCESS:
      return { ...state, buyer: action.payload };
    case types.UPDATE_BUYER_SUCCESS:
      return { ...state, buyer: action.payload };
    case types.GET_BUYER_SUCCESS:
      return { ...state, buyer: action.payload };
    case types.LIST_TRANSACTION_SUCCESS:
      return { ...state, listTransaction: action.payload };
    case types.VALIDATE_BUYER_SUCCESS:
      return { ...state, validate: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}