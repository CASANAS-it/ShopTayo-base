// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import BuyerModel from "../models/ShopTayo_db/BuyerModel";
import ProductModel from "../models/ShopTayo_db/ProductModel";
import TransactionModel from "../models/ShopTayo_db/TransactionModel";
import UserModel from "../models/ShopTayo_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.ShopTayo_db_dbUrl);

    // Start Init Models

		BuyerModel.init();
		ProductModel.init();
		TransactionModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_ShopTayo_db = await mongoose.connect(
        "mongodb://" + properties.ShopTayo_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_ShopTayo_db;
  }
}

export default new Database();
