import {Await, defer, Link, useLoaderData, useSearchParams} from "react-router-dom";
import ItemsFilter from "../components/ItemsFilter";
import {Suspense} from "react";

const Shop = () => {
    const {posts} = useLoaderData();

    const [searchParams, setSearchParams] = useSearchParams();

    const itemQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsForm = latest ? 80 : 1;

    return (
        <div>
            <h1>Our product</h1>

            <ItemsFilter itemQuery={itemQuery} latest={latest} setSearchParams={setSearchParams}/>

            <Link to="/posts/new" className="create" >Add new product</Link>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (<>
                            {
                                resolvedPosts.filter(
                                    post => post.title.includes(itemQuery) && post.id >= startsForm
                                ).map(post => (
                                    <Link key={post.id} to={`/posts/${post.id}`} >
                                        <li>{post.title}</li>
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

    return res.json()
}

const shopLoader = async () => {

    return defer({
        posts: getItems()
    })
}

export default Shop;
export {shopLoader};