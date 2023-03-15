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
                <NewItem submitting={navigation.state === 'submitting'}/>
                <button onClick={() => singOut(() => navigate("/", {replace: true}))}>Log Out</button>
            </div>
        );
}

const createItem = async ({title, description, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'ITEM',
        description: JSON.stringify({title, description, userId})
    })
    const newItem = await res.json()

    return newItem

}

const createItemAction = async (request) => {
    const formData = await request.formData();
    const newItem = {
        title: formData.get("title"),
        description: formData.get("description"),
        userId: formData.get("userId"),
    }
    const item = await createItem(newItem);

    return redirect('/posts/' + item.id)
}

export default CreateItem;
export {createItemAction};