import { Route as BaseRoute } from "react-router-dom";
import { AuthType } from "@/context/login-provider";
import { allRoutesData } from "@/app/routes";

export const generateLazyRoutes = (
  permissions: AuthType.AUTHENTICATED | AuthType.UNAUTHENTICATED
) => {
  const { authenticated, unauthenticated } = allRoutesData;

  const routes =
    permissions === AuthType.AUTHENTICATED ? authenticated : unauthenticated;

  return routes.map((page) => (
    <BaseRoute key={page.path} path={page.path} element={<page.component />} />
  ));
};
