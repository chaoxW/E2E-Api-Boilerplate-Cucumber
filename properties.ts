const variables = {
    api: {
        baseUrl: process.env.E2E_URL || "https://api.spacexdata.com/",
        version: "v3/",
    },
};

export const api = variables.api;
