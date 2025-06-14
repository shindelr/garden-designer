import { Link } from "react-router-dom";

function HomePage() {

  const cardBaseStyle = "flex p-10 m-10 items-center justify-center border-2 border-[#D4E6F1] hover:border-[#ABEBC6] rounded-xl bg-[#E7F0F6]"
  const transitionStyle = "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#D1FFB7]"
  const shadowStyle = "hover:shadow-[0_0_20px_4px_#D1FFB7]"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center">The Garden Designer</h1>

      <div className="flex h-96 flex-row justify-around">
        <div className={`${cardBaseStyle} ${transitionStyle} ${shadowStyle}`}>
          <Link to="/load" className="text-center">
            Load a design
          </Link>
        </div>

        <div className={`${cardBaseStyle} ${transitionStyle} ${shadowStyle}`}>
          <Link to="/design" className="text-center">
            New design
          </Link>
        </div>

        <div className={`${cardBaseStyle} ${transitionStyle} ${shadowStyle}`}>
          <Link to="/plants" className="text-center">
            Explore plants
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
