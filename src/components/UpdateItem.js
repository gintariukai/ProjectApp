import {Form} from "react-router-dom";

const UpdateItem = ({id, title, description, userId, submitting}) => {
    return (
        <Form method='item' action={`/posts/${id}/edit`}>
            <label>
                Title:
                <input type="text" name="title" defaultValue={title} />
            </label>
            <label>
                Description:
                <input type="text" name="description" defaultValue={description} />
            </label>

            <input type="hidden" name="userId" value={userId}/>
            <input type="hidden" name="id" value={id}/>
            <input type="submit" value="Update item" disabled={submitting}/>
        </Form>
    )
}

export default UpdateItem;