import { ReactNode } from "react";

export interface ITitle {
  attr: "h1" | "h2" | "h3";
  children: ReactNode;
}
