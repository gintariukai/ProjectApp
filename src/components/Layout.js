import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Link to="/"> Home </Link>
                <Link to="/shop"> Shop </Link>
                <Link to="/about"> About </Link>
                <Link to="/contacts"> Contacts </Link>
            </header>

            <Outlet />

            <footer>2023 @copy</footer>
        </>
    );
}

export default Layout;