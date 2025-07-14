import { Link } from "react-router-dom";
import ShapeMenuImage from "./shapeMenuImage";
import lavender from "../assets/plant-images/mature-garden-lavender.png";
import ladyofshallot from "../assets/plant-images/lady-of-shalott-rose.png";
import homeicon from "../assets/icons/home-icon.svg";
import blackmondograss from "../assets/plant-images/black-mondo-grass.png"
import rhode from "../assets/plant-images/rhodie.png"
import rosemary from "../assets/plant-images/rosemary.png"
import daisy from "../assets/plant-images/daisy.png"
import coreopsis from "../assets/plant-images/coreopsis.png"
import variegatedhasta from "../assets/plant-images/variegated-hasta.png"
import japanesepaintedfern from "../assets/plant-images/japanesepaintedfern.png"

type Props = {
  dragSrcRef: React.RefObject<string>;
};

function ShapeMenu({ dragSrcRef }: Props) {
  return (
    <div className="flex items-center justify-around border-2 border-[#D4E6F1] h-20 bg-gray-50">
      <Link to="/" className="flex text-start flex-col">
        <img src={homeicon} />
      </Link>

      <ShapeMenuImage imageSrc={lavender} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={ladyofshallot} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={blackmondograss} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={rhode} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={rosemary} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={daisy} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={coreopsis} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={variegatedhasta} dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={japanesepaintedfern} dragSrcRef={dragSrcRef} />

    </div>
  );
}

export default ShapeMenu;
