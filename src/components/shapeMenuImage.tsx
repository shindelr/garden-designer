type Props = {
  imageSrc: string;
  name: string;
  dragSrcRef: React.RefObject<{ current: string; commonName: string; } | null>
};

function ShapeMenuImage({ imageSrc, name, dragSrcRef }: Props) {
  return (
    <img
      src={imageSrc}
      width={50}
      height={50}
      draggable
      onDragStart={(e) => {
        dragSrcRef.current = {
          current: imageSrc,
          commonName: name

        } 

      }}
      onMouseEnter={(e) => {
        document.body.style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        document.body.style.cursor = "default";
      }}
    />
  );
}

export default ShapeMenuImage;
