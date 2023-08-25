import { useRouteError } from "react-router-dom";

/**
 * ErrorPage component
 * @returns 錯誤頁面
 */
const ErrorPage = () => {
    const error = useRouteError();

    console.error(error);

    return (
        <div id="errorPage" className="d-flex flex-column">
            <h1>Oops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;