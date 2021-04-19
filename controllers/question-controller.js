const questionService = require("../services/questions/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.send(questions));
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.quizId
        questionService.findQuestionsForQuiz(quizId).then(questions => res.send(questions))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
}