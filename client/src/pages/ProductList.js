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
import ProductActions from "../redux/actions/ProductActions";

// END IMPORT ACTIONS

/** APIs

* actionsProduct.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsProduct.list
*	@description CRUD ACTION list
*

**/


class ProductList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsProduct.loadProductList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsProduct.deleteProduct(this.state.idDelete).then(data => {
      this.props.actionsProduct.loadProductList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "available_count",
        type: "number",
        label: "Available_count"
      }, 
      {
        id: "creation_date",
        type: "date",
        label: "Creation_date"
      }, 
      {
        id: "product_code",
        type: "string",
        label: "Product_code"
      }, 
      {
        id: "product_name",
        type: "string",
        label: "Product_name"
      }, 
      {
        id: "sold_count",
        type: "number",
        label: "Sold_count"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      }, 
      {
        id: "updated_date",
        type: "date",
        label: "Updated_date"
      },
    ];
    const link = "/products/";

    return (
      <div>
        <h1>Product List</h1>

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
              <TableCell align="right">Available_count</TableCell>
              <TableCell align="right">Creation_date</TableCell>
              <TableCell align="right">Product_code</TableCell>
              <TableCell align="right">Product_name</TableCell>
              <TableCell align="right">Sold_count</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Updated_date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/products/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.available_count }</TableCell>
                <TableCell align="right">{ row.creation_date }</TableCell>
                <TableCell align="right">{ row.product_code }</TableCell>
                <TableCell align="right">{ row.product_name }</TableCell>
                <TableCell align="right">{ row.sold_count }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.updated_date }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/products/new">
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
    actionsProduct: bindActionCreators(ProductActions, dispatch),
  };
};

// Validate types
ProductList.propTypes = { 
  actionsProduct: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ProductListReducer.listProduct
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
