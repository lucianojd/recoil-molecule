import { DefaultValue, RecoilState, selector } from "recoil";
import { trimObjectByKeys } from "./utils";

function molecule<A extends object, B extends object>(
  atomA: RecoilState<A>,
  atomB: RecoilState<B>
): RecoilState<A & B> {
  const key = `${atomA.key}-${atomB.key}`;

  return selector({
    key,
    get: ({ get }) => ({ ...get(atomA), ...get(atomB) }),
    set: ({ set, get, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        reset(atomA);
        reset(atomB);
      } else {
        set(atomA, trimObjectByKeys(newValue, get(atomA)));
        set(atomB, trimObjectByKeys(newValue, get(atomB)));
      }
    },
  });
}

export default molecule;
