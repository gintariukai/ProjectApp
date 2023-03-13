import useAuth from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

const CreateItem = () => {
    const {singOut} = useAuth();
    const navigate = useNavigate();

        return (
            <div>
                <h1>Create a item</h1>
                <button onClick={() => singOut(() => navigate("/", {replace: true}))}>Log Out</button>
            </div>
        );
}

export default CreateItem;