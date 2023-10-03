export const authRoutes = {
  home: "/",
};

export const unauthRoutes = {
  auth: "/",
};

export const routes = {
  ...authRoutes,
  ...unauthRoutes,
};
