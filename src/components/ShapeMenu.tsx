import lavender from '../../public/plant-images/mature-garden-lavender.png'


function ShapeMenu() {
    const handleDragStart = (e: React.DragEvent, type: string) => {
        e.dataTransfer.setData("plant-type", type);
    };

  return (
    <div className="flex items-center justify-around border-2 border-[#D4E6F1] h-20">
        <img
        src={lavender}
        draggable
        className="h-15"
        onDragStart={(e) => handleDragStart(e, "lavender")}
        />
    </div>
  );
}

export default ShapeMenu;
