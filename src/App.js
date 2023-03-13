import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NorFound from "./pages/NorFound";
import Shop from "./pages/Shop";
import Single from "./pages/Single";
import Login from "./pages/Login";

import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import Create from "./pages/Create";
import AuthProvider from "./hoc/AuthProvider";
import Order from "./pages/Order";


function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="about" element={<About/>}>
                        <Route path="team" element={<p>Our Team</p>} />
                    </Route>
                    <Route path="posts/:id" element={<Single/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="shoppingcart" element={<Order/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="shop/create" element={
                        <RequireAuth>
                            <Create/>
                        </RequireAuth>
                    }/>
                    <Route path="*" element={<NorFound/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
