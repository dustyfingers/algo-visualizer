import React from 'react';
// this line needs to be here for the css prop on navbar below to work
import { jsx } from "@emotion/core";
import { Navbar, Toolbar } from 'sancho';

const Menu = () => {
    return (
        <Navbar css={{ color: "green"}}>
            <Toolbar>HELLO WORLD</Toolbar>
        </Navbar>
    );
}

export default Menu;