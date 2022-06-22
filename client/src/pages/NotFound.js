import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>Notfound</h1>
      <p className="lead"> Sorry, this page does not exist</p>
      <Link to="/" className="btn btn-primary">
        go back to home
      </Link>
    </div>
  );
};

export default NotFound;
