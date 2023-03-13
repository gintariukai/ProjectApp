import {Link, Outlet,} from "react-router-dom";

const About = () => {
    return (
            <div>
                <h1>About us</h1>
                <p>This is a demo my project website about ....</p>
                <ul>
                    <li><Link to="team">My Team</Link></li>
                    <li><Link to="salon">Our Salon</Link></li>
                </ul>

                <Outlet/>
            </div>
    )
}

export default About;