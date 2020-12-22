export const host = "http://8530f8da5a51.ngrok.io";

const apiSupportedVersions = 1;

export const endpoinst = {
  item: `/api/v${apiSupportedVersions}/Item`,
  signin: `/api/v${apiSupportedVersions}/auth/signin`,
  signup: `/api/v${apiSupportedVersions}/auth/signup`,
};
