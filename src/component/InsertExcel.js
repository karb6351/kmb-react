import React, { useEffect } from "react";
import { Button,Navbar, Nav,Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

function InsertExcel({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  getLocation,
  croods,
  callApiGetData,
  callApiTestingFuction
}) {

  useEffect(() => {
    callApiGetData();
  }, []);

  return (
   
    <Navbar style={{ backgroundColor: '#D1241B' }} expand="lg">
        <Navbar.Brand className="text-light" >
          <Link to="/" style={{color: '#ffffff'}}>KMBPJ</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="/gettime" style={{ color: '#ffffff',  }}>Get Time</Link></Nav.Link>
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="googlemapapi" style={{ color: '#ffffff',  }}>GoogleMapAPI</Link></Nav.Link>
          </Nav>
          
          <Form inline>
            <input
                className="text-light"
                type="file"
                accept=".xlsx, .xls"
                onChange={event => handleFileInput(event.target.files[0])}
            />
            <Button
              className="m-2"
              onClick={() => storeValueToState()}
              variant="outline-light"
              type="submit"
            >
              Save
            </Button>

            <Button
              className="m-2"
              onClick={() => callApiForPostData(excel)}
              variant="outline-light"
              type="submit"
            >
              Upload
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
   
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
  croods: state.reducer.croods
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input)),
  getLocation: ()=>dispatch(action.getLocation()),
  callApiGetData: () => dispatch(action.callApiGetData()),
  callApiTestingFuction:()=> dispatch(action.callApiTestingFuction())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(InsertExcel);




