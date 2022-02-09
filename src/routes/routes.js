module.exports = function (app) {
  const authController = require('../controllers/authController')
  app.get('/', function (req, res) {
    res.render('../views/pages/index')
  })

  app.post('/login', async (req, res) => {
    let result = await authController.login(req, res)

    if (result.hasError === true) {
      console.log('error')
    }
  })
}
