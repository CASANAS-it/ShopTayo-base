import BuyerApiGenerated from "./generated/BuyerApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BuyerApi extends BuyerApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Buyer List
  static getBuyerList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/buyers")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BuyerApi;