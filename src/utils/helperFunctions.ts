export function parseJson(data: unknown) {
  if (data) {
    return JSON.parse(JSON.stringify(data));
  }
}
