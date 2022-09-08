const moongose = require("../config/database")

const Writings = moongose.model("Writings", {
    writing:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
        default: "anon"
    }
} )


module.exports = Writings;