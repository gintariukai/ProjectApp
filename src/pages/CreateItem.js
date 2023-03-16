import useAuth from "../hook/useAuth";
import {redirect, useNavigate, useNavigation} from "react-router-dom";
import NewItem from "../components/NewItem";

const CreateItem = () => {
    const {singOut} = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();

        return (
            <div>
                <h1>Create a item</h1>
                <NewItem submitting={navigation.state === "submitting"}/>
                <button onClick={() => singOut(() => navigate("/", {replace: true}))}>Log Out</button>
            </div>
        );
}

const createItem = async ({title, body, userId}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body, userId})
    })
    const newItem = await res.json()

    return newItem

}

const createItemAction = async ({request}) => {
    const formData = await request.formData();
    const newItem = {
        title: formData.get("title"),
        body: formData.get("body"),
        userId: formData.get("userId")
    }
    const item = await createItem(newItem);

    return redirect('/posts/' + item.id)
}

export default CreateItem;
export {createItemAction};