import {useState} from "react";

const ItemsFilter = ({shopQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(shopQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};

        if (query.length) params.shop = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <label className="checkbox">
                <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)}/> new only
            </label>
            <input type="submit" value="Search"/>
        </form>
    );
}

export default ItemsFilter;