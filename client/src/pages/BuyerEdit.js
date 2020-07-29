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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import BuyerActions from "../redux/actions/BuyerActions";
import TransactionActions from "../redux/actions/TransactionActions";

// END IMPORT ACTIONS

/** APIs

* actionsBuyer.create
*	@description CRUD ACTION create
*
* actionsBuyer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBuyer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsTransaction.list
*	@description CRUD ACTION list
*
* actionsBuyer.validate
*	@description Validates buyer
*	@param Number id - id of the buyer
*	@returns Boolean
*

**/

class BuyerEdit extends Component {
  // Init buyer
  constructor(props) {
    super(props);
    this.state = {
      buyer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBuyer.loadBuyer(this.props.match.params.id);
    }
    
    this.props.actionsTransaction.loadTransactionList();
  }

  // Insert props buyer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      buyer: props.buyer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.buyer._id) {
      this.props.actionsBuyer.saveBuyer(this.state.buyer).then(data => {
        this.props.history.push("/buyers/");
      });
    } else {
      this.props.actionsBuyer.createBuyer(this.state.buyer).then(data => {
        this.props.history.push("/buyers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Buyer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="address"
            label="Address"
            value={this.state.buyer.address || ""}
            onChange={Utils.handleChange.bind(this, "buyer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.buyer.address && this.state.buyer.address === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="creation_date"
            label="Creation_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.buyer.creation_date
                ? new Date(this.state.buyer.creation_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "buyer", "creation_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="mobilenumber"
            label="Mobilenumber"
            value={this.state.buyer.mobilenumber || ""}
            onChange={Utils.handleChange.bind(this, "buyer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.buyer.mobilenumber && this.state.buyer.mobilenumber === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.buyer.name || ""}
            onChange={Utils.handleChange.bind(this, "buyer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.buyer.name && this.state.buyer.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="surname"
            label="Surname"
            value={this.state.buyer.surname || ""}
            onChange={Utils.handleChange.bind(this, "buyer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.buyer.surname && this.state.buyer.surname === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="valid"
                checked={this.state.buyer.valid || false}
                onChange={Utils.handleChangeCheck.bind(this, "buyer", "valid")}
                color="primary"
              />
            }
            label="valid"
            className="mt-20"
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _buyerTransaction with Transaction */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_buyerTransaction">
              _buyerTransaction
            </InputLabel>
            <Select
              value={this.state.buyer._buyerTransaction || ""}
              onChange={Utils.handleChangeSelect.bind(this, "buyer")}
              inputProps={{
                id: "_buyerTransaction",
                name: "_buyerTransaction"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listTransaction && this.props.listTransaction.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/buyers/">Back to list</Link>

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
    actionsBuyer: bindActionCreators(BuyerActions, dispatch),
    actionsTransaction: bindActionCreators(TransactionActions, dispatch),
  };
};

// Validate types
BuyerEdit.propTypes = { 
  actionsBuyer: PropTypes.object.isRequired,
  actionsTransaction: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    buyer: state.BuyerEditReducer.buyer,
    listTransaction: state.BuyerEditReducer.listTransaction
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerEdit);
