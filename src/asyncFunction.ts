export function promiseOk() {
  return Promise.resolve("ok");
}

export function promiseNo() {
  return Promise.reject("no");
}

export async function okAsync() {
  return "ok";
}

export async function noAsync() {
  throw "no";
}
