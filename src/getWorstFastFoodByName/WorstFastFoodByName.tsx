import VisualizationInsights from "./VisualizationInsights";
import Filter from "./Filter";
import { Suspense, useState } from "react";

export default function WorstFastFoodByName() {
  const [foodName, setFoodName] = useState("");

  function onFilter(name: string) {
    setFoodName(name);
  }

  return (
    <section>
      <h2>Filter by food name, press enter</h2>
      <Filter
        onFilter={onFilter}
        name="foodName"
        label="Type a food name and press enter."
      />
      <Suspense
        fallback={
          <h2
            style={{ display: "flex", alignItems: "center", height: "300px" }}
          >
            Loading data for chart...
          </h2>
        }
      >
        <VisualizationInsights foodName={foodName} />
      </Suspense>
    </section>
  );
}
