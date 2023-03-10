import React from "react";
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";


const Single = () => {
    const {id} = useParams();
    const [shop, setShop] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setShop(data))
    }, [id]);

    return (
        <div>
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