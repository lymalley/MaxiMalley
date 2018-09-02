import Auth from '../Auth/Auth'
const url = process.env.REACT_APP_BASE_URL + '/'

export const getUsers = () => {
  const auth = new Auth()
  const token = auth.getToken()
  return fetch(url, {
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(res => res.json())
}
