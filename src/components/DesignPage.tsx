import { Link } from "react-router-dom";

function DesignPage() {
  return (
    <div className="min-h-screen flex">
      <h1>I am Designing Gardens!</h1>
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
}

export default DesignPage;
