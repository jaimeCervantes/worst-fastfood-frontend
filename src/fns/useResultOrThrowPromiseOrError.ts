type Result<T> = Promise<T> & { status?: string; result?: T; error?: Error };
export function useResultOrThrowPromiseOrError<T>(promise: Result<T>) {
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
        promise.status = "fulfilled";
        promise.result = result;
      })
      .catch((error) => {
        promise.status = "rejected";
        promise.error = error;
      });

    throw promise;
  }
}
