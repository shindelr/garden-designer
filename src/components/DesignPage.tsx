import { Link } from "react-router-dom";

function DesignPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-center">I am Designing Gardens!</h1>
      <Link to="/" className="text-center">
        <span>Home</span>
      </Link>
    </div>
  );
}

export default DesignPage;
