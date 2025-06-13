import { Link } from "react-router-dom";

function LoadPage(){
    return(
            <div className="min-h-screen flex">
              <h1>I am loading a design!</h1>
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
    );
};

export default LoadPage;