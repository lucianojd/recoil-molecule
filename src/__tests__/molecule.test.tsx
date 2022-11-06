import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import RRW from "../__components__/RecoilRootWrapper";
import TestComponent from "../__components__/TestComponent";

beforeAll(() => {
  render(
    <RRW>
      <TestComponent />
    </RRW>
  );
});

test("Basic test.", async () => {
  await userEvent.click(screen.getByRole("add-apple"));
  await userEvent.click(screen.getByRole("add-orange"));

  expect(screen.getByRole("fruit-count")).toHaveTextContent("2");
});
