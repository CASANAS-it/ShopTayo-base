// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import TransactionActions from "../redux/actions/TransactionActions";
import BuyerActions from "../redux/actions/BuyerActions";
import ProductActions from "../redux/actions/ProductActions";

// END IMPORT ACTIONS

/** APIs

* actionsTransaction.create
*	@description CRUD ACTION create
*
* actionsTransaction.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTransaction.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsBuyer.findBy_buyerTransaction
*	@description CRUD ACTION findBy_buyerTransaction
*	@param Objectid key - Id of model to search for
*
* actionsProduct.list
*	@description CRUD ACTION list
*

**/

class TransactionEdit extends Component {
  // Init transaction
  constructor(props) {
    super(props);
    this.state = {
      transaction: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTransaction.loadTransaction(this.props.match.params.id);
      this.props.actionsBuyer.findBy_buyerTransaction(this.props.match.params.id);
    }
    
    this.props.actionsProduct.loadProductList();
  }

  // Insert props transaction in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      transaction: props.transaction
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.transaction._id) {
      this.props.actionsTransaction.saveTransaction(this.state.transaction).then(data => {
        this.props.history.push("/transactions/");
      });
    } else {
      this.props.actionsTransaction.createTransaction(this.state.transaction).then(data => {
        this.props.history.push("/transactions/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Transaction Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="amount"
            label="Amount"
            value={this.state.transaction.amount || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="product_code"
            label="Product_code"
            value={this.state.transaction.product_code || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.transaction.product_code && this.state.transaction.product_code === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="quantity"
            label="Quantity"
            value={this.state.transaction.quantity || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.transaction.quantity && this.state.transaction.quantity === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="refnum"
            label="Refnum"
            value={this.state.transaction.refnum || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status"
            label="Status"
            value={this.state.transaction.status || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="trans_date"
            label="Trans_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.transaction.trans_date
                ? new Date(this.state.transaction.trans_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "transaction", "trans_date")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.transaction.trans_date && this.state.transaction.trans_date === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="trans_type"
            label="Trans_type"
            value={this.state.transaction.trans_type || ""}
            onChange={Utils.handleChange.bind(this, "transaction")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _productTransaction with Product */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_productTransaction">
              _productTransaction
            </InputLabel>
            <Select
              value={this.state.transaction._productTransaction || ""}
              onChange={Utils.handleChangeSelect.bind(this, "transaction")}
              inputProps={{
                id: "_productTransaction",
                name: "_productTransaction"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listProduct && this.props.listProduct.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Buyer */}
          
          <h3>Buyer</h3>
          {(!this.props.listBuyer || this.props.listBuyer.length === 0) && 
            <div>No Buyer associated</div>
          }
          {this.props.listBuyer &&
            this.props.listBuyer.map((item, i) => {
              return (
                <Link to={"/buyers/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/transactions/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsTransaction: bindActionCreators(TransactionActions, dispatch),
    actionsBuyer: bindActionCreators(BuyerActions, dispatch),
    actionsProduct: bindActionCreators(ProductActions, dispatch),
  };
};

// Validate types
TransactionEdit.propTypes = { 
  actionsTransaction: PropTypes.object.isRequired,
  actionsBuyer: PropTypes.object.isRequired,
  actionsProduct: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    transaction: state.TransactionEditReducer.transaction,
    listProduct: state.TransactionEditReducer.listProduct,
    listBuyer: state.TransactionEditReducer.listBuyer
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionEdit);
