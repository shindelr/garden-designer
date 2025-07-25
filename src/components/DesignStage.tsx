import { Stage, Layer } from "react-konva";
import type Konva from "konva";
import { useRef, useState } from "react";
import DraggableShape from "./DraggableShape";
import ShapeMenu from "./ShapeMenu";
import plantData from "../assets/plant-metadata.json";

type PlantMetaData = {
  commonName: string;
  scientificName: string;
  matureHeight: number;
  matureSpread: number;
  src: string;
};

type PlantData = {
  plantsData: PlantMetaData[];
};

type Plant = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  src: string;
};

function DesignStage() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const stageRef = useRef<Konva.Stage | any>(null);
  const dragSrcRef = useRef<{ current: string; commonName: string } | null>(
    null
  );
  const ppi = 10;

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const containerRect = stageRef.current.container().getBoundingClientRect();
    const dragData = dragSrcRef.current;
    if (!dragData) return;

    const plantSpecs = plantData.plants.find(
      (plant) => plant.commonName.toLowerCase() == dragData.commonName.toLowerCase()
    );

    console.log(plantSpecs);

    const height = plantSpecs ? plantSpecs.matureHeightInches * ppi : 150;
    const spread = plantSpecs ? plantSpecs.matureWidthInches * ppi : 150;
    console.log(height);
    console.log(spread);

    setPlants(
      plants.concat([
        {
          width: spread,
          height: height,
          src: dragData.current,
          id: Date.now().toString(),
          x: e.clientX - containerRect.left - (spread / 2),
          y: e.clientY - containerRect.top - (height / 2),
        },
      ])
    );
    dragData.current = "";
  };

  return (
    <>
      <ShapeMenu dragSrcRef={dragSrcRef} />
      <div
        onDrop={handleDrop}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={stageRef}
        >
          <Layer>
            {plants.map((plant) => (
              <DraggableShape key={plant.id} {...plant} />
            ))}
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default DesignStage;
