type Input<T> = Promise<T> & { status?: string; result?: T; error?: Error };
export function useResultOrThrowPromiseOrError<T>(promise: Input<T>) {
  if (promise.status === "fulfilled") {
    return promise.result;
  } else if (promise.status === "rejected") {
    throw promise.error;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";

    promise
      .then((result) => {
        console.log("save result on success");
        promise.status = "fulfilled";
        promise.result = result;
      })
      .catch((error) => {
        promise.status = "rejected";
        promise.error = error;
      });

    console.log("throw promise");
    throw promise;
  }
}
