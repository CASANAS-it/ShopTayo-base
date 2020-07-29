import { combineReducers } from "redux";

// START IMPORT REDUCERS
import BuyerEditReducer from "./BuyerEditReducer";
import BuyerListReducer from "./BuyerListReducer";
import HomeReducer from "./HomeReducer";
import ProductEditReducer from "./ProductEditReducer";
import ProductListReducer from "./ProductListReducer";
import TransactionEditReducer from "./TransactionEditReducer";
import TransactionListReducer from "./TransactionListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	BuyerEditReducer,
	BuyerListReducer,
	HomeReducer,
	ProductEditReducer,
	ProductListReducer,
	TransactionEditReducer,
	TransactionListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
