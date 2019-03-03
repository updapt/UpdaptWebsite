import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MDBEdgeHeader color="green darken-3" />
        <MDBFreeBird>
          <MDBRow>
            <MDBCol
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <MDBCardBody align="center">
                <h2 className="h2-responsive mb-4">
                  <strong>Welcome to UPDAPTCSR</strong>
                </h2>
                <h4>
                  <p>CSR Technology, Advisory, Platforms</p>
                </h4>                
                <p className="pb-4">                 
                </p>
                <MDBRow className="d-flex flex-row justify-content-center row">
                  
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
               Our Services
              </h2>
              <p className="text-center">
              Advisory, Assurance, CSR Tracking Tool, Investor/ Company Advisory, Write ups from Environmental Scientist...
              </p>              
              <hr className="my-5" />
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="css3" brand className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">CSS</h4>
                    <p className="grey-text">
                      Animations, colours, shadows, skins and many more! Get to
                      know all our css styles in one place.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/css"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="cubes" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">COMPONENTS</h4>
                    <p className="grey-text">
                      Ready-to-use components that you can use in your
                      applications. Both basic and extended versions!
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/components"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="code" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADVANCED</h4>
                    <p className="grey-text">
                      Advanced components such as charts, carousels, tooltips
                      and popovers. All in Material Design version.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/advanced"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="bars" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NAVIGATION</h4>
                    <p className="grey-text">
                      Ready-to-use navigation layouts, navbars, breadcrumbs and
                      much more! Learn more about our navigation components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/navigation"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="edit" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">FORMS</h4>
                    <p className="grey-text">
                      Inputs, autocomplete, selecst, date and time pickers.
                      Everything in one place is ready to use!
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/forms"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="table" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">TABLES</h4>
                    <p className="grey-text">
                      Basic and advanced tables. Responsive, datatables, with
                      sorting, searching and export to csv.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/tables"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories" center>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="window-restore" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MODALS</h4>
                    <p className="grey-text">
                      Modals used to display advanced messages to the user.
                      Cookies, logging in, registration and much more.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/modals"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="arrows-alt" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADDONS</h4>
                    <p className="grey-text">
                      Google Maps, Social Buttons, Pre-built Contact Forms and
                      Steppers. Find out more about our extended components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/addons"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
