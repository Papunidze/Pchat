export const authRoutes = {
  home: "/",
};

export const unauthRoutes = {
  auth: "/session",
};

export const routes = {
  ...authRoutes,
  ...unauthRoutes,
};
