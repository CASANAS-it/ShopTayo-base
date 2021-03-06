/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE TransactionModelGenerated.js PLEASE EDIT ../TransactionModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_ShopTayo_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Transaction
      */
    const transactionSchema = new mongoose.Schema({
      amount: {
        type: "Number"
      },
      product_code: {
        type: "String", 
        required: true
      },
      quantity: {
        type: "Number", 
        required: true
      },
      refnum: {
        type: "String"
      },
      status: {
        type: "String"
      },
      trans_date: {
        type: "Date", 
        required: true
      },
      trans_type: {
        type: "String"
      },
      // RELATIONS
      _productTransaction: {
        type: Schema.ObjectId,
        ref: "Product"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      _buyerTransaction: {
        type: Schema.ObjectId,
        ref: "Buyer"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Transaction", transactionSchema));

    return transactionSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * TransactionModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TransactionModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * TransactionModel.findBy_productTransaction
  *   @description CRUD ACTION findBy_productTransaction
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_productTransaction(key) {
    return await generatedModel.model.find({ '_productTransaction' : key});
  },
  
  /**
  * TransactionModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * TransactionModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * TransactionModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
