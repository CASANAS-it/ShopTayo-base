// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  product: {}
};

// Reducer
export default function ProductEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.UPDATE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.FINDBY_PRODUCTTRANSACTION_TRANSACTION_SUCCESS:
      return { ...state, listTransaction: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}