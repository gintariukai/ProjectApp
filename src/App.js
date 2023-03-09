import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NorFound from "./pages/NorFound";
import Shop from "./pages/Shop";
import Single from "./pages/Single";


function App() {
    return (
        <>
            <header>
                <Link to="/"> Home </Link>
                <Link to="/posts"> Shop </Link>
                <Link to="/about"> About </Link>
                <Link to="/contacts"> Contacts </Link>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<Shop/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/posts/:id" element={<Single/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NorFound/>}/>
            </Routes>
        </>
    );
}

export default App;
