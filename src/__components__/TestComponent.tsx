import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import molecule from "../molecule";

const apples = atom<{ apples: number }>({
  key: "apples",
  default: {
    apples: 0,
  },
});

const oranges = atom<{ oranges: number }>({
  key: "oranges",
  default: {
    oranges: 0,
  },
});

const fruit = atom<{ fruit: number }>({
  key: "fruit",
  default: {
    fruit: 0,
  },
});

const appleMolecule = molecule(apples, fruit);
const orangeMolecule = molecule(oranges, fruit);

function TestComponent() {
  const [appleCount, setApplesCount] = useRecoilState(appleMolecule);
  const [orangeCount, setOrangeCount] = useRecoilState(orangeMolecule);

  const fruitCount = useRecoilValue(fruit);

  return (
    <div role="container">
      <h1 role="apple-count">{appleCount.apples}</h1>
      <h1 role="orange-count">{orangeCount.oranges}</h1>
      <h1 role="fruit-count">{fruitCount.fruit}</h1>
      <button
        role="add-apple"
        onClick={() =>
          setApplesCount({
            apples: appleCount.apples + 1,
            fruit: fruitCount.fruit + 1,
          })
        }
      >
        Add Apple
      </button>
      <button
        role="add-orange"
        onClick={() =>
          setOrangeCount({
            oranges: orangeCount.oranges + 1,
            fruit: fruitCount.fruit + 1,
          })
        }
      >
        Add Orange
      </button>
    </div>
  );
}

export default TestComponent;
