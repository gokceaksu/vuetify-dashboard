const API_URL = 'http://localhost:8080/sigorta/dispatch'

const axios = require('axios')
const qs = require('querystring')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}

export default {
  async getIcapUsers () {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'cmd=getIcapUsers',
    })
    console.log('gokce', res.json)
    return res.json()
  },

  login (credentials) {
    const requestBody = {
      cmd: 'login',
      jp: {
        username: credentials.username.stringify,
        password: credentials.password.stringify,
        language: 'tr',
      },
    }
    axios.post(API_URL, qs.stringify(requestBody), config)
    .then((result) => {
      console.log('success')
    })
    .catch((err) => {
      console.log(err)
    })
  },
}
