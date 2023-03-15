import {Link} from "react-router-dom";

const NorFound = () => {
    return (
        <div>
            This page doesn't exist. Go <Link to="/"> Home </Link> ...
        </div>
    );

}

export default NorFound;