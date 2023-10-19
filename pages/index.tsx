import React from "react";
import MapComponent from "@/components/MapComponent";
import POICard from "@/components/POICard";
import SearchInput from "@/components/SearchInput";

const Home: React.FC = () => {
  const handleStartPointSelect = (place: string) => {
    // Handle start point selection
  };

  const handleEndPointSelect = (place: string) => {
    // Handle end point selection
  };


  return (
    <div className="max-w-4xl mx-auto dark:text-white px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Route Planner */}
      <div>
        <h2 className="text-xl mb-2">Plan Your Route</h2>
        <form className="space-y-4 z-50 relative">
          <div className="z-50">
            <SearchInput 
              placeholder="Start Point"
              onPlaceSelect={handleStartPointSelect}
            />
          </div>
          <div className="z-500">
            <SearchInput 
              placeholder="End Point"
              onPlaceSelect={handleStartPointSelect}
            />
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Find Route
          </button>
        </form>
      </div>
      
      {/* Map Display */}
      <div>
        <h2>Your Route</h2>
        <div className="border  rounded-md">
          {/* Map will go here */}
          <MapComponent />
        </div>
      </div>
      
      {/* POIs */}
      <div>
        <h2>Points of Interest</h2>
        <div>
          <POICard name={"SA meet point"} description={"where people hang out"}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
