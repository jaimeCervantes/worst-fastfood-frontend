import { request } from "../fns/requests";
import { useResultOrThrowPromiseOrError } from "../fns/useResultOrThrowPromiseOrError";
import FoodBarChart from "./FoodBarChart";
import type { ResultData } from "../types";

export default function Chart({ foodName }: { foodName?: string }) {
  const fastFoods = useResultOrThrowPromiseOrError<ResultData>(
    request({
      url: `/fastfood-nutrition?food_name=${foodName}`,
      token: sessionStorage.getItem("jwt") as string,
    })
  );

  return (
    <section>
      <h2>Worst food to the left</h2>
      {fastFoods?.length ? <FoodBarChart data={fastFoods} /> : null}
    </section>
  );
}
