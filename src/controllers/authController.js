
const authService = require('../services/authService.js')

module.exports = {
  login: async (req, res) => {
    const credentials = {
      tenant: req.body.tenant,
      username: req.body.username,
      password: req.body.password
    }
    return await authService.login(credentials)
    
  }
}
