type Props = {
  imageSrc: string;
  dragSrcRef: React.RefObject<string>;
};

function ShapeMenuImage({ imageSrc, dragSrcRef }: Props) {
  return (
    <img
      src={imageSrc}
      width={50}
      height={50}
      draggable
      onDragStart={(e) => {
        dragSrcRef.current = imageSrc;
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
