const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
    app.post('/api/quizzes/:quizId/attempts', (req, res) => {
        const quizId = req.params.quizId
        const attempt = req.body

        quizAttemptDao
            .createAttempt(quizId, attempt)
            .then(attempt => res.send(attempt))
    })

    app.get('/api/quizzes/:quizId/attempts', (req, res) => {
        const quizId = req.params.quizId

        quizAttemptDao
            .findAttemptsForQuiz(quizId)
            .then(attempts => res.send(attempts))
    })
}