import {useState, useEffect} from "react";
import {Link, useSearchParams} from "react-router-dom";
import ItemsFilter from "../components/ItemsFilter";

const Shop = () => {
    const [shop, setShop] = useState([]);
    // console.log(useLocation());

    const [searchParams, setSearchParams] = useSearchParams();

    const shopQuery = searchParams.get("shop") || "";
    const latest = searchParams.has("latest");

    const startsForm = latest ? 80 : 1;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setShop(data))
    }, []);

    return (
        <div>
            <h1>Our product</h1>

            <ItemsFilter shopQuery={shopQuery} latest={latest} setSearchParams={setSearchParams}/>

            <Link to="/shop/create">Add new product</Link>
            {
                shop.filter(
                    post => post.title.includes(shopQuery) && post.id >= startsForm
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`} >
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
}

export default Shop;