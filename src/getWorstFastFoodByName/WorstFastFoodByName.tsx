import Chart from "./Chart";
import Filter from "./Filter";
import { Suspense, useState } from "react";

export default function WorstFastFoodByName() {
  const [foodName, setFoodName] = useState("");

  function onFilter(name: string) {
    setFoodName(name);
  }

  return (
    <section>
      <Filter onFilter={onFilter} />
      <Suspense fallback={<h2>Loading data for chart</h2>}>
        <Chart foodName={foodName} />
      </Suspense>
    </section>
  );
}
