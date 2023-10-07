export const authRoutes = {
  home: "/",
};

export const unauthRoutes = {
  auth: "/",
  forgot: "/recovery-password/:token",
};

export const routes = {
  ...authRoutes,
  ...unauthRoutes,
};
