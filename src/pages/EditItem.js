import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

const EditItem = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <h1>Edit item {id}</h1>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default EditItem;