import { Link } from "react-router-dom";

function PlantsInfoPage() {
  return (
    <div className="min-h-screen flex">
      <h1>I am metadata about plants!</h1>
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
}

export default PlantsInfoPage;
