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
import azalea from "../assets/plant-images/azalea.png"

type Props = {
  // dragSrcRef: React.RefObject<string>;
  dragSrcRef: React.RefObject<{ current: string; commonName: string; } | null>
};

function ShapeMenu({ dragSrcRef }: Props) {
  return (
    <div className="flex items-center justify-around border-2 border-[#D4E6F1] h-20 bg-gray-50">
      <Link to="/" className="flex text-start flex-col">
        <img src={homeicon} />
      </Link>

      <ShapeMenuImage imageSrc={lavender} name="Garden Lavender" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={ladyofshallot} name="Lady of Shallot Rose" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={blackmondograss} name="Black Mondo Grass" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={rhode} name="Rhodedendron" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={rosemary} name="Rosemary" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={daisy} name="Shasta Daisy" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={coreopsis} name="Coreopsis" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={variegatedhasta} name="Hasta" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={japanesepaintedfern} name="Japanese Painted Fern" dragSrcRef={dragSrcRef} />
      <ShapeMenuImage imageSrc={azalea} name="Azalea" dragSrcRef={dragSrcRef} />

    </div>
  );
}

export default ShapeMenu;
