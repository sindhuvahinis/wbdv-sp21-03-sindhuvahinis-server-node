const mongoose = require("mongoose");
const questionsSchema = require("../questions/questions-schema");

const questionsModel = mongoose.model(
    "QuestionsModel",
    questionsSchema
)

module.exports(questionsModel)