import { Stage, Layer } from "react-konva";
import { useRef, useState } from "react";
import DraggableShape from "./DraggableShape";
import lavender from "../../public/plant-images/mature-garden-lavender.png";

const PLANTS: Record<string, string> = {
  lavender,
};

type Plant = {
  type: string;
  x: number;
  y: number;
};

function DesignStage() {
  //   const [position, setPosition] = useState({
  //     x: window.innerWidth / 2,
  //     y: window.innerHeight / 2,
  //   });

  const [plants, setPlants] = useState<Plant[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("plant-type");
    const stage = (e.target as any).getStage();
    const pointer = stage.getPointerPosition();

    if (!pointer || !PLANTS[type]) return;
    setPlants((prev) => [
      ...prev,
      {
        type,
        x: pointer.x,
        y: pointer.y,
      },
    ]);
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            {plants.map((plant, i) => (
                <DraggableShape 
                key={i}
                x={plant.x}
                y={plant.y}
                src={PLANTS[plant.type]}
                />
            ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default DesignStage;
