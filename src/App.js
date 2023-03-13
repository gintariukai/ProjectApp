import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NorFound from "./pages/NorFound";
import Shop, {shopLoader} from "./pages/Shop";
import Single, {postLoader} from "./pages/Single";
import Login from "./pages/Login";
import Order from "./pages/Order";
import CreateItem from "./pages/CreateItem";
import EditItem from "./pages/EditItem";

import Layout from "./components/Layout";

import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}>
            <Route path="team" element={<p>Our Team</p>}/>
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="posts" element={<Shop/>} loader={shopLoader}/>
        <Route path="posts/:id" element={<Single/>} loader={postLoader}/>
        <Route path="posts/:id/edit" element={<EditItem/>}/>
        <Route path="shoppingcart" element={<Order/>}/>
        <Route path="posts/new" element={
            <RequireAuth>
                <CreateItem/>
            </RequireAuth>
        }/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="login" element={<Login/>}/>

        <Route path="*" element={<NorFound/>}/>
    </Route>
))

function App() {
    return (
        <AuthProvider>
                <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
