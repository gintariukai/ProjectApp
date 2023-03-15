import useAuth from "../hook/useAuth";
import {redirect, useNavigate} from "react-router-dom";
import NewItem from "../components/NewItem";

const CreateItem = () => {
    const {singOut} = useAuth();
    const navigate = useNavigate();

        return (
            <div>
                <h1>Create a item</h1>
                <NewItem/>
                <button onClick={() => singOut(() => navigate("/", {replace: true}))}>Log Out</button>
            </div>
        );
}

const createItem = ({id, title, description, price, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'ITEM',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, title, description, price, userId})
    })
    const newItem = await res.json()

    return newItem

}

const createItemAction = async (request) => {
    const formData = await request.formData();
    const newItem = {
        id: formData.get("id"),
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        userId: formData.get("userId"),
    }
    const item = await createItem(newItem);

    return redirect("/posts/" + item.id)
}

export default CreateItem;
export {createItemAction};