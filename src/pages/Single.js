import {useParams} from "react-router-dom";

const Single = () => {
    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    );
}

export default Single;