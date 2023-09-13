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
    component: lazy(() => import("@/page/main")),
  },
];

export const unauthRoutesData: Array<Route> = [
  {
    title: "Password Reset",
    path: routes.resetPassword,
    component: lazy(
      () => import("@/page/auth/reset-password/form/reset-password")
    ),
  },
  {
    title: "Sign In",
    path: routes.signin,
    component: lazy(() => import("@/page/auth/signin/form/signin-form")),
  },
  {
    title: "Sign Up",
    path: routes.signup,
    component: lazy(() => import("@/page/auth/signup/form/signup-form")),
  },
];

export const allRoutesData = [...authRoutesData, ...unauthRoutesData];
