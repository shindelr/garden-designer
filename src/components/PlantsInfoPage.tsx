import HeaderBar from "./Header";
import PlantCard from "./PlantCard";
import plantMetaData from "../assets/plant-metadata.json";

const images = import.meta.glob("../assets/plant-images/*.png", { eager: true, import: "default" });
function PlantsInfoPage() {
  return (
    <>
      <HeaderBar />
      <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {plantMetaData.plants.map((plant, index) => {
          const filename = plant.imageSrc.split("/").pop() || "";
          const imageKey = Object.keys(images).find(key => key.endsWith(filename));
          const imageSrc = imageKey ? images[imageKey] as string : "";
          return (
            <PlantCard key={index} commonName={plant.commonName} imageSrc={imageSrc} />
          );
        })}
      </div>
      </div>
    </>
  );
}

export default PlantsInfoPage;
