import { request } from "../fns/requests";
import { useResultOrThrowPromiseOrError } from "../fns/useResultOrThrowPromiseOrError";

export default function Chart({ foodName }: { foodName?: string }) {
  const results = useResultOrThrowPromiseOrError(
    request({
      url: `/fastfood-nutrition?food_name=${foodName}`,
      token: sessionStorage.getItem("jwt") as string,
    })
  );

  return (
    <section>
      <h2>Chart</h2>

      {JSON.stringify(results)}
    </section>
  );
}
