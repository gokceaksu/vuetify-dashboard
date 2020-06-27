const API_URL = 'http://localhost:8080/sigorta/dispatch'

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

  login () {
  },
}
