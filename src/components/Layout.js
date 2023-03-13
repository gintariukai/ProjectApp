import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

const setActive = ({isActive}) => isActive ? "active-link" : "";

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/" className={setActive}> Home </NavLink>
                <NavLink to="/shop" className={setActive}> Shop </NavLink>
                <NavLink to="/about" className={setActive}> About </NavLink>
                <NavLink to="/contacts" className={setActive}> Contacts </NavLink>
                <NavLink to="/shoppingcart" className={setActive}> < FaShoppingCart/> </NavLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">
               All rights reserved 2023 &copy;
            </footer>
        </>
    );
}

export default Layout;