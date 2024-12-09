import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Page not found!</h1>
            <h2>Got to the <Link to="/">Homepage</Link>.</h2>
        </div>
    )
}