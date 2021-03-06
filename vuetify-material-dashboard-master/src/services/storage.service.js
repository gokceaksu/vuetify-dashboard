const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const SESSION_KEY = 'session'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken () {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken (accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken () {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken () {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken (refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken () {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    },

}

const SessionService = {
    getSession () {
        return localStorage.getItem(SESSION_KEY)
    },

    saveSession (session) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    },

    removeSession () {
        localStorage.removeItem(SESSION_KEY)
    },

}
export { TokenService, SessionService }
