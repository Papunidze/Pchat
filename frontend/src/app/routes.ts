import { AuthType } from "@/context/login-provider";
import { routes } from "./path";

import { ComponentType, lazy } from "react";

export type LazyRouteProps = {
  path: string;
  title: string;
  component: ComponentType<unknown>;
  exact?: boolean;
};

export type Route = LazyRouteProps;

export const authRoutesData: Array<Route> = [
  {
    title: "Live-Chat",
    path: routes.home,
    component: lazy(() => import("@/page/chat")),
  },
];

export const unauthRoutesData: Array<Route> = [
  {
    title: "Authorization",
    path: routes.auth,
    component: lazy(() => import("@/page/auth")),
  },
];

export const allRoutesData = {
  [AuthType.AUTHENTICATED]: authRoutesData,
  [AuthType.UNAUTHENTICATED]: unauthRoutesData,
};
