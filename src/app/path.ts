export const authRoutes = {
  home: "/",
};

export const unauthRoutes = {
  resetPassword: "/password-reset",
  signin: "/signin",
  signup: "/signup",
};

export const routes = {
  ...authRoutes,
  ...unauthRoutes,
};
