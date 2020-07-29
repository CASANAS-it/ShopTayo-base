import actionsFunction from "./generated/TransactionActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TransactionApi from "../../api/TransactionApi";
 
 actionsFunction.loadTransactionList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TransactionApi
     .getTransactionList()
     .then(list => {
       dispatch(actionsFunction.loadTransactionSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
