import React from "react";
import { RecoilRoot } from "recoil";

// RRW -> RecoilRoot Wrapper.
// This element just helps to shorten RecoilRoot to RRW.
function RRW({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RRW;
