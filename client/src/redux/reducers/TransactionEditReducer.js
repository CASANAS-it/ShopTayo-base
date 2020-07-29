// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  transaction: {}
};

// Reducer
export default function TransactionEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TRANSACTION_SUCCESS:
      return { ...state, transaction: action.payload };
    case types.UPDATE_TRANSACTION_SUCCESS:
      return { ...state, transaction: action.payload };
    case types.GET_TRANSACTION_SUCCESS:
      return { ...state, transaction: action.payload };
    case types.FINDBY_BUYERTRANSACTION_BUYER_SUCCESS:
      return { ...state, listBuyer: action.payload };
    case types.LIST_PRODUCT_SUCCESS:
      return { ...state, listProduct: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}