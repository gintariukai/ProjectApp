import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hook/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {singIn} = useAuth();

    const fromPage = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        singIn(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
