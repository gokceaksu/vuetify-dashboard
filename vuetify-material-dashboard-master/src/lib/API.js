const API_URL = 'http://localhost:8080/sigorta/dispatch'

const axios = require('axios')

export default {
  async getIcapUsers () {
    const params = new URLSearchParams()
    params.append('cmd', 'getIcapUsers')
    const res = await axios.post(API_URL, params)

    return res.data
  },

  async login (credentials) {
    const requestBody = {
      userid: credentials.userid,
      password: credentials.password,
      language: 'tr',
    }
    const params = new URLSearchParams()
    params.append('cmd', 'login')
    params.append('jp', JSON.stringify(requestBody))
    const res = await axios.post(API_URL, params)
    return res.data
  },
}
