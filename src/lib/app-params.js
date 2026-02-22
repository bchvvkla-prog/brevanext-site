// app-params.js — Application parameter manager (clean version)

const isNode = typeof window === "undefined";
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const toSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

const getParamValue = (
  paramName,
  { defaultValue = undefined, removeFromUrl = false } = {}
) => {
  if (isNode) return defaultValue;

  const storageKey = `app_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${
      urlParams.toString() ? `?${urlParams.toString()}` : ""
    }${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  if (defaultValue) {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }

  const storedValue = storage.getItem(storageKey);
  return storedValue || null;
};

const getAppParams = () => {
  if (getParamValue("clear_access_token") === "true") {
    storage.removeItem("app_access_token");
    storage.removeItem("token");
  }

  return {
    appId: getParamValue("app_id", {
      defaultValue: import.meta.env.VITE_APP_ID,
    }),
    token: getParamValue("access_token", { removeFromUrl: true }),
    fromUrl: getParamValue("from_url", {
      defaultValue: window.location.href,
    }),
    functionsVersion: getParamValue("functions_version", {
      defaultValue: import.meta.env.VITE_FUNCTIONS_VERSION,
    }),
    appBaseUrl: getParamValue("app_base_url", {
      defaultValue: import.meta.env.VITE_APP_BASE_URL,
    }),
  };
};

export const appParams = {
  ...getAppParams(),
};