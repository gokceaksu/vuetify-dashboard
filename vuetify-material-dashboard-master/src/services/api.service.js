import axios from 'axios'
// import { TokenService } from '../services/storage.service'

export default {

    init (baseURL) {
        axios.defaults.baseURL = baseURL
    },

    setHeader () {
        // axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`
    },

    removeHeader () {
        axios.defaults.headers.common = {}
    },

    post (cmd, requestBody) {
      const params = new URLSearchParams()
      params.append('cmd', cmd)
      if (requestBody) {
        params.append('jp', JSON.stringify(requestBody))
      }
      return axios.post(axios.defaults.baseURL, params)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest (data) {
        return axios(data)
    },
}
