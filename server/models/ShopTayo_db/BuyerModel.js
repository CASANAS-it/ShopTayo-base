import BuyerModelGenerated from "./generated/BuyerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = BuyerModelGenerated.init();
  
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
      return await BuyerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BuyerModelGenerated,
  ...customModel
};
