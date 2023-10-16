const express = require("express");
const { restDetailsVallidation } = require("../../validations")
const { restDetailsController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create restorent Details */
router.post(
    "/create-restDetails",
    validate(restDetailsVallidation.createRestDetails),
    restDetailsController.createRestDetails
);

/**list restorent Details */
router.get(
    "/get-restDetails",
    validate(restDetailsVallidation.getRestDetails),
    restDetailsController.getRestDetails
);

/**delete restorent Details */
router.delete(
    "/delete-restDetails/:Id",
    restDetailsController.deleteRestDetails
);

/**update restorent Details */
router.put(
    "/uodate-restDetails/:Id",
    restDetailsController.updateRestDetails
);


module.exports = router