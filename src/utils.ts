// Takes an input object and assigns only values present in the target object.
export function trimObjectByKeys<E extends T, T extends object>(
  initialObject: E,
  targetObject: T
): T {
  const initialEntries = Object.entries(initialObject);
  const newObject: T = Object.fromEntries(
    initialEntries.filter(([key]) => key in targetObject)
  ) as T;
  return newObject;
}
