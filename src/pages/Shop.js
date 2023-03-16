import {Await, Link, useLoaderData, useSearchParams, json} from "react-router-dom";
import ItemsFilter from "../components/ItemsFilter";
import {Suspense} from "react";

const Shop = () => {
    const {items} = useLoaderData();

    const [searchParams, setSearchParams] = useSearchParams();

    const itemQuery = searchParams.get("item") || "";
    const latest = searchParams.has("latest");

    const startsForm = latest ? 80 : 1;

    return (
        <div>
            <h1>Our product</h1>

            <ItemsFilter itemQuery={itemQuery} latest={latest} setSearchParams={setSearchParams}/>

            <Link to="/items/new" className="create" >Add new product</Link>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={items}>
                    {
                        (resolvedItems) => (<>
                            {
                                resolvedItems.filter(
                                    item => item.title.includes(itemQuery) && item.id >= startsForm
                                ).map(item => (
                                    <Link key={item.id} to={`/posts/${item.id}`} >
                                        <li>{item.title}</li>
                                    </Link>
                                ))
                            }
                        </>)
                    }
                </Await>
            </Suspense>
        </div>
    );
}

async function getItems() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    // if (!res.ok) {
    //     throw new Response("", {status: res.status, statusText: "Not Found...!!!"})
    // }

    return res.json()
}

const shopLoader = async () => {
    const items = getItems()

    // if (!items.length) {
    //     throw json({message: "This page doesn't exist!", reason: "Not found, wrong url.."}, {status: 404})
    // }

    return ({
        items
    })
}

export default Shop;
export {shopLoader};