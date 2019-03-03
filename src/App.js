import React, { Component } from "react";
import { MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from "mdbreact";
import { ReactComponent as Logo } from './assets/logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  state={
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar tabs color="white" dark size="sm" expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="dark-grey-text">
              <Logo style={{ height: '2.5rem', width: "2.5rem" }} />
              <span>UPDAPTCSR</span>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav size="sm" left pills color="dark">
                <MDBNavItem>
                  <MDBNavLink
                    size="sm"
                    className="dark-grey-text"
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className="dark-grey-text"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/css"
                  >
                    CSR Partners
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className="dark-grey-text"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/components"
                  >
                    Services
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className="dark-grey-text"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/advanced"
                  >
                    News and Updates
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className="dark-grey-text"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                  >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>   
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                <MDBBtn color="amber" size="sm">Arrange a Demo</MDBBtn>
                 </MDBNavItem> 
                <MDBNavItem>
                <MDBBtn color="primary" size="sm">Login</MDBBtn>
                 </MDBNavItem>             
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="green">
            <p className="footer-copyright mb-0 py-3 text-center">
            © 2019 by UPDAPTCSR PVT LTD
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
