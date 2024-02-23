import {Cookies} from 'js-cookie'

import Header from '../Header'

import Logout from '../LogoutButton'

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Header />
        <div>
          <h1>Home Route</h1>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default Home
