// Controllers deal with HTTP related stuffs
// In between the HTTP and Javascript
module.exports = (app) => {

    const quizzesService = require('../services/quizzes/quizzes-service')

    // req and res allows participating in client - server architecture
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then(quizzes => res.send(quizzes))
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        quizzesService.findQuizById(quizId)
            .then(quiz => res.send(quiz))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:quizId", findQuizById)
}