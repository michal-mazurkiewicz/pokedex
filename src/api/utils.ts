export const paramsToQueryString = (params?: any) => {
  if (!params) return "";

  const queryArray: Array<string> = [];
  for (const [k, v] of Object.entries(params)) {
    if (v || v === 0) {
      if (Array.isArray(v)) {
        if (v.length) {
          Object.values(v).forEach((el) => {
            if (el.length) {
              queryArray.push(`${k}=${el}`);
            }
          });
        }
      } else {
        queryArray.push(`${k}=${v}`);
      }
    }
  }

  if (!queryArray.length) return "";
  return `?${queryArray.join("&")}`;
};
