import { routes } from "./path";
import { PermissionKey } from "@/lib/permissions";
import { ComponentType } from "react";
import lazy, { PreloadableComponent } from "react-lazy-with-preload";

export type LazyRouteProps = {
  path: string;
  title: string;
  component: PreloadableComponent<ComponentType<unknown>>;
  exact?: boolean;
};

export type Route = LazyRouteProps & { permissions?: Array<PermissionKey> };

export const authRoutesData: Array<Route> = [
  {
    title: "Password Reset",
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

export const allRoutesData = [...authRoutesData, ...unauthRoutesData];
