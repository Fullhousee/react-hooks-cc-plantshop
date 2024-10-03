import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plant) => setPlants(plant));
  }, []);

  //Plant form spread hanlder
  function onAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  //Create var used to render plants based on search and JSON
  const plantsToDisplay = plants
    .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onSearchChange={setSearch} search={search}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
