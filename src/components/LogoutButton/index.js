// Write your JS code here

import {withRouter} from 'react-router-dom'

import {Cookies} from 'js-cookie'

const Logout = props => {
  const {history} = props
  const onClickLogout = () => {
    console.log(props)
    history.push('/about')
  }
  return <button onClick={onClickLogout}>Logout</button>
}

export default withRouter(Logout)
