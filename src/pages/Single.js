import {Await, defer, Link, useAsyncValue, useLoaderData, useNavigate} from "react-router-dom";
import {Suspense} from "react";

const Item = () => {
    const item = useAsyncValue();

    return (
        <>
        <h1>{item.title}</h1>
            <p>{item.body}</p>
        </>
    )
}

const Comments = () => {
    const comments = useAsyncValue();

    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment => (
                <>
                <h3>{comment.email}</h3>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                </>
            ))}
        </div>
    )
}

const Single = () => {
    const {item, id, comments} = useLoaderData()
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h2>Item is loading...</h2>}>
                <Await resolve={item}>
                    <Item/>
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Comments is loading...</h2>}>
                <Await resolve={comments}>
                    <Comments/>
                </Await>
            </Suspense>
            <Link to={`/posts/${id}/edit`}>Edit this Item</Link>
        </div>
    )
}

async function getItemById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return res.json()
}

async function getCommentsByItem(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return res.json()
}

const itemLoader = async ({params}) => {
    const id = params.id;

    return defer({item: await getItemById(id), id, comments: getCommentsByItem(id)})
}

export default Single;
export {itemLoader};