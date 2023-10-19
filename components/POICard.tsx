import React from "react";

interface POIProps {
  name: string;
  description: string;
}

const POICard: React.FC<POIProps> = ({ name, description }) => {
  return (
    <div className="border p-4 rounded mb-2">
      <h3 className="text-xl">{name}</h3>
      <p>{description}</p>
      <button className="mt-2 p-2 bg-green-500 text-white rounded">
        Add to Itinerary
      </button>
    </div>
  );
};

export default POICard;
