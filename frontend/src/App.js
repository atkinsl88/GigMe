import React from 'react'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'

import Navbar from './components/common/NavBar'
import Home from './components/common/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
