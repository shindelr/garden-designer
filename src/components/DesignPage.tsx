import { Link } from "react-router-dom";
import DesignStage from "./DesignStage";
import ShapeMenu from "./ShapeMenu";

function DesignPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Link to="/" className="text-start">
        <span className=" p-10">Home</span>
      </Link>
      <ShapeMenu/>
      <DesignStage/>


    </div>
  );
}

export default DesignPage;
