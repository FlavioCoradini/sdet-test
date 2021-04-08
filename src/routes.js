const router = require("express").Router();
const { validateInputParams } = require("./validation");
const { computeProbability } = require("./model");

/**
 * Compute the probability of at least one COVID-19 positive
 * individual being present at an event of a given size.
 */
router.post("/compute", (req, res) => {
  const body = req.body;

  try {
    const input_params = validateInputParams(body);

    const probability = computeProbability(input_params);

    res.status(200).send({ probability });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * List the areas supported by the API.
 */
router.get("/areas", (req, res) => {
  const areas = {
    items: [
      {
        code: "E92000001",
        name: "England",
      },
      {
        code: "N92000002",
        name: "Northern Ireland",
      },
      {
        code: "S92000003",
        name: "Scotland",
      },
      {
        code: "W92000004",
        name: "Wales",
      },
    ],
  };
  res.status(200).send(areas);
});

module.exports = router;
