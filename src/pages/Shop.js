import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const Shop = () => {
    const [posts, setPosts] = useState([]);
    console.log(useLocation());

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            <h1>Our product</h1>
            <Link to="/create">Add new product</Link>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`} >
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export default Shop;