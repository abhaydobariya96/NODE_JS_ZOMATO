const Joi = require("joi")

/**createUser */
const createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone: Joi.number().required(),
        password: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        country: Joi.string().required().trim(),
    })
}
/**list state */
const getUser = {
    query: Joi.object().keys({
        user_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        phone: Joi.number().allow(""),
        password: Joi.string().allow("").trim(),
        address: Joi.string().allow("").trim(),
        country: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createUser,
    getUser
}