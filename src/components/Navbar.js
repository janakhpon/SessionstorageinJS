import React from "react";
import { Link } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../img/favicon.png";
import {
  Navbar,
  SideNav,
  Button,
  SideNavItem,
  NavItem
} from "react-materialize";
import "./Navbar.css";

class NavbarCon extends React.Component {
  render() {
    return (
      <Navbar className="navbar-container">
        <NavItem className="left-align">
          <div>
            <SideNav
              className="sidenav-container"
              trigger={
                <Link to="/">
                  <img src={logo} alt="asdf" className="circle nav-img" />
                  <label className="hide-on-large-only name right nav-profile">
                    Profile
                  </label>
                </Link>
              }
              options={{ closeOnClick: true }}
            >
              <SideNavItem
                userView
                user={{
                  background: "https://placeimg.com/640/480/tech",
                  image: logo,
                  name: "John Doe"
                }}
              />
              <SideNavItem href="#!icon" icon="cloud">
                minchanhtutoo@gmail.com
              </SideNavItem>
              <SideNavItem href="#!icon" icon="cloud">
                Myanmar,mawlamyine
              </SideNavItem>
              <SideNavItem href="#!icon" icon="cloud">
                Software Engineer
              </SideNavItem>
              <SideNavItem divider />
              <SideNavItem waves href="#!third" className="center-align">
                Sat Jun 22, 2019
              </SideNavItem>
              <SideNavItem subheader className="center-align">
                <Button teal>edit profile</Button>
              </SideNavItem>
            </SideNav>
          </div>
        </NavItem>

        <NavItem className="center-align">
          <Link to="/">
            <i class="material-icons left">home</i>
            Home
          </Link>
        </NavItem>

        <NavItem className="center-align">
          <Link to="/session">
            <i class="material-icons left">filter_list</i>
            Session Storage
          </Link>
        </NavItem>

        <NavItem className="center-align">
          <Link to="/local">
            <i class="material-icons left">filter_list</i>
            Local Storage
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/sessionobj">
            <i class="material-icons left">filter_list</i>
            Session OBJ
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/localobj">
            <i class="material-icons left">filter_list</i>
            Local OBJ
          </Link>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavbarCon;
