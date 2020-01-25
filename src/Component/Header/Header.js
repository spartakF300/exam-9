import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import { NavLink as BrowserLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-warning">
            <Nav pills  className="border">
                <NavItem className="mt-3 mb-3 ml-auto">
                    <NavLink  tag={BrowserLink} to="/" exact >Contact list</NavLink>
                </NavItem>
                <NavItem className="mt-3 mb-3 ">
                    <NavLink  tag={BrowserLink} to="/addContact" exact >Add new contact</NavLink>
                </NavItem>

            </Nav>
        </div>
    );
};

export default Header;