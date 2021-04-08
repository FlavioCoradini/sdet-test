const validateInputParams = (params) => {
  if (!params) throw new Error("input params are required");

  const { area_code, sample } = params;

  if (!area_code) throw new Error("area_code is required");
  if (!sample) throw new Error("sample is required");

  return params;
};

module.exports = { validateInputParams };
