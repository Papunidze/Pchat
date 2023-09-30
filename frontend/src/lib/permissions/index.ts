// import { AuthType, useAuthContext } from "providers/login-provider";
import { useMemo } from "react";

const permissions = {
  canViewRoles: "can-view-roles",
  canViewPermissions: "can-view-permissions",
} as const;

export type PermissionKey = keyof typeof permissions;

export type Permissions = Record<PermissionKey, boolean>;

export const usePermissions = () => {
  //   const { auth } = useAuthContext();
  const auth = "auth";
  const isAuthenticated = false;
  // auth.type === AuthType.NULL || auth.type === AuthType.UNAUTHENTICATED;

  return useMemo(
    () =>
      Object.entries(permissions).reduce(
        (result, [key /*permissions */]) => ({
          ...result,
          [key]: !isAuthenticated
            ? // ? auth.user.permissions.includes(permissions)
              true
            : false,
        }),
        {} as Permissions
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth]
  );
};
