import React from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


const Single = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [shop, setShop] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setShop(data))
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {shop && (
                <>
                    <h1>{shop.title}</h1>
                    <p>{shop.body}</p>
                    <Link to={`/posts/${id}`}>Edit the shop</Link>
                </>
            )}
        </div>
    );
}

export default Single;