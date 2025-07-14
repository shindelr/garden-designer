import { Stage, Layer } from "react-konva";
import type Konva from "konva";
import { useRef, useState } from "react";
import DraggableShape from "./DraggableShape";
import ShapeMenu from "./ShapeMenu";

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
  const dragSrcRef = useRef<string>("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const containerRect = stageRef.current.container().getBoundingClientRect();
    /*
    TODO:
    Will want to re-work the X/Y math with dynamic width and height variables.
    Right now just eyeballing the center of the image based on those static
    numbers, however once I implement scale between plants this will need to be
    updated. 
    */
    setPlants(
      plants.concat([
        {
          width: 150,
          height: 150,
          src: dragSrcRef.current,
          id: Date.now().toString(),
          x: e.clientX - containerRect.left - 80,
          y: e.clientY - containerRect.top - 80,
        },
      ])
    );
    dragSrcRef.current = "";
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
