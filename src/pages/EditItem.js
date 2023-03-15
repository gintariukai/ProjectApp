import {useActionData} from "react-router";
import {useLoaderData, useNavigate, useNavigation} from "react-router-dom";
import UpdateItem from "../components/UpdateItem";

const EditItem = () => {
    const data = useActionData();
    const {item, id} = useLoaderData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const goBack = () => navigate(-1);

    return (
        <div>
            {data?.message && <div></div>}
            <h1>Edit item {id}</h1>
            <UpdateItem {...item} submitting={navigation.state === "submitting"}/>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

const updateItem = async (item) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${item.get('id')}`, {
        method: 'PUT',
        description: item
    })
    return res.json()
}

const updateItemAction = async ({request}) => {
    const formData = await request.formData();
    const updatedItem = await updateItem(formData)

    return {message: `Item ${updatedItem.id} was successfully updated`}

}

export default EditItem;
export {updateItemAction};