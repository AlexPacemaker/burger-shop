import { ReactNode } from "react";

export interface ITitles {
  attr: "h1" | "h2" | "h3";
  children: ReactNode;
  classname?: string;
}
