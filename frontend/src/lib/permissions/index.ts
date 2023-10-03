import { useMemo } from "react";
import { AuthType, useAuthContext } from "@/context/login-provider";

export const usePermissions = () => {
  const { auth } = useAuthContext();

  return useMemo(() => {
    return auth.type === AuthType.NULL ? null : auth.type;
  }, [auth.type]);
};
