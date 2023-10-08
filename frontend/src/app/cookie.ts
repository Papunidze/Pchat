import { GlobalAccessToken } from "@/context/login-provider";

export const getRefreshToken = () => {
  const nameEQ = "auth=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return "null";
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

export const generateHeader = (type: string) => {
  const headers: HeadersInit = {
    authorization: `Bearer ${GlobalAccessToken}`,
  };

  if (type === "FORM") {
    return headers;
  }

  headers["Content-type"] = "application/json";
  headers["X-RT"] = getRefreshToken();

  return headers;
};

export const generateRedirectRoute = (
  destination: string,
  permanent: boolean
) => {
  return { destination, permanent };
};
