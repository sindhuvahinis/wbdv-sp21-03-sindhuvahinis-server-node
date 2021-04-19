const quizzes = require('./quizzes.json')
const quizzesModel = require("../../models/quizzes/quizzes-model")

// TODO : MongoDB Assignment
const createQuiz = () => {
}
const updateQuiz = () => {
}
const deleteQuiz = () => {
}

const findAllQuizzes = () => {
    return quizzesModel.find();
}

const findQuizById = (quizId) => {
    return quizzesModel
        .findById(quizId)
}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}
