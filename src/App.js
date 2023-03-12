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


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="posts/:id" element={<Single/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="create" element={
                        <RequireAuth>
                            <Create/>
                        </RequireAuth>
                    }/>
                    <Route path="*" element={<NorFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
