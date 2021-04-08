const quizzes = require('./quizzes.json')

// TODO : MongoDB Assignment
const createQuiz = () => {
}
const updateQuiz = () => {
}
const deleteQuiz = () => {
}

// TODO: Node.js Assignment
const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}
