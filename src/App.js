import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NorFound from "./pages/NorFound";
import Shop from "./pages/Shop";


function App() {
    return (
        <>
            <header>
                <Link to="/"> Home </Link>
                <Link to="/shop"> Shop </Link>
                <Link to="/about"> About </Link>
                <Link to="/contacts"> Contacts </Link>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<NorFound/>}/>
            </Routes>
        </>
    );
}

export default App;
