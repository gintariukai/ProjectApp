import {isRouteErrorResponse, useRouteError} from "react-router";

function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                {/*<h1>{error.statusText || "Something goes wrong!"}</h1>*/}
                <h1>{error.data.message || "Something goes wrong!"}</h1>
                <h1>{error.data.reason}</h1>
            </div>
        )
    }

    throw error
}

export default ErrorPage;