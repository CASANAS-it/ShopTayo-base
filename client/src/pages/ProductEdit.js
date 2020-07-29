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

// Custom Actions


// START IMPORT ACTIONS
import ProductActions from "../redux/actions/ProductActions";
import TransactionActions from "../redux/actions/TransactionActions";

// END IMPORT ACTIONS

/** APIs

* actionsProduct.create
*	@description CRUD ACTION create
*
* actionsProduct.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsProduct.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsTransaction.findBy_productTransaction
*	@description CRUD ACTION findBy_productTransaction
*	@param Objectid key - Id of model to search for
*

**/

class ProductEdit extends Component {
  // Init product
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProduct.loadProduct(this.props.match.params.id);
      this.props.actionsTransaction.findBy_productTransaction(this.props.match.params.id);
    }
    
  }

  // Insert props product in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      product: props.product
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.product._id) {
      this.props.actionsProduct.saveProduct(this.state.product).then(data => {
        this.props.history.push("/products/");
      });
    } else {
      this.props.actionsProduct.createProduct(this.state.product).then(data => {
        this.props.history.push("/products/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Product Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="available_count"
            label="Available_count"
            value={this.state.product.available_count || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.available_count && this.state.product.available_count === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="creation_date"
            label="Creation_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.product.creation_date
                ? new Date(this.state.product.creation_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "product", "creation_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="product_code"
            label="Product_code"
            value={this.state.product.product_code || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.product_code && this.state.product.product_code === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="product_name"
            label="Product_name"
            value={this.state.product.product_name || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.product_name && this.state.product.product_name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="sold_count"
            label="Sold_count"
            value={this.state.product.sold_count || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status"
            label="Status"
            value={this.state.product.status || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="updated_date"
            label="Updated_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.product.updated_date
                ? new Date(this.state.product.updated_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "product", "updated_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Transaction */}
          
          <h3>Transaction</h3>
          {(!this.props.listTransaction || this.props.listTransaction.length === 0) && 
            <div>No Transaction associated</div>
          }
          {this.props.listTransaction &&
            this.props.listTransaction.map((item, i) => {
              return (
                <Link to={"/transactions/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/products/">Back to list</Link>

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
    actionsProduct: bindActionCreators(ProductActions, dispatch),
    actionsTransaction: bindActionCreators(TransactionActions, dispatch),
  };
};

// Validate types
ProductEdit.propTypes = { 
  actionsProduct: PropTypes.object.isRequired,
  actionsTransaction: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    product: state.ProductEditReducer.product,
    listTransaction: state.ProductEditReducer.listTransaction
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEdit);
