import { Image } from "react-konva";
import useImage from "use-image";

type Props = {
  x: number;
  y: number;
  src: string;
  width?: number;
  height?: number;
};

function DraggableShape({ x, y, src, width = 150, height = 150 }: Props) {
  const [image] = useImage(src);

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      draggable
      onMouseEnter={(e) => {
        document.body.style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        document.body.style.cursor = "default";
      }}
    />
  );
}

export default DraggableShape;
