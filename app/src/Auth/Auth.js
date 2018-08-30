import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'maximalley.auth0.com',
    clientID: '4EltmlUJDnGzBtbfXgoc2BdNH4nu1I72',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://maximalley.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
