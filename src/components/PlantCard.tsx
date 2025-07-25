type Props = {
  commonName: string;
  imageSrc: string;
};

function PlantCard({ commonName, imageSrc }: Props) {
  return (
    <div className="rounded-xl shadow-md p-4  bg-gray-50 border border-gray-300 w-60">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={commonName}
          className="h-32 object-contain mx-auto"
        />
      )}
      <h2 className="text-lg font-semibold text-center">{commonName}</h2>
    </div>
  );
}

export default PlantCard;
