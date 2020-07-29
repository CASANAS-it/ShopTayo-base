// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import TransactionActions from "../redux/actions/TransactionActions";

// END IMPORT ACTIONS

/** APIs

* actionsTransaction.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTransaction.list
*	@description CRUD ACTION list
*

**/


class TransactionList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTransaction.loadTransactionList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTransaction.deleteTransaction(this.state.idDelete).then(data => {
      this.props.actionsTransaction.loadTransactionList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "amount",
        type: "number",
        label: "Amount"
      }, 
      {
        id: "product_code",
        type: "string",
        label: "Product_code"
      }, 
      {
        id: "quantity",
        type: "number",
        label: "Quantity"
      }, 
      {
        id: "refnum",
        type: "string",
        label: "Refnum"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      }, 
      {
        id: "trans_date",
        type: "date",
        label: "Trans_date"
      }, 
      {
        id: "trans_type",
        type: "string",
        label: "Trans_type"
      },
    ];
    const link = "/transactions/";

    return (
      <div>
        <h1>Transaction List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Product_code</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Refnum</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Trans_date</TableCell>
              <TableCell align="right">Trans_type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/transactions/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.amount }</TableCell>
                <TableCell align="right">{ row.product_code }</TableCell>
                <TableCell align="right">{ row.quantity }</TableCell>
                <TableCell align="right">{ row.refnum }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.trans_date }</TableCell>
                <TableCell align="right">{ row.trans_type }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/transactions/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsTransaction: bindActionCreators(TransactionActions, dispatch),
  };
};

// Validate types
TransactionList.propTypes = { 
  actionsTransaction: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TransactionListReducer.listTransaction
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);
