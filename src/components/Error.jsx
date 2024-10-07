import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Page not found</h1>
            <p>{error.data}</p>
        </div>
    );
}

export default Error;