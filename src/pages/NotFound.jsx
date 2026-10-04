import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p className="text-muted">
        The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="btn btn-dark mt-3">
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;