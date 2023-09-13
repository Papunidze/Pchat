import { Suspense } from "react";
import { Route } from "app/routes";
import { Permissions } from "lib/permissions";
import { Helmet } from "react-helmet-async";
import { Route as BaseRoute } from "react-router-dom";
import PageLoading from "@/utils/loading/Page-Loading";

export const generateLazyRoutes = (
  pages: Array<Route>,
  permissions: Permissions
) => {
  const checkPermission = (page: Route) => {
    return (
      !page.permissions ||
      !page.permissions.some((permission) => permissions[permission] === false)
    );
  };

  return pages.map((page) => {
    return checkPermission(page) ? (
      <BaseRoute
        key={page.path}
        path={page.path}
        element={
          <>
            <Suspense fallback={<PageLoading />}>
              <Helmet title={page.title} />
              <page.component />
            </Suspense>
          </>
        }
      />
    ) : null;
  });
};