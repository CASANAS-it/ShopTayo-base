import TransactionApiGenerated from "./generated/TransactionApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TransactionApi extends TransactionApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Transaction List
  static getTransactionList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/transactions")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TransactionApi;