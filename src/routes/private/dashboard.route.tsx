import { DashboardPage } from "@/domains/dashboard";
import { authMiddleware } from "@/middlewares/auth-middleware";
import { DashboardLayout } from "@/shared/components/dashboard-layout";
import { hydrateFallback } from "@/shared/utils/hydrate-fallback";
import { authLoader } from "@/loaders/auth.loader";
import type { RouteObject } from "react-router";

export const dashboardRoute: RouteObject = {
  path: "/dashboard",
  Component: DashboardLayout,
  middleware: [authMiddleware],
  loader: authLoader,
  HydrateFallback: hydrateFallback,
  children: [
    {
      index: true,
      Component: DashboardPage,
    },
  ],
};
