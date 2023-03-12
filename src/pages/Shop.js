import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Shop = () => {
    const [shop, setShop] = useState([]);
    // console.log(useLocation());

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setShop(data))
    }, []);
    return (
        <div>
            <h1>Our product</h1>
            <Link to="/shop/create">Add new product</Link>
            {
                shop.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`} >
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
}

export default Shop;