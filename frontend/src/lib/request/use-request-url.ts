export const buildRequestUrl = (reqUrl: string) => {
  return `${import.meta.env.VITE_REACT_APP_LOCAL_URL}${reqUrl}`;
};
