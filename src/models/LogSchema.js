const { model, Schema } = require("mongoose");

const LogSchema = new Schema({
    username: String,
    count: Number,
    _id: String,
    log: [{
        description: String,
        duration: Number,
        date: String,
    }]
})

module.exports = model("Log", LogSchema)