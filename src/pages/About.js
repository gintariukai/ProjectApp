import {Link, Outlet,} from "react-router-dom";

const About = () => {
    return (
            <div>
                <h1>About us</h1>
                <p>This is a demo website about ....</p>
                <ul>
                    <li><Link to="contacts">Our Contacts</Link></li>
                </ul>
                <Outlet/>
            </div>
    )
}

export default About;