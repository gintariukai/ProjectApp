import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop, {shopLoader} from "./pages/Shop";
import Single, {itemLoader} from "./pages/Single";
import EditItem, {updateItemAction} from "./pages/EditItem";
import CreateItem, {createItemAction} from "./pages/CreateItem";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import NorFound from "./pages/NorFound";
import ErrorPage from "./pages/ErrorPage";
import Order from "./pages/Order";

import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}>
            <Route path="team" element={<p>Our Team</p>}/>
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="items" element={<Shop/>} loader={shopLoader} errorElement={<ErrorPage/>}/>
        <Route path="posts/:id" element={<Single/>} loader={itemLoader}/>
        <Route path="posts/:id/edit" element={<EditItem/>} loader={itemLoader} action={updateItemAction}/>
        <Route path="items/new" element={
            <RequireAuth>
                <CreateItem/>
            </RequireAuth>
        } action={createItemAction}/>
        <Route path="order" element={<Order/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NorFound/>}/>
    </Route>
))

export default router;