// export const CatalogApi = "http://localhost:5020";
export const CatalogApi = "http://aa950b1e016e.ngrok.io";

// export const IdentityApi = "http://localhost:5040";
export const IdentityApi = "http://8f9f70feab70.ngrok.io";

// export const OrderingApi = "http://localhost:5030";
export const OrderingApi = "http://c6be20fa83df.ngrok.io";

export const AltCatalogApi = "https://localhost:5021";
export const AltIdentityApi = "https://localhost:5041";
export const AltOrderingApi = "https://localhost:5031";

const apiSupportedVersions = 1;

export const endpoinst = {
  item: `/api/v${apiSupportedVersions}/Item`,
  signin: `/api/v${apiSupportedVersions}/auth/signin`,
  signup: `/api/v${apiSupportedVersions}/auth/signup`,
  order: `/api/v${apiSupportedVersions}/Order
`,
};
