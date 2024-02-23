import {Cookies} from 'js-cookie'

import {Redirect} from 'react-router-dom'

const onLoginClick = props => {
  const {history} = props
  Cookies.set('token', 'logined', {expires: 2})
  history.replace('/')
}

const Login = () => {
  const jwtToken = Cookies.get('token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Please Login</h1>
      <buton onClick={onLoginClick}>Login with Sample Creds</buton>
    </div>
  )
}

export default Login
