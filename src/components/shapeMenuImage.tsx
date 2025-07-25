import { useState } from "react";

type Props = {
  imageSrc: string;
  name: string;
  dragSrcRef: React.RefObject<{ current: string; commonName: string; } | null>
};

function ShapeMenuImage({ imageSrc, name, dragSrcRef }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      draggable
      onDragStart={() => {
        dragSrcRef.current = {
          current: imageSrc,
          commonName: name,
        };
      }}
    >
      <img
        src={imageSrc}
        alt={name}
        width={50}
        height={50}
        className={`transition-transform duration-300 ease-in-out ${
          hovered ? "scale-140" : "scale-100"
        }`}
        style={{ display: "block" }}
      />
      {hovered && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white text-gray-700 text-xs rounded px-1 shadow"
          style={{ whiteSpace: "nowrap" }}
        >
          {name}
        </div>
      )}
    </div>

  );
}

export default ShapeMenuImage;
