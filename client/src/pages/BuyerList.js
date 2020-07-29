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
import BuyerActions from "../redux/actions/BuyerActions";

// END IMPORT ACTIONS

/** APIs

* actionsBuyer.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBuyer.list
*	@description CRUD ACTION list
*

**/


class BuyerList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBuyer.loadBuyerList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBuyer.deleteBuyer(this.state.idDelete).then(data => {
      this.props.actionsBuyer.loadBuyerList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "address",
        type: "string",
        label: "Address"
      }, 
      {
        id: "creation_date",
        type: "date",
        label: "Creation_date"
      }, 
      {
        id: "mobilenumber",
        type: "string",
        label: "Mobilenumber"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "surname",
        type: "string",
        label: "Surname"
      }, 
      {
        id: "valid",
        type: "boolean",
        label: "Valid"
      },
    ];
    const link = "/buyers/";

    return (
      <div>
        <h1>Buyer List</h1>

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
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Creation_date</TableCell>
              <TableCell align="right">Mobilenumber</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Valid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/buyers/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.address }</TableCell>
                <TableCell align="right">{ row.creation_date }</TableCell>
                <TableCell align="right">{ row.mobilenumber }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.surname }</TableCell>
                <TableCell align="right">{ row.valid }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/buyers/new">
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
    actionsBuyer: bindActionCreators(BuyerActions, dispatch),
  };
};

// Validate types
BuyerList.propTypes = { 
  actionsBuyer: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.BuyerListReducer.listBuyer
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerList);
