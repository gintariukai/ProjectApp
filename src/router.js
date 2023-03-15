import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop, {shopLoader} from "./pages/Shop";
import Single, {itemLoader} from "./pages/Single";
import EditItem from "./pages/EditItem";
import Order from "./pages/Order";
import RequireAuth from "./hoc/RequireAuth";
import CreateItem from "./pages/CreateItem";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import NorFound from "./pages/NorFound";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}>
            <Route path="team" element={<p>Our Team</p>}/>
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="items" element={<Shop/>} loader={shopLoader}/>
        <Route path="posts/:id" element={<Single/>} loader={itemLoader}/>
        <Route path="posts/:id/edit" element={<EditItem/>}/>
        <Route path="order" element={<Order/>}/>
        <Route path="items/new" element={
            <RequireAuth>
                <CreateItem/>
            </RequireAuth>
        }/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="login" element={<Login/>}/>

        <Route path="*" element={<NorFound/>}/>
    </Route>
))

export default router;