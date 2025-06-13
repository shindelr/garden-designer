import { Link } from "react-router-dom";

function Home() {
  return (
    // Welcome Message
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center">The Garden Designer</h1>

      {/* Routes */}
      <div className="flex space-x-5">
        <Link to="/load" className="flex">
          <span>Load a design</span>
        </Link>
        <Link to="/design" className="flex">
          <span>New design</span>
        </Link>
        <Link to="/plants" className="flex">
          <span>Explore plants</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
