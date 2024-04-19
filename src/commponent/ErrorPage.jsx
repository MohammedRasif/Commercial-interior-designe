import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-6xl text-red-500 font-bold">
            <Link to="/errorPage">
            <h1 >404</h1>
            <h1>This page is not pound</h1>
            </Link>
        </div>
    );
};

export default ErrorPage;