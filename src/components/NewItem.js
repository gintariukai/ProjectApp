import {Form} from "react-router-dom";

const NewItem = ({submitting}) => {
    return (
        <Form action="/items/new" method='item'>
            <label>
                Title:
                <input type="text" name="title"/>
            </label>
            <label>
                Description:
                <input type="text" name="description"/>
            </label>

            <input type="hidden" name="userId" value="1"/>
            <input type="submit" value="Add item" disabled={submitting}/>
        </Form>
    )
}

export default NewItem;