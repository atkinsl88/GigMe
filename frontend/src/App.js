import React from 'react'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'

import Navbar from './components/common/NavBar'
import Home from './components/common/Home'
import Community from './components/common/Community'
import GigIndex from './components/gigs/GigIndex'
import GigShow from './components/gigs/GigShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/gigs/:id" component={GigShow}/>
        <Route exact path="/gigs" component={GigIndex}/>
        <Route exact path="/community" component={Community}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
