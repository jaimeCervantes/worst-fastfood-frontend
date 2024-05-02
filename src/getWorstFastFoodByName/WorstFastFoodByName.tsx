import VisualizationInsights from "./VisualizationInsights";
import Filter from "./Filter";
import ErrorBoundary from "./ErrorBoundary";
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
      <ErrorBoundary
        fallback={
          <h3>
            Not Authorized or invalid token, you need to login in one second.
          </h3>
        }
      >
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
      </ErrorBoundary>
    </section>
  );
}
