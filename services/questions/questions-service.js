const questions = require('./questions.json')

const createQuestion = () => {
}
const createQuestionForQuiz = () => {

}
const updateQuestion = () => {
}
const deleteQuestion = () => {
}

const findAllQuestions = () => {
    return questions;
}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return question.quizId === quizId;
    })
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