const express = require("express");
const { countryVallidation } = require("../../validations")
const { countryController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create country */
router.post(
    "/create-country",
    validate(countryVallidation.createCountry),
    countryController.createCountry
);

/**list country */
router.get(
    "/get-country",
    validate(countryVallidation.getCountry),
    countryController.getCountry
);

/**delete country */
router.delete(
    "/delete-country/:Id",
    countryController.deleteCountry
);

/**update country */
router.put(
    "/update-country/:Id",
    countryController.updateCountry
);

module.exports = router