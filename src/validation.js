const validateInputParams = (params) => {
  const { area_code, sample } = params;

  if (!area_code) throw new Error("area_code is required");
  if (!sample) throw new Error("sample is required");

  return params;
};

module.exports = { validateInputParams };
