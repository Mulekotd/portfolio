import { Spinner } from "react-bootstrap";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
