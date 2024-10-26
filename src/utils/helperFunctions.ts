import { any, equals } from "ramda";

export function parseJson(data: unknown) {
  if (data) {
    return JSON.parse(JSON.stringify(data));
  }
}

export const arrayContainObject = (
  arr: any,
  targetObject: any,
  targetKey: any,
) => {
  return any(
    (obj: any) => equals(obj[targetKey], targetObject[targetKey]),
    arr,
  );
};
