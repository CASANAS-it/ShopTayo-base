import TransactionModelGenerated from "./generated/TransactionModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TransactionModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TransactionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TransactionModelGenerated,
  ...customModel
};
