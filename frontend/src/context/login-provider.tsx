import constate from "constate";
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useState } from "react";

import { deleteAllCookies } from "@/app/cookie";
import { refresh } from "@/modules/auth/signin/signin.api";

// eslint-disable-next-line react-refresh/only-export-components
export enum AuthType {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  NULL = "null",
}
export type UserState = {
  name: string;
  avatar: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
};

export type AuthState =
  | { type: AuthType.NULL }
  | { type: AuthType.UNAUTHENTICATED }
  | {
      type: AuthType.AUTHENTICATED;
      id: string;
      user: UserState;
    };

export type JwtPayload = {
  id: string;
  user: UserState;
};

export let GlobalAccessToken: string | null;

// eslint-disable-next-line react-refresh/only-export-components
export const decodeJwt = (accessToken: string) =>
  jwtDecode<JwtPayload>(accessToken);

export const Auth = () => {
  const [auth, setAuth] = useState<AuthState>({ type: AuthType.NULL });
  const setAuthData = useCallback(({ ...args }) => {
    GlobalAccessToken = args.accessToken;
    document.cookie = `rt=${args.refreshToken};path=/`;

    const { id, user } = decodeJwt(args.accessToken);

    setAuth(() => ({
      type: AuthType.AUTHENTICATED,
      user,
      id,
    }));
  }, []);

  const removeToken = useCallback(() => {
    setAuth({ type: AuthType.UNAUTHENTICATED });
    deleteAllCookies();
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const { ...args } = await refresh();
      setAuthData({ ...args });
    } catch (err) {
      removeToken();
    }
  }, [removeToken, setAuthData]);

  useEffect(() => {
    auth.type === AuthType.AUTHENTICATED && refreshToken();
  }, [auth.type, refreshToken]);
  const watchToken = (event: StorageEvent) => {
    if (event.key === "rt") {
      removeToken();
      setAuth({ type: AuthType.UNAUTHENTICATED });
    }
  };
  useEffect(() => {
    window.addEventListener("storage", watchToken);

    return () => {
      window.removeEventListener("storage", watchToken);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    auth,
    removeToken,
    setAuthData,
  } as const;
};

// eslint-disable-next-line react-refresh/only-export-components
export const [CheckLoginProvider, useAuthContext] = constate(Auth);
