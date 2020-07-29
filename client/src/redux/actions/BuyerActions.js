import actionsFunction from "./generated/BuyerActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BuyerApi from "../../api/BuyerApi";
 
 actionsFunction.loadBuyerList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BuyerApi
     .getBuyerList()
     .then(list => {
       dispatch(actionsFunction.loadBuyerSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
