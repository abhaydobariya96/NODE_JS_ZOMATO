const mongoose = require("mongoose")

const foodGallarySchima = new mongoose.Schema(
    {
        food_name: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true,
        },
        food_desc: {
            type: String,
            trim: true
        },
        price: {
            type: mongoose.Types.ObjectId,
            ref: "orderDetails"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const foodGallary = mongoose.model("foodGallary", foodGallarySchima)
module.exports = foodGallary;