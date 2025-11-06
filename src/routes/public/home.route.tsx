import { HomePage } from "@/domains/home";
import type { RouteObject } from "react-router";

export const homeRoute: RouteObject = {
  path: "/",
  Component: HomePage,
};
