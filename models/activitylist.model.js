const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        activity: {type: String, required: true}
    },
    {
        collection: 'activities'
    }
);

const Activitymodel = mongoose.model("Activitymodel", activitySchema);
module.exports = Activitymodel;