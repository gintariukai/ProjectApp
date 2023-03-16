import {isRouteErrorResponse, useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        // if (error.status === 401) {
        //     return <div>You aren't authorized to see this</div>;
        // }
        //
        // if (error.status === 503) {
        //     return <div>Looks like our API is down</div>;
        // }
        //
        // if (error.status === 418) {
        //     return <div>🫖</div>;
        // }

        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.data.message || "Something went wrong!"}</h2>
                <h3>{error.data.reason}</h3>
            </div>
        )
    }

    throw error;
}

export default ErrorPage;