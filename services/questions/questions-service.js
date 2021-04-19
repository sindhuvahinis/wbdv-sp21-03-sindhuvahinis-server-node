const questions = require('./questions.json')
const questionsModel = require('../../models/questions/questions-model')

const createQuestion = () => {
}
const createQuestionForQuiz = () => {

}
const updateQuestion = () => {
}
const deleteQuestion = () => {
}

const findAllQuestions = () => {
    return questionsModel.find();
}

const findQuestionsForQuiz = (quizId) => {
    return questionsModel.find({quizId: quizId})
}

const findQuestionById = (questionId) => {
    return questions.filter((question) => {
        return question._id === questionId
    })
}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    updateQuestion,
    deleteQuestion,
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz

}