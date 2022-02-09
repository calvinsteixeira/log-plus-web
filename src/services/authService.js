const axios = require('axios')
const apiUrl = ''

async function login(credentials) {
  // CHAMAR A API DE LOGIN
  try {
    let res = await axios.post(apiUrl, {
      headers: {
        tenant: credentials.tenant,
        username: credentials.username,
        password: credentials.password
      }
    })
    return res.data
  } catch (err) {}
}

module.exports = {
  login
}


